import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Review: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
  Camera: undefined;
  FoodDetail: undefined;
  EditProfile: undefined;
  FoodReview: undefined;
  AddReview: undefined;
  FoodCalculate: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

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
