import * as React from "react";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const CustomButton = ({
  navigation,
  style,
  onPress,
  icon,
  mode,
  children,
  buttonColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={{
        marginVertical: 10,
      }}
    >
      <Button
        icon={icon}
        mode={mode}
        onPress={onPress}
        buttonColor={buttonColor}
        textColor={textColor}
        style={style}
      >
        {children}
      </Button>
    </TouchableOpacity>
  );
};

export default CustomButton;
