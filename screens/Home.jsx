import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import Contents from "../components/Contents";
import Loader from "../components/Loader";
import global from "../styles/global";
import themeContext from "../config/themeContext";

export default function Home({ navigation, props }) {
  const [isLoading, setIsLoading] = useState(false);
  const theme = useContext(themeContext);
  const { colors } = useTheme();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, []);
  return (
    <View style={[global.home, { backgroundColor: colors.background }]}>
      {isLoading ? (
        <Contents />
      ) : (
        <>
          <Loader size="large" color="red" />
        </>
      )}
    </View>
  );
}
