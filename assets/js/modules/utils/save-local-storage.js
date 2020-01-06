/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import { Canvas } from '../components/Canvas';

export function saveToLocalStorage() {
  // localStorage.setItem('canvas', Canvas.canvas.toDataURL());
  localStorage.setItem('canvasWidth', Canvas.canvas.width);
}
