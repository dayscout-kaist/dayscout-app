import { DefaultTheme, type Theme } from "@react-navigation/native";
import { colors } from "@/styles";

export const AppTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
    card: colors.white,
    border: colors.gray50,
    text: colors.gray600,
  },
};
