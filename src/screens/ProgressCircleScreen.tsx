import { useValue, runTiming } from "@shopify/react-native-skia";
import { useCallback } from "react";
import { Button, Dimensions, StyleSheet, Text, View } from "react-native";
import { ProgressCircle } from "../components/Graphics/";

export const ProgressCircleScreen = () => {
  const progress = useValue(0);
  const onPress = useCallback(() => {
    runTiming(progress, 1.0);
  }, [progress]);

  const onQuarterPress = useCallback(() => {
    runTiming(progress, 0.25);
  }, [progress]);

  const onHalfPress = useCallback(() => {
    runTiming(progress, 0.5);
  }, [progress]);

  const on3QuartersPress = useCallback(() => {
    runTiming(progress, 0.75);
  }, [progress]);

  const onCancel = useCallback(() => {
    runTiming(progress, 0);
  }, [progress]);

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
      <Text style={{ fontSize: 24, marginVertical: 8 }}>Progress Circle</Text>
      <ProgressCircle
        progress={progress}
        size={200}
        containerStyle={{
          backgroundColor: "lightblue",
          padding: 16,
          borderRadius: 8,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        <Button onPress={onQuarterPress} title="0.25" />
        <Button onPress={onHalfPress} title="0.5" />
        <Button onPress={on3QuartersPress} title="0.75" />
        <Button onPress={onPress} title="1.0" />
      </View>

      <Button onPress={onCancel} title="reset" color={"orangered"} />
    </View>
  );
};
