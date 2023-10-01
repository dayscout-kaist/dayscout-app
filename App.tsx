import { RootStack } from "@/navigation/RootStack";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => (
  <SafeAreaProvider>
    <RootStack/>
  </SafeAreaProvider>
);

export default App;
