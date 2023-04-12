import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "../screens/HomeScreen";
import { ProgressCircleScreen } from "../screens/ProgressCircleScreen";

export type RootStackParamList = {
  Home: undefined;
  ProgressCircleScreen: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
