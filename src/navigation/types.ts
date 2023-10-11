import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import type { FoodContentOptional, FoodInfo } from "@/types/food";

export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
  ImageSearch: undefined;
  TextSearch?: { query: string };
  FoodInfo: {
    name?: string;
    category?: string;
    manufacturer?: string;
    content: FoodContentOptional;
  };
  SelectIntake: {
    foodInfo: FoodInfo;
  };
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Home: undefined;
  Settings: undefined;
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
