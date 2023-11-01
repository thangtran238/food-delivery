//import liraries
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screen/Home";
import PopularMenu from "./screen/popularMenu";
import PopularRestaurant from "./screen/popularRestaurant";
import Filter from "./screen/filter";


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PopularMenu"
        component={PopularMenu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PopularRestaurant"
        component={PopularRestaurant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

// define your styles

//make this component available to the app
export default HomeStack;
