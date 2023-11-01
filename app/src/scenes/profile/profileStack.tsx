//import liraries
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Profile from "./screen/Profile";
import Voucher from "./screen/voucher";
// create a component

const Stack = createStackNavigator();


const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Voucher"
        component={Voucher}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default ProfileStack;
