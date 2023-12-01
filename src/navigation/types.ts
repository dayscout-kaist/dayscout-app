import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

import type { GenderTxt } from "@/types/auth";
import type { Post } from "@/types/post";

export type AuthStackParamList = {
  Landing: undefined;
  EmailPwd: undefined;
  Nickname: { email: string; password: string };
  Inbody: AuthStackParamList["Nickname"] & { nickname: string };
  Personal: AuthStackParamList["Inbody"] & { height: number; weight: number };
  Greet: AuthStackParamList["Personal"] & { birth: string; gender: GenderTxt };
};

export type HomeTabParamList = {
  Home: undefined;
  Search: undefined;
  Posts: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  HomeTab: NavigatorScreenParams<HomeTabParamList>;
  Camera: undefined;
  BarcodeSearch: undefined;
  FoodDetail: { foodId: number };
  EditProfile: undefined;
  FoodReview: { foodId: number };
  AddPost: { post: Post };
  AddReview: undefined;
  FoodCalculate: undefined;
  Help: undefined;
};

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, RootStackParamList {}
  }
}
