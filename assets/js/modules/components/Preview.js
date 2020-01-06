/* eslint-disable import/prefer-default-export */

export const Preview = {
  framesSrc: [],
  interval: 500,
  timer: null,

  show() {
    let indexFrame = 0;
    const that = this;

    function showFrame() {
      const previewFrame = document.querySelector('.preview canvas');

      const ctx = previewFrame.getContext('2d');
      ctx.imageSmoothingEnabled = false;

      ctx.clearRect(0, 0, previewFrame.width, previewFrame.height);

      const dataURL = that.framesSrc[indexFrame];
      const img = new Image();
      img.src = dataURL;
      img.style.imageRendering = 'pixelated';
      img.onload = () => ctx.drawImage(img, 0, 0, previewFrame.width, previewFrame.height);

      // eslint-disable-next-line no-unused-expressions
      indexFrame + 1 >= that.framesSrc.length ? indexFrame = 0 : indexFrame += 1;
    }

    this.timer = setInterval(() => {
      showFrame();
    }, this.interval);
  },

  changeInterval(value) {
    if (+value === 0) {
      Preview.interval = 0;
      clearInterval(this.timer);
    } else {
      Preview.interval = Math.round(1000 / value);
      clearInterval(this.timer);
      this.show();
    }
  },
};
