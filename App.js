import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  Provider,
} from "react-native-paper";
import { EventRegister } from "react-native-event-listeners";
import Navigate from "./components/Navigate";
import themeContext from "./config/themeContext";
import themee from "./config/theme";
import {
  NavigationContainer,
  DarkTheme as navDark,
  DefaultTheme as navDefault,
} from "@react-navigation/native";

export default function App() {
  const customDarkTheme = {
    ...navDark,
    ...DarkTheme,

    colors: {
      ...DarkTheme.colors,
      ...navDark.colors,
      background: "#333333",
      text: "#ffffff",
    },
  };

  const customDefaultTheme = {
    ...DefaultTheme,
    ...navDefault,

    colors: {
      ...DefaultTheme.colors,
      ...navDefault.colors,
      background: "#ffffff",
      text: "#333333",
    },
  };
  const [isEnabled, setIsEnabled] = useState(false);
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
        setIsEnabled(data);
        console.log(data, "switch");
      }
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });
  const theme = isEnabled ? customDarkTheme : customDefaultTheme;
  return (
    <View style={[styles.container, {}]}>
      {/* <Header /> */}
      {/* <themeContext.Provider
        value={isEnabled === true ? themee.dark : themee.light}
      > */}
      <Provider theme={theme}>
        <NavigationContainer theme={theme}>
          <Navigate />
        </NavigationContainer>
      </Provider>
      {/* </themeContext.Provider> */}
      {/* <Nav /> */}
      <StatusBar style={isEnabled ? "light" : "auto"} />
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
