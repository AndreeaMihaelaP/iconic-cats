import { TextStyle, ViewStyle } from "react-native/types";

import { colors } from "~infrastructure/theme/colors";

const errorContainer: ViewStyle = {
  padding: 20,
  backgroundColor: colors.light_red,
  alignItems: "center",
  borderRadius: 5,
  position: "relative",
  marginBottom: 10,
};

const errorText: TextStyle = {
  fontSize: 20,
  color: colors.red,
};

const dismissButton: ViewStyle = {
  position: "absolute",
  top: 10,
  right: 10,
  padding: 5,
};

const dismissText: TextStyle = {
  color: colors.black,
  fontSize: 18,
  fontWeight: "bold",
};

export const errorStyles = {
  errorContainer,
  errorText,
  dismissButton,
  dismissText,
};
