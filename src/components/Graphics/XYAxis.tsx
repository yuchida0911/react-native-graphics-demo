import React from "react";
import { screenWidth } from "../../constants";
import { CoordinatesUtil } from "../../utils/coordinates";
import { Path } from "@shopify/react-native-skia";

type Props = {
  size: number;
};

export const XYAxis = ({ size }: Props) => {
  const hPos = CoordinatesUtil.convertCartesianToCanvas(
    { x: -size, y: 0 },
    size
  );
  const vPos = CoordinatesUtil.convertCartesianToCanvas(
    { x: 0, y: size },
    size
  );

  const hLine = `M ${hPos.x} ${hPos.y} H  ${-2 * hPos.x}`;
  const vLine = `M ${vPos.x} ${vPos.y} V  ${-2 * vPos.y}`;

  return (
    <>
      <Path path={vLine} strokeWidth={1} style="stroke" />
      <Path path={hLine} strokeWidth={1} style="stroke" />
    </>
  );
};
