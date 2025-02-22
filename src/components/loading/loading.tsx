import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "@/styles/theme";

export default function Loading() {
  return (
    <ActivityIndicator
      color={colors.green.base}
      size={60}
      style={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.gray[100],
  },
});
