import { Dimensions, TextStyle, ViewStyle } from "react-native";
import { colors } from "~infrastructure/theme/colors";

const { width } = Dimensions.get("screen");

const container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.black,
};

const itemContainer: ViewStyle = {
  width,
  alignItems: "center",
  justifyContent: "center",
  shadowColor: "#000",
  shadowRadius: 30,
  shadowOffset: { height: 0, width: 0 },
  shadowOpacity: 0.6,
  elevation: 2,
  padding: 24,
};

const title: TextStyle = {
  fontSize: 32,
  fontWeight: "600",
  color: colors.white,
  padding: 24,
  textTransform: "uppercase",
};

const loadingContainer: ViewStyle = {
  height: "90%",
  alignItems: "center",
  justifyContent: "center",
};

export const catsListStyles = {
  container,
  itemContainer,
  title,
  loadingContainer,
};
