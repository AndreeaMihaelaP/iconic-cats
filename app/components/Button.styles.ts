import { ViewStyle, TextStyle } from "react-native/types";

import { colors } from "~infrastructure/theme/colors";

const container = (disabled: boolean): ViewStyle => ({
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderRadius: 8,
  elevation: 3,
  backgroundColor: disabled ? colors.gray : colors.purple,
});

const text: TextStyle = {
  fontSize: 16,
  lineHeight: 21,
  letterSpacing: 0.25,
  color: colors.purple,
};

export const buttonStyles = {
  container,
  text,
};
