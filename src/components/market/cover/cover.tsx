import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { fontFamily } from "@/styles/font-family";
import { Button } from "@/components/button/buttonGo";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type Props = {
  uri: string;
};
export default function Cover({ uri }: Props) {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 60, height: 60 }} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 232,
    marginBottom: -32,
    backgroundColor: colors.gray[200],
  },
  header: {
    padding: 24,
    paddingTop: 56,
  },
});
