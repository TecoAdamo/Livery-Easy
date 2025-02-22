import { View, Text, StyleSheet } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import Step from "../step/step";

export default function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona</Text>
      <Step
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
        icon={(props) => <Ionicons name="location-outline" {...props} />}
      />
      <Step
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
        icon={(props) => <Ionicons name="qr-code-outline" {...props} />}
      />
      <Step
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
        icon={(props) => <Ionicons name="gift-outline" {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
  },
});
