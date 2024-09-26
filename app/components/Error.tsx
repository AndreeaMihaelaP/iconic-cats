import React from "react";
import { View, Text } from "react-native";

import Button from "./Button";

import { errorStyles } from "./Error.styles";

interface ErrorProps {
  message: string;
  refresh?: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, refresh }) => (
  <View style={errorStyles.errorContainer}>
    <Text style={errorStyles.errorText}>{message}</Text>
    {refresh ? <Button title="Refresh" onPress={refresh} /> : null}
  </View>
);

export default Error;
