import { Stack } from "expo-router";
import { colors } from "@/styles/theme";

import {
  useFonts,
  FiraCode_600SemiBold,
  FiraCode_400Regular,
  FiraCode_500Medium,
  FiraCode_700Bold,
} from "@expo-google-fonts/fira-code";
import Loading from "@/components/loading/loading";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    FiraCode_600SemiBold,
    FiraCode_400Regular,
    FiraCode_500Medium,
    FiraCode_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.gray[100] },
      }}
    />
  );
}
