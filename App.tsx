import { RootStack } from "@/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Temp fix to suppress Animated warning
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {});

const App = () => (
  <SafeAreaProvider>
    <RootStack />
  </SafeAreaProvider>
);

export default App;
