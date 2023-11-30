import { NavigationProp, useNavigation } from "@react-navigation/native";

import { Icon } from "@/icons";
import { colors, padding, round } from "@/styles";

import { Clickable } from "./Clickable";

interface Props {
  onPress?: (navigation: NavigationProp<ReactNavigation.RootParamList>) => void;
}

export const IconButton: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Clickable
      viewStyle={[round.md, padding(8)]}
      onPress={() => onPress?.(navigation)}
    >
      <Icon.add width={24} height={24} fill={colors.gray300} />
    </Clickable>
  );
};
