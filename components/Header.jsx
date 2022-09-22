import React, { useState, useEffect } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import {
  Avatar,
  Searchbar,
  Appbar,
  Menu,
  Button,
  Provider,
} from "react-native-paper";
const Header = ({ back, navigation }) => {
  const [text, setText] = useState("");
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const textChange = (text) => {
    setText(text);
  };
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title="Excellent" titleStyle={{ color: "red" }} />
        <Appbar.Action
          icon="magnify"
          size={25}
          iconColor="red"
          onPress={() => {
            navigation.navigate("Search");
          }}
        />
        {!back ? (
          <Menu
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <Appbar.Action
                icon="menu"
                color="red"
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
