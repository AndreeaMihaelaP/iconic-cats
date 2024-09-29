import React, { ReactElement } from "react";
import { Pressable, Text, View } from "react-native";

import { buttonStyles } from "./Button.styles";

interface ButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  icon?: ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  icon,
  disabled = false,
}) => {
  return (
    <Pressable
      style={buttonStyles.container(disabled)}
      onPress={onPress}
      disabled={disabled}>
      <View style={{ flexDirection: "row" }}>
        {title ? <Text style={buttonStyles.text}>{title}</Text> : null}
        {icon ? icon : null}
      </View>
    </Pressable>
  );
};

export default Button;
