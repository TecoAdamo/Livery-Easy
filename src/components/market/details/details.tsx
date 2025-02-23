import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Button } from "@/components/button/buttonGo";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Info from "../info/info";

export type PropsDetails = {
  name: string;
  description: string;
  address: string;
  phone: string;
  coupons: number;
  rules: {
    id: string;
    description: string;
  }[];
};

type Props = {
  data: PropsDetails;
};
export default function Details({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info description={`${data.coupons} cupons disponíveis`} />
        <Info description={data.address} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>
        {data?.rules?.length ? (
          data.rules.map((item) => (
            <Text key={item.id} style={styles.rule}>
              {item.description}
            </Text>
          ))
        ) : (
          <Text style={styles.rule}>Nenhuma regra disponível</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    paddingBottom: 0,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: colors.gray[100],
  },
  name: {
    fontSize: 20,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 16,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 12,
    marginBottom: 32,
    lineHeight: 22,
  },
  group: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
    paddingBottom: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: fontFamily.medium,
    color: colors.gray[500],
    marginBottom: 12,
    marginTop: 12,
  },
  rule: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.green.dark,
  },
});
