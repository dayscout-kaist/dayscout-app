import { RootStackScreenProps } from "@/navigation/types";
import { Camera } from "expo-camera";
import { align, colors, fill, justify, margin, round, text } from "@/styles";
import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { searchByBarcode } from "@/api";

export const BarcodeSearch: React.FC<RootStackScreenProps<"BarcodeSearch">> = ({
  navigation,
}) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { width, height } = Dimensions.get("window");
  const cameraRef = useRef<Camera>(null);

  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = useCallback(
    (barcode: number) => {
      if (scanned) return;

      setScanned(true);

      cameraRef.current?.pausePreview();
      searchByBarcode(barcode).then(res => {
        navigation.replace("FoodDetail", { foodId: res.id });
      });
    },
    [navigation, setScanned, scanned],
  );

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  if (!permission?.granted)
    return (
      <View style={fill}>
        <Text>Permission not granted</Text>
        <Button
          title="Request permission"
          onPress={() => requestPermission()}
        />
      </View>
    );

  return (
    <Camera
      ref={cameraRef}
      style={[fill, align.stretch]}
      barCodeScannerSettings={{
        barCodeTypes: [
          BarCodeScanner.Constants.BarCodeType.ean8,
          BarCodeScanner.Constants.BarCodeType.ean13,
        ],
      }}
      onBarCodeScanned={e => handleBarCodeScanned(parseInt(e.data))}
    >
      <View
        style={[
          fill,
          {
            borderColor: "rgba(0, 0, 0, 0.5)",
            borderTopWidth: 0.3 * height,
            borderBottomWidth: 0.35 * height,
            borderLeftWidth: 0.1 * width,
            borderRightWidth: 0.1 * width,
          },
        ]}
      >
        <Text
          style={[
            text.sub1,
            text.white,
            {
              position: "absolute",
              top: -60,
              width: "100%",
              textAlign: "center",
            },
          ]}
        >
          음식 바코드를 스캔해 보세요
        </Text>
        <View
          style={[
            fill,
            round.lg,
            margin(-5),
            {
              borderWidth: 5,
              borderColor: colors.primary,
            },
          ]}
        ></View>
      </View>
    </Camera>
  );
};
