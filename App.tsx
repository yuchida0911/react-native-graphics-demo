import { StatusBar } from "expo-status-bar";
import React from "react";
import { ProgressCircleScreen } from "./src/screens/ProgressCircleScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Button, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  ProgressCircleScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Progress Circle"
        onPress={() => navigation.navigate("ProgressCircleScreen")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ProgressCircleScreen"
          component={ProgressCircleScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
