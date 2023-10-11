import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { css } from "@emotion/native";
import { Camera } from "expo-camera";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import type { RootStackScreenProps } from "@/navigation/types";
import {
  align,
  bg,
  column,
  gap,
  padding,
  w,
  h,
  round,
  text,
} from "@/styles";
import { searchByBarcode, searchByImage } from "@/api";
import { BarCodeScanner } from "expo-barcode-scanner";

export const ImageSearch: React.FC<RootStackScreenProps<"ImageSearch">> = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(false);

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const captureImage = useCallback(async () => {
    if (loading || !cameraRef.current) return;

    setLoading(true);
    const picture = await cameraRef.current.takePictureAsync();

    try {
      const foodContent = await searchByImage(picture.uri);

      navigation.navigate("FoodInfo", {
        content: foodContent,
      });
    } catch (error) {
      alert(error);
    }
  }, [cameraRef.current, loading, setLoading]);

  const handleBarCodeScanned = useCallback((code: number) => {
    if (loading) return;

    setLoading(true);
    searchByBarcode(code).then(food =>
      navigation.navigate("TextSearch", { query: food.name }),
    );

  }, [navigation, loading, setLoading]);

  useEffect(() => {
    if (loading) cameraRef.current?.pausePreview();
  }, [loading, cameraRef.current]);

  if (!permission?.granted) return (
    <View style={stretch}>
      <Text>Permission not granted</Text>
      <Button title="Request permission" onPress={() => requestPermission()} />
    </View>
  );

  return (
    <View style={[stretch, padding.bottom(insets.bottom)]}>
      <Camera
        ref={cameraRef}
        style={stretch}
        barCodeScannerSettings={{
          barCodeTypes: [
            BarCodeScanner.Constants.BarCodeType.ean8,
            BarCodeScanner.Constants.BarCodeType.ean13,
          ],
        }}
        onBarCodeScanned={e => handleBarCodeScanned(parseInt(e.data))}
      />


      <View style={[column, align.center, padding.top(20), gap(10)]}>
        <Text style={[text.gray97]}>영양성분표 또는 바코드를 찍어보세요</Text>
        <TouchableOpacity
          style={[bg.primary, w(72), h(72), round.full]}
          onPress={captureImage}
        />
      </View>
    </View>
  );
};

const stretch = css`flex: 1;`;
