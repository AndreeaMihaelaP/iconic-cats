import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { colors } from "~infrastructure/theme/colors";

const _spacing = 14;
const _buttonSize = 64;

const container: ViewStyle = {
  position: "absolute",
  bottom: _spacing * 1,
  right: _spacing * 2,
};

const iconContainer: ViewStyle = {
  width: _buttonSize,
  height: _buttonSize,
  borderRadius: _buttonSize / 2,
  backgroundColor: colors.black,
  justifyContent: "center",
  alignItems: "center",
};

const imageContainer: ViewStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};

const image: ImageStyle = {
  width: 200,
  height: 200,
  margin: 10,
  borderRadius: 10,
  padding: 50,
};
const status: TextStyle = {
  padding: 20,
  fontSize: 16,
  color: colors.red,
};

export const uploadStyles = {
  container,
  iconContainer,
  imageContainer,
  image,
  status,
};
