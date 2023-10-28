import { RootStack } from "@/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';

// Temp fix to suppress Animated warning
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {});

const App = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    {/* <RootStack /> */}
  </SafeAreaProvider>
);

export default App;
