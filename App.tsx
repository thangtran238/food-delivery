import React from "react";
import { Routes } from "./app/src/Routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { iconDeclaration, focusedIcon } from "./app/src/util/AdjustIcon";
import { colors } from "./app/res/colors";
import HomeIcon from "./app/src/components/HomeIcon";



const Tab = createBottomTabNavigator();

export default function App() {



  const SCENES = Routes.map((route) => (
    <Tab.Screen
      key={route.name}
      name={route.name}
      component={route.component}
    />
  ));
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            const iconName = focusedIcon(route.name) || "";
            return <HomeIcon name={iconName} color={color} focused={focused} />;
          },
          tabBarActiveTintColor: `${colors.secondary}`,
          tabBarInactiveTintColor: `${colors.substance}`,
          tabBarShowLabel: false,
          headerShown: false
        })}
      >
        {SCENES}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
