import React, { useCallback } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { RootStack } from "@/navigation/RootStack";
import { fill } from "@/styles";

// Temp fix to suppress Animated warning
import { Animated } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const av = new Animated.Value(0);
av.addListener(() => {});

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-1.3.9/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Bold.otf"),
    "TossFace": require("./assets/fonts/TossFace/TossFaceFontMac.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <GestureHandlerRootView style={fill}>
          <BottomSheetModalProvider>
            <RootStack />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
