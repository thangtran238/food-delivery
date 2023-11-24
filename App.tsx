import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Screen, Access } from "./app/src/Routes";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./app/src/TabNavigator";
const Stack = createStackNavigator();

//quan
import firebase from "firebase/compat";
import { auth } from "./config/firebase";

const ScreenArr = Screen;
const AccessArr = Access;
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authenticatedUser) => {
      if (authenticatedUser) {
        // User is signed in
        setUser(authenticatedUser);
      } else {
        // No user is signed in
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [user]);
  console.log(user);

  return (
    <>
      {!user ? (
        <NavigationContainer>
          <Stack.Navigator>
            {AccessArr.map((screen, index) => (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.component}
                options={{ headerShown: screen.option }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="NavBar"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            {ScreenArr.map((screen, index) => (
              <Stack.Screen
                key={index}
                name={screen.name}
                component={screen.component}
                options={{ headerShown: screen.option }}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
  },
});
