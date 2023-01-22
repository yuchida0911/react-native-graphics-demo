import {
  Canvas,
  Path,
  Vector,
  useValue,
  runTiming,
} from "@shopify/react-native-skia";
import { useCallback } from "react";
import { Button, Dimensions, Text, View } from "react-native";

const screenWidth = Dimensions.get("screen").width;

const cartesian2Canvas = (v: Vector) => {
  return {
    x: v.x + screenWidth / 2,
    y: -1 * v.y + screenWidth / 2,
  };
};

const polar2Cartesian = (radius: number, theta: number) => {
  "worklet";
  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  };
};

const polar2Canvas = (radius: number, theta: number) => {
  return cartesian2Canvas(polar2Cartesian(radius, theta));
};

const convertDegToRad = (deg: number) => {
  var pi = Math.PI;
  return deg * (pi / 180);
};

export const ProgressCircleScreen = () => {
  const radius = 100;
  const progress = useValue(0);
  const onPress = useCallback(() => {
    runTiming(progress, 0.8);
  }, [progress]);

  const onCancel = useCallback(() => {
    runTiming(progress, 0);
  }, [progress]);

  const start1 = polar2Canvas(radius, convertDegToRad(225));
  const end1 = polar2Canvas(radius, convertDegToRad(-45));

  const start2 = polar2Canvas(radius, convertDegToRad(-45));
  const end2 = polar2Canvas(radius, convertDegToRad(225));

  const hPos = cartesian2Canvas({ x: -screenWidth, y: 0 });
  const vPos = cartesian2Canvas({ x: 0, y: screenWidth });

  const hLine = `M ${hPos.x} ${hPos.y} H  ${-2 * hPos.x}`;
  const vLine = `M ${vPos.x} ${vPos.y} V  ${-2 * vPos.y}`;

  const path1 = `M ${start1.x} ${start1.y} A ${radius} ${radius} 0 1 1 ${end1.x} ${end1.y}`;
  const path2 = `M ${start2.x} ${start2.y} A ${radius} ${radius} 0 1 0 ${end2.x} ${end2.y}`;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        paddingTop: 100,
        paddingHorizontal: 24,
        width: Dimensions.get("screen").width,
        alignItems: "center",
      }}
    >
      <Text>Progress Circle</Text>
      <Canvas
        style={{
          width: screenWidth,
          height: screenWidth,
        }}
      >
        <Path path={vLine} strokeWidth={1} style="stroke" />
        <Path path={hLine} strokeWidth={1} style="stroke" />
        <Path
          path={path2}
          color="gray"
          style="stroke"
          strokeWidth={20}
          strokeJoin="round"
          strokeCap="round"
        />
        <Path
          path={path1}
          color="orangered"
          style="stroke"
          strokeWidth={20}
          strokeJoin="round"
          strokeCap="round"
          end={progress}
        />
      </Canvas>
      <Button onPress={onPress} title="animate" />
      <Button onPress={onCancel} title="reset" />
    </View>
  );
};
