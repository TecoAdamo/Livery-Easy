import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Button } from "@/components/button/buttonGo";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  description: string;
};
export default function Info({ description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fontFamily.regular,
    lineHeight: 22.4,
    flex: 1,
  },
});
