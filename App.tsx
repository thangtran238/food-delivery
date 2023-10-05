import React from 'react';
import { Routes } from './app/src/Routes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from './app/res/colors';
const Tab = createBottomTabNavigator();

const SCENES = Routes.map((route) => (
  <Tab.Screen
    key={route.name}
    name={route.name}
    component={route.component as React.ComponentType<any>} // Add type assertion
  />
));

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"  screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Setting') {
                  iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                return <Icon name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#FF6969',
              tabBarInactiveTintColor: 'gray',
            })}>
        {SCENES}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
