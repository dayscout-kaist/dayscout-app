import React, { useCallback, useEffect, useRef } from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { css } from "@emotion/native";
import axios from "axios";
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
  text
} from "@/styles";

export const ImageSearch: React.FC<RootStackScreenProps<"ImageSearch">> = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const insets = useSafeAreaInsets();

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  const captureImage = useCallback(async () => {
    if (!cameraRef.current) return;

    cameraRef.current.pausePreview();
    const picture = await cameraRef.current.takePictureAsync();
    const formData = new FormData();
    formData.append("file", {
      uri: picture.uri,
      name: "image.jpg",
      type: "image/jpeg"
    } as any);

    const res = await axios.post(
      "http://172.30.1.34:8000/nutrition-facts-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

    console.log(res);

  }, [cameraRef.current]);

  if (!permission?.granted) return (
    <View style={stretch}>
      <Text>Permission not granted</Text>
      <Button title="Request permission" onPress={() => requestPermission()}/>
    </View>
  );

  return (
    <View style={[stretch, padding.bottom(insets.bottom)]}>
      <Camera
        ref={cameraRef}
        style={stretch}
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
