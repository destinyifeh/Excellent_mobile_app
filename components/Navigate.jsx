import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState, useContext } from "react";
//import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Login from "../screens/Login";
import Posts from "../screens/Posts";
import Register from "../screens/Register";
import Search from "../screens/SearchBar";
import SearchDetail from "../screens/SearchDetail";
import ShowDetail from "../screens/ShowDetail";
import Header from "./Header";
import Nav from "./Nav";
import themeContext from "../config/themeContext";
import { EventRegister } from "react-native-event-listeners";

const Navigate = () => {
  const { colors } = useTheme();
  const theme = useContext(themeContext);
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
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Nav"
      // screenOptions={{
      //   header: (props) => <Header {...props} />,
      // }}
    >
      <Stack.Screen
        name="Nav"
        component={Nav}
        options={{ header: (props) => <Header {...props} /> }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTintColor: isEnabled ? colors.text : "red",
          headerStyle: {
            backgroundColor: isEnabled ? theme.background : theme.background,
          },
        }}
      />
      <Stack.Screen
        name="Contact"
        options={{ headerTintColor: isEnabled ? colors.text : "red" }}
        component={Contact}
      />
      <Stack.Screen
        name="Login"
        // options={{ title: null }}
        options={{ headerTintColor: "red" }}
        component={Login}
      />
      <Stack.Screen
        name="Register"
        // options={{ title: null }}
        options={{ headerTintColor: "red" }}
        component={Register}
      />
      <Stack.Screen
        name="Posts"
        // options={{ title: null }}
        options={{
          headerTintColor: isEnabled ? theme.color : "red",
          title: "Trending",
          headerStyle: {
            backgroundColor: isEnabled ? theme.background : theme.background,
          },
        }}
        component={Posts}
      />
      <Stack.Screen
        name="ShowDetail"
        // options={{ title: null }}
        options={{
          headerTintColor: isEnabled ? theme.color : "red",
          title: "News Detail",
          headerStyle: {
            backgroundColor: isEnabled ? theme.background : theme.background,
          },
        }}
        component={ShowDetail}
      />
      <Stack.Screen
        name="Search"
        // options={{ title: null }}
        options={{ headerTintColor: "red", title: "Search" }}
        component={Search}
      />
      <Stack.Screen
        name="SearchDetail"
        // options={{ title: null }}
        options={{ headerTintColor: "red", title: "Search detail" }}
        component={SearchDetail}
      />
    </Stack.Navigator>
  );
};

export default Navigate;
