import React, { useContext } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import themeContext from "../config/themeContext";

export default function About() {
  const theme = useContext(themeContext);
  const Image = require("../assets/Images/pat3.jpg");
  return (
    <View styles={styles.container}>
      <ImageBackground style={{ padding: 10, height: 700 }} source={Image}>
        <Text style={{ color: "white", fontSize: 19 }}>
          We give you update on all the latest happenings in nigeria.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
