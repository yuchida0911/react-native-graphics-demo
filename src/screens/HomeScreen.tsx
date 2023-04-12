import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Button } from "react-native";
import { NavigationButton } from "../components/Buttons/NavigationButton";
import { RootStackParamList } from "../navigation";

export const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <NavigationButton templateName="ProgressCircleScreen">
        Progress Circle
      </NavigationButton>
    </View>
  );
};
