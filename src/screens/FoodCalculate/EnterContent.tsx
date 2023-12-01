import React, { useMemo, useState } from "react";
import { FoodDetail, Nutrients } from "@/types/food";
import { View, Text } from "react-native";
import {
  Clickable,
  FoodSearchItem,
  NutritionInfo,
  SmallButton,
} from "@/components";
import {
  align,
  bg,
  colors,
  fill,
  h,
  justify,
  margin,
  padding,
  round,
  row,
  springMotion,
  text,
} from "@/styles";
import { Motion } from "@legendapp/motion";
import { useFoodDetail } from "@/hooks";
import { Icon } from "@/icons";

interface Props {
  food?: FoodDetail;
  foodName: string;
  setFoodName: (foodName: string) => void;
  nutrients: Nutrients;
  setNutrients: (nutrients: Nutrients) => void;
}

export const EnterContent: React.FC<Props> = ({
  food,
  foodName,
  setFoodName,
  nutrients,
  setNutrients,
}) => {
  const [expanded, setExpanded] = useState(!food);
  const [editing, setEditing] = useState(!food);

  // if (variant === "folded") return <View style={[row]}></View>;
  // const Chevron = useMemo(
  //   () => (expanded ? Icon.down_wide : Icon.right_wide),
  //   [expanded],
  // );

  return (
    <View>
      <Clickable
        viewStyle={[round.md, margin.horizontal(-12)]}
        onPress={() => setExpanded(expanded => !expanded)}
      >
        <View style={[row, justify.between, align.center, padding(12)]}>
          <Text style={[text.h3, text.gray600]}>음식 정보</Text>
          <Motion.View animate={{ rotate: expanded ? "0deg" : "-90deg" }}>
            <Icon.down_wide fill={colors.gray500} width={30} height={30} />
          </Motion.View>
        </View>
      </Clickable>
      <Motion.View
        style={[{ overflow: "hidden" }]}
        animate={{ height: expanded ? 450 : 0 }}
      >
        {editing ? (
          <View />
        ) : (
          <View>
            {food && (
              <FoodSearchItem
                name={food.name}
                tags={food.tag}
                category={food.content.className || ""}
                type={food?.content.type}
                imageSrc={food?.imageSrc}
              />
            )}
            <NutritionInfo totalWeight={100} nutrients={nutrients} />

            <SmallButton title="수정하기" onPress={() => {}} />
          </View>
        )}
      </Motion.View>
    </View>
  );
};
