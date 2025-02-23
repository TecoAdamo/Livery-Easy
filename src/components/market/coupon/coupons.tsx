import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Button } from "@/components/button/buttonGo";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  code: string;
};
export default function Coupons({ code }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Utilize esse Cupom</Text>
      <View style={styles.content}>
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
  },
  title: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium,
    marginBottom: 12,
    fontSize: 14,
  },
  content: {
    flexDirection: "row",
    backgroundColor: colors.green.soft,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    gap: 10,
  },
  code: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold,
    textTransform: "uppercase",
  },
});
