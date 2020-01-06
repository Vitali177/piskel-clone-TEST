/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Canvas } from './Canvas';
import { Tools } from './Tools';
import { getCoordinates } from '../utils/get-coordinates';
import { getHexColor } from '../utils/get-HEX-color';

export const PaintBucket = {
  fillArea(e) {
    const { sizeOneBlock } = Canvas;
    const positionsXY = getCoordinates(e, sizeOneBlock);

    const ctx = Canvas.canvas.getContext('2d');
    const oldColor = ctx.getImageData(...positionsXY, 1, 1).data.toString();
    ctx.fillStyle = Tools.primaryColor;

    if (getHexColor(ctx.getImageData(...positionsXY, 1, 1).data) === Tools.primaryColor) return;

    const arr = [[...positionsXY]];
    let coords;

    while (arr.length !== 0) {
      coords = arr.pop();
      ctx.fillRect(coords[0], coords[1], sizeOneBlock, sizeOneBlock);

      if (ctx.getImageData(coords[0] + sizeOneBlock, coords[1], 1, 1).data.toString() === oldColor) {
        arr.push([coords[0] + sizeOneBlock, coords[1]]);
      }

      if (ctx.getImageData(coords[0], coords[1] + sizeOneBlock, 1, 1).data.toString() === oldColor) arr.push([coords[0], coords[1] + sizeOneBlock]);

      if (ctx.getImageData(coords[0] - sizeOneBlock, coords[1], 1, 1).data.toString() === oldColor) arr.push([coords[0] - sizeOneBlock, coords[1]]);

      if (ctx.getImageData(coords[0], coords[1] - sizeOneBlock, 1, 1).data.toString() === oldColor) arr.push([coords[0], coords[1] - sizeOneBlock]);
    }
  },
};
