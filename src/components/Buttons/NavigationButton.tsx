import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Button, TouchableOpacity, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../../navigation";

type Props = {
  children?: string;
  templateName: keyof RootStackParamList;
};
export const NavigationButton = ({ children = "", templateName }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const handleNavigation = useCallback(() => {
    navigation.navigate(templateName);
  }, [navigation, templateName]);
  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: "blue",
    textAlign: "center",
  },
});
