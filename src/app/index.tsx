import { View, Text, StyleSheet } from "react-native";
import { fontFamily } from "@/styles/font-family";
import Welcome from "@/components/welcome/welcome";
import Steps from "@/components/steps/steps";
import { Button } from "@/components/button/buttonGo";

import { router } from "expo-router";
import { navigate } from "expo-router/build/global-state/routing";

export default function Initial() {
  return (
    <View style={styles.container}>
      <Welcome />
      <Steps />
      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Começar</Button.Title>
      </Button>
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
