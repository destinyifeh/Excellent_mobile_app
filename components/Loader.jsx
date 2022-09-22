import React from "react";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";

const Loader = ({ size, color, style }) => {
  return (
    <>
      <ActivityIndicator size={size} color={color} style={style} />
    </>
  );
};

export default Loader;
