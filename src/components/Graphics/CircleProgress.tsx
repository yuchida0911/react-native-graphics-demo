import {
  Canvas,
  LinearGradient,
  Path,
  SkiaMutableValue,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import React from "react";
import { View, ViewStyle } from "react-native";
import { END_RADIAN, START_RADIAN } from "../../constants";
import { CoordinatesUtil } from "../../utils/coordinates";
import { XYAxis } from "./XYAxis";

type Props = {
  progress: SkiaMutableValue<number>;
  size?: number;
  strokeWidth?: number;
  gradientColors?: string[];
  containerStyle?: ViewStyle;
};

const STROKE_WIDTH = 20;
const GRADIENT_POSITION = { start: vec(0, 0), end: vec(129, 155) };

export const ProgressCircle = ({
  progress,
  size = 200,
  strokeWidth = STROKE_WIDTH,
  gradientColors = ["#FFE600", "#FA7B05", "#FFE600"],
  containerStyle,
}: Props) => {
  const radius = size / 2 - strokeWidth / 2;

  const start1 = CoordinatesUtil.convertPolarToCanvas(
    radius,
    START_RADIAN,
    size
  );
  const end1 = CoordinatesUtil.convertPolarToCanvas(radius, END_RADIAN, size);

  const start2 = CoordinatesUtil.convertPolarToCanvas(
    radius,
    START_RADIAN,
    size
  );
  const end2 = CoordinatesUtil.convertPolarToCanvas(radius, END_RADIAN, size);

  const path1 = `M ${start1.x} ${start1.y} A ${radius} ${radius} 0 1 1 ${end1.x} ${end1.y}`;
  const path2 = `M ${start2.x} ${start2.y} A ${radius} ${radius} 0 1 1 ${end2.x} ${end2.y}`;

  return (
    <View style={containerStyle}>
      <Canvas
        style={[
          {
            width: size,
            height: size,
          },
        ]}
      >
        {/* use XYAxis component to see how angles are used to calculate the position of arc's start/end more intuitively*/}
        <XYAxis size={size} />

        <Path
          path={path2}
          color="gray"
          strokeWidth={strokeWidth}
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
        />
        <Path
          path={path1}
          end={progress}
          strokeWidth={strokeWidth}
          style="stroke"
          strokeJoin="round"
          strokeCap="round"
        >
          <SweepGradient c={vec(128, 145)} colors={gradientColors} />
        </Path>
      </Canvas>
    </View>
  );
};
