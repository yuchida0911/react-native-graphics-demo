import { View } from "react-native";
import { NavigationButton } from "../components/Buttons/NavigationButton";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationButton templateName="ProgressCircleScreen">
        Progress Circle
      </NavigationButton>
      <NavigationButton templateName="ShaderScreen">Shader</NavigationButton>
    </View>
  );
};
