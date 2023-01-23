import { Vector } from "@shopify/react-native-skia";

/**
 * Cartesian Coordinates set its origin (0, 0) to the center of the View or Screen
 * Canvas Coordinate set is origin to the top left corner of the View or Screen
 * Because Cartesian is more intuitive and easier for calculating vectors,
 * Following utilites are prepared.
 */

/** convert Cartesian coordinate to Canvas coordinate */
const convertCartesianToCanvas = (v: Vector, canvasSize: number) => {
  return {
    x: v.x + canvasSize / 2,
    y: -1 * v.y + canvasSize / 2,
  };
};

/** calculate Cartesian coordiate(x, y) from radius and angle */
const convertPolarToCartesian = (radius: number, theta: number) => {
  "worklet";
  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  };
};

/** calculate Canvas coordinate(x, y) from the radius and the angle */
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
