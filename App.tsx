import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from './app/src/Routes';

const Stack = createNativeStackNavigator();

const SCENES = Routes.map((route) => (
  <Stack.Screen name={route.name} component={route.component} />
));

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {SCENES}
      </Stack.Navigator>
    </NavigationContainer>
  );
}