import { View, Text, StyleSheet } from "react-native";
import { fontFamily, colors } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; color?: string }>;
};

export default function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={42} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 16,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 14,
  },
});
