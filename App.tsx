import React, { useCallback } from "react";
import { Animated, KeyboardAvoidingView, LogBox, Platform } from "react-native"; // Temp fix to suppress Animated warning
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RootStack } from "@/navigation/RootStack";
import { fill } from "@/styles";
import { OverlayProvider } from "@toss/use-overlay";

const av = new Animated.Value(0);
av.addListener(() => {});

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

if (!__DEV__) LogBox.ignoreAllLogs();

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
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <KeyboardAvoidingView
          style={fill}
          behavior={Platform.select({ ios: "padding", android: "height" })}
        >
          <GestureHandlerRootView style={fill}>
            <BottomSheetModalProvider>
              <OverlayProvider>
                <SafeAreaProvider onLayout={onLayoutRootView}>
                  <RootStack />
                </SafeAreaProvider>
              </OverlayProvider>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </KeyboardAvoidingView>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
