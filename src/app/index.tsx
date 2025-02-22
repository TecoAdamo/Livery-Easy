import { View, Text, StyleSheet } from "react-native";
import { fontFamily } from "@/styles/font-family";
import Welcome from "@/components/welcome/welcome";
import Steps from "@/components/steps/steps";

export default function Initial() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    gap: 40,
  },
});
