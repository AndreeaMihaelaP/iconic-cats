import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";

import { errorStyles } from "./CustomError.styles";

interface ErrorProps {
  message: string;
  refresh?: () => void;
  dismiss?: boolean;
}

const CustomError: React.FC<ErrorProps> = ({ message, refresh, dismiss }) => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <View style={errorStyles.errorContainer}>
      <Text style={errorStyles.errorText}>{message}</Text>
      {refresh && <Button title="Refresh" onPress={refresh} />}
      {dismiss && (
        <TouchableOpacity
          onPress={handleDismiss}
          style={errorStyles.dismissButton}>
          <Text style={errorStyles.dismissText}>X</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomError;
