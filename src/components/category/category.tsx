import {
  View,
  Text,
  StyleSheet,
  Alert,
  Pressable,
  PressableProps,
} from "react-native";
import { fontFamily, colors } from "@/styles/theme";

type Props = PressableProps & {
  name: string;

  isSelected?: boolean;
};

export function Category({ name, isSelected = false, ...rest }: Props) {
  return (
    <Pressable
      style={[styles.container, isSelected && styles.containerSelected]}
      {...rest}
    >
      <Text style={[styles.name, isSelected && styles.nameSelected]}>
        {name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 2,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fontFamily.bold,
  },

  containerSelected: {
    backgroundColor: colors.green.base,
    borderColor: colors.gray[300],
    borderWidth: 2,
  },
  nameSelected: {
    backgroundColor: "transparent",
    color: colors.gray[100],
  },
});
