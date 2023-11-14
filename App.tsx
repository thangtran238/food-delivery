import {onAuthStateChanged} from 'firebase/auth';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "./app/res/colors";
import { Nav, Screen } from "./app/src/Routes";
import * as Animatable from "react-native-animatable";
import IconCom, { Icons } from "./app/src/components/Icon";
import { createStackNavigator } from "@react-navigation/stack";
import { GET_NAV } from "./app/src/util/constant";
const Stack = createStackNavigator();

//quan
import firebase from "firebase/compat";
import {auth} from './config/firebase';



const TabArr = Nav;
const ScreenArr = Screen;
const Tab = createBottomTabNavigator();
const TabButton = ({
    item,
    onPress,
    accessibilityState,
}: {
    item: (typeof TabArr)[0];
    onPress: () => void;
    accessibilityState: any;
}) => {
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const textViewRef = useRef(null);

    useEffect(() => {
        if (focused) {
            viewRef.current?.bounceIn(300);
            textViewRef.current?.bounceIn(300);
        } else {
            viewRef.current?.bounceOut(300);
            textViewRef.current?.bounceOut(300);
        }
    }, [focused]);

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, { flex: focused ? 1 : 0.65 }]}
        >
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[
                        StyleSheet.absoluteFillObject,
                        { backgroundColor: item.color, borderRadius: 20 },
                    ]}
                />
                <View style={[styles.btn]}>
                    <IconCom
                        type={item.iconType}
                        name={item.icon}
                        color={focused ? colors.primary : colors.secondary}
                        style={{ fontSize: 24 }}
                    />
                    <Animatable.View ref={textViewRef}>
                        {focused && (
                            <Text
                                style={{
                                    color: colors.white,
                                    paddingHorizontal: 8,
                                }}
                            >
                                {item.label}
                            </Text>
                        )}
                    </Animatable.View>
                </View>
            </View>
        </TouchableOpacity>
    );
};
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 80,
                    position: "absolute",
                    bottom: 5,
                    right: 10,
                    left: 10,
                    borderRadius: 26,
                },
            }}
        >
            {TabArr.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                    options={{
                        tabBarShowLabel: false,
                        tabBarHideOnKeyboard: true,
                        tabBarButton: (props) => <TabButton {...props} item={item} />,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

export default function App() {
    
    const [user, setUser] = useState(null);
    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
        const unsubscribe = onAuthStateChanged(
            auth,
            async (authenticatedUser) => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
            }
        );
        console.log(user);
        return () => unsubscribe();
    }, [user]);
    

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Tab"
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