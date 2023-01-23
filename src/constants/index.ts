import { Dimensions } from "react-native";
import { CoordinatesUtil } from "../utils/coordinates";

export const screenWidth = Dimensions.get("screen").width;

export const CIRCLE_ANGLES = { start: 225, end: -45 };

export const START_RADIAN = CoordinatesUtil.convertDegToRad(
  CIRCLE_ANGLES.start
);
export const END_RADIAN = CoordinatesUtil.convertDegToRad(CIRCLE_ANGLES.end);
