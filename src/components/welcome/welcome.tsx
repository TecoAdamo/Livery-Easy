import { View, Text, Image, StyleSheet } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import Steps from "../steps/steps";

export default function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />
      <Text style={styles.title}>Bem vindo ao Livery Easy</Text>
      <Text style={styles.subTitle}>
        Tenha cupons de vantagem para usar em seus estabelecimentos favoritos.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 48,
    height: 48,
    marginTop: 24,
    marginBottom: 28,
  },
  title: {
    fontFamily: fontFamily.bold,
    fontSize: 24,
    color: colors.gray[600],
  },
  subTitle: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
  },
});
