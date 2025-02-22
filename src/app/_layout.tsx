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
import { GestureHandlerRootView } from "react-native-gesture-handler";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.gray[100] },
        }}
      />
    </GestureHandlerRootView>
  );
}
