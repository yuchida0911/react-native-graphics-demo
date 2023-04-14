import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { ProgressCircleScreen } from "../screens/ProgressCircleScreen";
import { ShaderScreen } from "../screens/ShaderScreen";

export type RootStackParamList = {
  Home: undefined;
  ProgressCircleScreen: undefined;
  ShaderScreen: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ProgressCircleScreen"
          component={ProgressCircleScreen}
        />
        <Stack.Screen name="ShaderScreen" component={ShaderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
