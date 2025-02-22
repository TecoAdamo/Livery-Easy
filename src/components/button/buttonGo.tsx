import {
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  TextProps,
  ActivityIndicator,
} from "react-native";

import { fontFamily, colors } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

type IconProps = {
  name: keyof typeof Ionicons.glyphMap;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.containerBtn, style]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size={22} color={colors.gray[300]} />
      ) : (
        <View style={styles.content}>{children}</View>
      )}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={styles.containerTitle}>{children}</Text>;
}

function Icon({ name }: IconProps) {
  return <Ionicons name={name} size={22} color={colors.gray[100]} />;
}

const styles = StyleSheet.create({
  containerBtn: {
    height: 56,
    maxHeight: 56,
    backgroundColor: colors.green.base,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  containerTitle: {
    fontSize: 18,
    fontFamily: fontFamily.semiBold,
    color: colors.gray[100],
  },
});

Button.Title = Title;
Button.Icon = Icon;
export { Button };
