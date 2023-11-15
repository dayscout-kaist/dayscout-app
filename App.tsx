import React, { useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { RootStack } from "@/navigation/RootStack";

// Temp fix to suppress Animated warning
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {});

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Pretendard-Regular": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Regular.otf"),
    "Pretendard-Medium": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Medium.otf"),
    "Pretendard-SemiBold": require("./assets/fonts/Pretendard-1.3.9/Pretendard-SemiBold.otf"),
    "Pretendard-Bold": require("./assets/fonts/Pretendard-1.3.9/Pretendard-Bold.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <RootStack />
    </SafeAreaProvider>
  );
};

export default App;
