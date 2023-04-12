import { StatusBar } from "expo-status-bar";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStack } from "./src/navigation";

type RootStackParamList = {
  Home: undefined;
  ProgressCircleScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <RootStack />
      <StatusBar style="auto" />
    </>
  );
}
