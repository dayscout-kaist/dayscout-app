import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function App () {
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <Text>Waiting for camera permission...</Text>;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={CameraType.back}
        barCodeScannerSettings={{
          barCodeTypes: [
            BarCodeScanner.Constants.BarCodeType.ean8,
            BarCodeScanner.Constants.BarCodeType.ean13,
          ]
        }}
        onBarCodeScanned={res => {
          console.log(res);
        }}
      >
      </Camera>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
