import React, { useState, useEffect, useContext } from "react";

import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, useTheme } from "react-native-paper";
import themeContext from "../config/themeContext";
import { footerYear } from "../utils/formatter";
const Footer = () => {
  const theme = useContext(themeContext);
  const { colors } = useTheme();
  // const date = new Date().getFullYear();
  return (
    <View style={[styles.footer, { backgroundColor: theme.background }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={{ textAlign: "center", color: colors.text }}>
          Made with{" "}
        </Text>
      </TouchableWithoutFeedback>
      <Button icon="heart" textColor="red"></Button>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Text style={{ textAlign: "center", color: colors.text }}>
          &copy; {footerYear} By Dez
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    textAlign: "center",
    padding: 20,
  },
});
export default Footer;
