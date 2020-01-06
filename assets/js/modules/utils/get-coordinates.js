/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-cycle
import { Canvas } from '../components/Canvas';

export function getCoordinates(e, sizeOneBlock) {
  let positionX = Math.floor(e.offsetX / sizeOneBlock) * sizeOneBlock;
  let positionY = Math.floor(e.offsetY / sizeOneBlock) * sizeOneBlock;

  if (Canvas.canvas.width === 128) {
    positionX = Math.floor(positionX / 4);
    positionY = Math.floor(positionY / 4);
  }

  if (Canvas.canvas.width === 64) {
    positionX = Math.floor(positionX / 8);
    positionY = Math.floor(positionY / 8);
  }

  if (Canvas.canvas.width === 32) {
    positionX = Math.floor(positionX / 16);
    positionY = Math.floor(positionY / 16);
  }

  return [positionX, positionY];
}
