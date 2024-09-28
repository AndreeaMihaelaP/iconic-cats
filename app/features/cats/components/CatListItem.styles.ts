import { Dimensions, ImageStyle, TextStyle, ViewStyle } from "react-native";
import { colors } from "~infrastructure/theme/colors";

const { width } = Dimensions.get("screen");

const imageW = width * 0.7;
const imageH = imageW * 1.5;

const card: ViewStyle = {
  borderRadius: 24,
  backgroundColor: colors.black,
};

const cardTop: ViewStyle = {
  position: "relative",
  borderRadius: 24,
};

const cardImg: ImageStyle = {
  width: "100%",
  height: imageH,
  borderTopRightRadius: 24,
  borderTopLeftRadius: 24,
};

const cardBody: ViewStyle = {
  minWidth: 300,
  paddingVertical: 16,
  paddingHorizontal: 12,
};

const cardHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 12,
};

const cardSubHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  // marginBottom: 12,
};

const subHeaderItem: ViewStyle = {
  flexDirection: "row",
  padding: 5,
};

const cardTitle: TextStyle = {
  // fontSize: 15,
  // fontWeight: "500",
  // color: colors.purple,
};

const cardScore: TextStyle = {
  fontSize: 16,
  fontWeight: "700",
  color: colors.white,
};

const cardDescription: TextStyle = {
  fontSize: 15,
  letterSpacing: 0.25,
  lineHeight: 22,
  fontWeight: "600",
  color: colors.white,
  paddingLeft: 5,
};

export const catListItemStyles = {
  card,
  cardTop,
  cardImg,
  cardTitle,
  cardBody,
  cardHeader,
  cardSubHeader,
  subHeaderItem,
  cardScore,
  cardDescription,
};
