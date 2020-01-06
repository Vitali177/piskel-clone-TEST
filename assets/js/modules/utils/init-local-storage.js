/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Canvas } from '../components/Canvas';
import { drawCanvasInSelectedFrame } from './draw-canvas-in-frame';

export function initLocalStorage() {
  if (localStorage.getItem('canvas')) {
    const ctx = Canvas.canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;

    const dataURL = localStorage.getItem('canvas');
    const img = new Image();
    img.src = dataURL;
    img.style.imageRendering = 'pixelated';
    img.onload = () => ctx.drawImage(img, 0, 0, Canvas.canvas.width, Canvas.canvas.height);

    drawCanvasInSelectedFrame();
  }
  if (localStorage.getItem('canvasWidth')) {
    const canvasWidth = localStorage.getItem('canvasWidth');

    Canvas.canvas.width = canvasWidth;
    Canvas.canvas.height = canvasWidth;

    Canvas.canvasNumberBlocks = canvasWidth;
    Canvas.sizeOneBlock = Canvas.canvas.width / Canvas.canvasNumberBlocks;

    const buttonsChangeSize = document.querySelectorAll('.canvas-size button');

    buttonsChangeSize.forEach((button) => {
      button.classList.remove('selected');
    });

    const buttonClass = `size-${canvasWidth}`;
    document.querySelector(`.${buttonClass}`).classList.add('selected');
  } else {
    // ! Прописать дефолтные размеры
  }
}
