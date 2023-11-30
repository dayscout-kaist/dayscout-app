import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Switch,
  TextInput,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useAuthToken } from "@/hooks";
import { Icon } from "@/icons";
import {
  bg,
  text,
  padding,
  gap,
  margin,
  row,
  justify,
  align,
  fill,
  column,
  safe,
  round,
  colors,
} from "@/styles";

export const Settings: React.FC = () => {
  const navigation = useNavigation();
  const { clearToken } = useAuthToken();

  const [isSwitch1On, setSwitch1On] = useState(false);
  const [isSwitch2On, setSwitch2On] = useState(false);
  const [isSwitch3On, setSwitch3On] = useState(false);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const avatarSrc =
    "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg";
  const nickname = "나도이제개발";

  return (
    <View style={[fill]}>
      <View style={[bg.white, padding.horizontal(safe.horizontal)]}>
        <Text style={[text.h1, margin.top(48), margin.bottom(16)]}>정보</Text>
      </View>
      <ScrollView>
        <View style={[column, gap(12)]}>
          <View
            style={[
              bg.white,
              padding.horizontal(safe.horizontal),
              padding.vertical(32),
            ]}
          >
            <Text style={[text.h3, margin.bottom(16)]}>계정</Text>
            <View style={[row, justify.between, align.center]}>
              <View style={[row, align.center, gap(14)]}>
                <Image
                  style={round.full}
                  source={{ uri: avatarSrc, width: 40, height: 40 }}
                />
                <Text style={[margin.right(16), text.sub2, text.gray600]}>
                  {nickname}
                </Text>
              </View>
              <TouchableOpacity>
                <Icon.right width={30} height={30} fill={colors.gray400} />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={[
              bg.white,
              padding.horizontal(safe.horizontal),
              padding.vertical(32),
            ]}
          >
            <Text style={[text.h3, margin.bottom(16)]}>신체 정보 수정</Text>
            <View style={[row, justify.between, align.center]}>
              <Text style={[text.sub2, margin.right(16)]}>키</Text>
              <View
                style={[
                  row,
                  round.lg,
                  bg.gray100,
                  justify.between,
                  align.center,
                ]}
              >
                <TextInput
                  style={[
                    text.body1,
                    margin.right(8),
                    margin.bottom(4),
                    { width: 48, textAlign: "right" },
                  ]}
                  onChangeText={setHeight}
                  value={height}
                  keyboardType="numeric"
                  returnKeyType="done"
                  placeholder="160"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Text style={[text.body1, text.gray500, margin.right(8)]}>
                  cm
                </Text>
              </View>

              <Text style={[text.sub2, margin.right(16)]}>체중</Text>
              <View
                style={[
                  row,
                  round.lg,
                  bg.gray100,
                  justify.between,
                  align.center,
                ]}
              >
                <TextInput
                  style={[
                    text.body1,
                    margin.right(8),
                    margin.bottom(4),
                    { width: 48, textAlign: "right" },
                  ]}
                  onChangeText={setWeight}
                  value={weight}
                  keyboardType="numeric"
                  returnKeyType="done"
                  placeholder="55"
                  onSubmitEditing={Keyboard.dismiss}
                />
                <Text style={[text.body1, text.gray500, margin.right(8)]}>
                  kg
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={[
              bg.white,
              padding.horizontal(safe.horizontal),
              padding.vertical(16),
            ]}
            onPress={() => navigation.navigate("Help")}
          >
            <View style={[row, justify.start, align.center]}>
              <Text style={[text.h3]}>도움말 모아보기</Text>
              <View style={[{ flex: 1 }]} />
              <Icon.right width={30} height={30} fill={colors.gray400} />
            </View>
          </TouchableOpacity>
          <View
            style={[
              bg.white,
              padding.horizontal(safe.horizontal),
              padding.vertical(32),
            ]}
          >
            <Text style={[text.h3, margin.bottom(8)]}>알람 설정</Text>
            <View
              style={[row, justify.between, align.center, margin.vertical(8)]}
            >
              <Text style={[text.body1]}>식후 1시간</Text>
              <Switch
                value={isSwitch1On}
                onValueChange={newValue => setSwitch1On(newValue)}
                trackColor={{ true: colors.primary }}
              />
            </View>
            <View
              style={[row, justify.between, align.center, margin.vertical(8)]}
            >
              <Text style={[text.body1]}>식후 2시간</Text>
              <Switch
                value={isSwitch2On}
                onValueChange={newValue => setSwitch2On(newValue)}
                trackColor={{ true: colors.primary }}
              />
            </View>
            <View
              style={[row, justify.between, align.center, margin.vertical(8)]}
            >
              <Text style={[text.body1]}>식후 4시간</Text>
              <Switch
                value={isSwitch3On}
                onValueChange={newValue => setSwitch3On(newValue)}
                trackColor={{ true: colors.primary }}
              />
            </View>
          </View>
          <Button title="로그아웃" onPress={() => clearToken()} />
        </View>
      </ScrollView>
    </View>
  );
};
