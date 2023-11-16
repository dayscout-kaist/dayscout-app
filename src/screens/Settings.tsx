import React, { useState } from "react";
import { Button, Text, View ,Image, Switch, TextInput, Keyboard, ScrollView, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { bg, text, padding,gap, margin, border, row, justify, align, fill, column, safe, round, colors} from "@/styles";
import { Icon } from "@/icons";
import { color } from "react-native-elements/dist/helpers";


export const Settings: React.FC = () => {
  const navigation = useNavigation();

  const [isSwitch1On, setSwitch1On] = useState(false);
  const [isSwitch2On, setSwitch2On] = useState(false);
  const [isSwitch3On, setSwitch3On] = useState(false);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const avatarSrc = "https://sparcs-newara-dev.s3.amazonaws.com/files/NewAra_Channeltalk.jpg"
  const nickname = "나도이제개발"
  return (
    <View style={[fill]}>
      <View style={[bg.white,padding.horizontal(safe.horizontal)]}>
        <Text style={[text.h1, margin.top(48),margin.bottom(16)]}>정보</Text>
      </View>
      <ScrollView>
        <View style={[column, gap(12)]}>
          <View style={[bg.white,padding.horizontal(safe.horizontal),padding.vertical(16)]}>
              <Text style={[text.h3, margin.bottom(16)]}>계정</Text>
              <View style ={[row, justify.start, align.center]}>
                <Image
                  style={[round.full, margin.right(16)]}
                  source={{ uri: avatarSrc, width: 40, height: 40 }}
                />
                <Text style={[text.sub2,margin.right(16)]}>{nickname}</Text>
                <View style={[{flex:1}]}/>
                <TouchableOpacity><Icon.right width={30} height={30} fill={colors.gray400}/></TouchableOpacity>
                
              </View>

          </View>

          <View style={[bg.white,padding.horizontal(safe.horizontal),padding.vertical(16)]}>
            <Text style={[text.h3, margin.bottom(16)]}>신체 정보 수정</Text>
            <View style={[row, justify.between, align.center]}>
              <Text style={[text.sub2,margin.right(16)]}>키</Text>
              <TextInput
                style={[text.body1, {width:30,textAlign: 'right'}]} 
                onChangeText={setHeight}
                value={height}
                keyboardType="numeric"
                returnKeyType="done" 
                onSubmitEditing={Keyboard.dismiss}
              />
              <Text style={[text.body1, text.gray500,margin.right(16)]}>cm</Text>

              <Text style={[text.sub2,margin.right(16)]}>체중</Text>
              <TextInput
                style={[text.body1, { width:30, textAlign: 'right'}]}
                onChangeText={setWeight}
                value={weight}
                keyboardType="numeric"
                returnKeyType="done" 
                onSubmitEditing={Keyboard.dismiss}
              />
              <Text style={[text.body1,text.gray500]}>kg</Text>
            </View>
          </View>

          <View style={[bg.white,padding.horizontal(safe.horizontal),padding.vertical(16)]}>
            <Text style={[text.h3, margin.bottom(8)]}>알람 설정</Text>
            <View style={[row, justify.between, align.center, margin.vertical(8)]}>
              <Text style={[text.body1]}>식후 1시간</Text>
              <Switch
                value={isSwitch1On}
                onValueChange={(newValue) => setSwitch1On(newValue)}
                trackColor={{true:colors.primary}}
              />    
            </View>
            <View style={[row, justify.between, align.center, margin.vertical(8)]}>
              <Text style={[text.body1]}>식후 2시간</Text>
              <Switch
                value={isSwitch2On}
                onValueChange={(newValue) => setSwitch2On(newValue)}
                trackColor={{true:colors.primary}}

              />    
            </View>
            <View style={[row, justify.between, align.center, margin.vertical(8)]}>
              <Text style={[text.body1]}>식후 4시간</Text>
              <Switch
                value={isSwitch3On}
                onValueChange={(newValue) => setSwitch3On(newValue)}
                trackColor={{true:colors.primary}}

              />        
            </View>
          </View>
        </View>
      </ScrollView>
    </View>

  );
};
