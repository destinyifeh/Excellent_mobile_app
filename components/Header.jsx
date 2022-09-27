import React, { useState, useEffect, useContext } from "react";
import { View, Text, TouchableWithoutFeedback, Switch } from "react-native";
import {
  Avatar,
  Searchbar,
  Appbar,
  Menu,
  Button,
  Provider,
  useTheme,
} from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/themeContext";
const Header = ({ back, navigation }) => {
  const { colors } = useTheme();
  const theme = useContext(themeContext);
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
  const textChange = (text) => {
    setText(text);
  };

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content
          title="Excellent"
          titleStyle={isEnabled ? { color: colors.text } : { color: "red" }}
        />
        <Appbar.Action
          icon="magnify"
          size={25}
          iconColor={isEnabled ? theme.color : "red"}
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        <Switch
          value={isEnabled}
          onValueChange={(value) => {
            setIsEnabled(value), EventRegister.emit("changeTheme", value);
          }}
          trackColor={{ false: "#767577", true: "pink" }}
          thumbColor="#f4f3f4"
        />

        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="menu"
                color={isEnabled ? theme.color : "red"}
                onPress={openMenu}
                size={25}
              />
            }
          >
            <Menu.Item
              onPress={() => {
                navigation.navigate("Home");
                setVisible(false);
              }}
              titleStyle={{ color: "red" }}
              title="Home"
            />
            <Menu.Item
              onPress={() => {
                navigation.navigate("About");
                setVisible(false);
              }}
              title="About"
            />
            <Menu.Item
              onPress={() => {
                navigation.navigate("Contact");
                setVisible(false);
              }}
              title="Contact"
            />
            {/* <Menu.Item
              onPress={() => {
                navigation.navigate("Login");
                setVisible(false);
              }}
              title="Login"
            />
            <Menu.Item
              onPress={() => {
                navigation.navigate("Register");
                setVisible(false);
              }}
              title="Register"
            /> */}
          </Menu>
        ) : (
          ""
        )}
      </Appbar.Header>
      {/* <Search navigation={navigation} /> */}
      {/* <Text
        style={{ textAlign: "center", padding: 10, color: "red", fontSize: 17 }}
      >
        Welcome back Des
      </Text> */}
    </View>
  );
};

export default Header;
