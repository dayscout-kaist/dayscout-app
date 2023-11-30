import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Clickable } from "@/components/Clickable";
import { Icon } from "@/icons";
import { padding, round } from "@/styles";

interface Props {
  onPress?: (navigation: NavigationProp<ReactNavigation.RootParamList>) => void;
}

export const IconButton: React.FC<Props> = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <Clickable
      viewStyle={[padding(8), round.md]}
      onPress={() => onPress?.(navigation)}
    >
      <Icon.add width={26} height={26} />
    </Clickable>
  );
};
