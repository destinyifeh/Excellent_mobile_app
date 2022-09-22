import React, { useState, useEffect } from "react";

//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../screens/About";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Ionicons from "react-native-vector-icons/Ionicons";
import Disclaimer from "../screens/Disclaimer";

const Nav = () => {
  const Tab = createBottomTabNavigator();
  return (
    // <Tab.Navigator
    //   initialRouteName="Home"
    //   tabBarPosition="bottom"
    //   screenOptions={{
    //     tabBarActiveTintColor: "#e91e63",
    //     tabBarInactiveTintColor: "black",
    //     tabBarLabelStyle: { fontSize: 12 },
    //     tabBarStyle: { backgroundColor: "white" },
    //   }}
    // >
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "About") {
            iconName = focused ? "person" : "person";
          } else if (route.name === "Contact") {
            iconName = focused ? "mail" : "mail";
          } else if (route.name === "Disclaimer") {
            iconName = focused
              ? "ios-information-circle-outline"
              : "ios-information-circle-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="About" component={About} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Disclaimer" component={Disclaimer} />
    </Tab.Navigator>
  );
};

export default Nav;
