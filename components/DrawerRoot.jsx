import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
const Drawer = createDrawerNavigator();

function DrawerRoot() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default DrawerRoot;
