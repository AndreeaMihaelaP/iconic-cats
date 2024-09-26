import { TextStyle, ViewStyle } from "react-native/types";

import { colors } from "~infrastructure/theme/colors";

const errorContainer: ViewStyle = {
  padding: 20,
  backgroundColor: colors.light_red,
  alignItems: "center",
};

const errorText: TextStyle = {
  fontSize: 20,
  color: colors.red,
};

export const errorStyles = {
  errorContainer,
  errorText,
};
