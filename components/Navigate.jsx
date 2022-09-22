import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
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
const Navigate = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
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
          options={{ headerTintColor: "red" }}
        />
        <Stack.Screen
          name="Contact"
          options={{ headerTintColor: "red" }}
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
          options={{ headerTintColor: "red", title: "Trending" }}
          component={Posts}
        />
        <Stack.Screen
          name="ShowDetail"
          // options={{ title: null }}
          options={{ headerTintColor: "red", title: "News Detail" }}
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
    </NavigationContainer>
  );
};

export default Navigate;
