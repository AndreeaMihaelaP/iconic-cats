import { TextStyle, ViewStyle } from "react-native";
import { colors } from "~infrastructure/theme/colors";

const container: ViewStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: colors.background,
  // paddingTop: 24,
};

const title: TextStyle = {
  fontSize: 32,
  fontWeight: "700",
  color: "#ffff",
  // marginTop: 12,
  padding: 24,
};

const loadingContainer: ViewStyle = {
  height: "90%",
  alignItems: "center",
  justifyContent: "center",
};

export const catsListStyles = {
  container,
  title,
  loadingContainer,
};
