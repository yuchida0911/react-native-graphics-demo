import { Vector } from "@shopify/react-native-skia";

const convertCartesianToCanvas = (v: Vector, canvasSize: number) => {
  return {
    x: v.x + canvasSize / 2,
    y: -1 * v.y + canvasSize / 2,
  };
};

const convertPolarToCartesian = (radius: number, theta: number) => {
  "worklet";
  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  };
};

const convertPolarToCanvas = (
  radius: number,
  theta: number,
  canvasSize: number
) => {
  return convertCartesianToCanvas(
    convertPolarToCartesian(radius, theta),
    canvasSize
  );
};

const convertDegToRad = (deg: number) => {
  var pi = Math.PI;
  return deg * (pi / 180);
};

export const CoordinatesUtil = {
  convertCartesianToCanvas,
  convertPolarToCartesian,
  convertPolarToCanvas,
  convertDegToRad,
} as const;
