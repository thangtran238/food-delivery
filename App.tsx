import { onAuthStateChanged } from "firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Screen } from "./app/src/Routes";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./app/src/TabNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createStackNavigator();

//quan
import firebase from "firebase/compat";
import { auth } from "./config/firebase";
import Login from "./app/src/scenes/Login";
import Signup from "./app/src/scenes/Signup";

const ScreenArr = Screen;
// const AccessArr = Access;
export default function App() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        return jsonValue != null ? setUser(JSON.parse(jsonValue)) : null;
      } catch (e) {
        // error reading value
      }
    };

    getData();
  }, [user]);
  console.log(user);

  return (
    <>
      {!user ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={"Log In"}
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={"Sign Up"}
              component={Signup}
              options={{ headerShown: false }}
            />
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
            {ScreenArr.map((screen) => (
              <Stack.Screen
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
