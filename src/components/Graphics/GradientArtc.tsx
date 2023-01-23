import { LinearGradient, Path, vec } from "@shopify/react-native-skia";
import React from "react";

type Props = {
  path: string;
  strokeWidth: number;
};

export const GradientArc = ({ path, strokeWidth }: Props) => {
  return (
    <Path
      path={path}
      strokeWidth={strokeWidth}
      strokeJoin="round"
      strokeCap="round"
      style="stroke"
    >
      <LinearGradient
        start={vec(0, 0)}
        end={vec(256, 256)}
        colors={["blue", "yellow"]}
      />
    </Path>
  );
};
