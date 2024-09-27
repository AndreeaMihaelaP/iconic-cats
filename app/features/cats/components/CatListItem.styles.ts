import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { colors } from "~infrastructure/theme/colors";

const card: ViewStyle = {
  elevation: 4,
  shadowColor: colors.purple,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  borderWidth: 1,
  borderColor: "black",
  borderRadius: 24,
  marginBottom: 24,
  backgroundColor: colors.white,
  padding: 10,
};

const subHeaderItem: ViewStyle = {
  marginEnd: 5,
};

const cardTop: ViewStyle = {
  position: "relative",
  borderRadius: 24,
};

const cardImg: ImageStyle = {
  width: "100%",
  height: 380,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
};

const cardBody: ViewStyle = {
  paddingVertical: 16,
  paddingHorizontal: 12,
};

const cardSubHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 12,
};

const cardHeader: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 12,
};

const cardTitle: TextStyle = {
  fontSize: 15,
  fontWeight: "500",
  // color: colors.purple,
};

const cardDuration: TextStyle = {
  fontSize: 16,
  fontWeight: "700",
  color: colors.dark_gray,
};

const cardDescription: TextStyle = {
  fontSize: 15,
  letterSpacing: 0.25,
  lineHeight: 22,
  fontWeight: "500",
  color: colors.dark_gray,
};

export const catListItemStyles = {
  card,
  subHeaderItem,
  cardTop,
  cardImg,
  cardTitle,
  cardBody,
  cardHeader,
  cardSubHeader,
  cardDuration,
  cardDescription,
};
