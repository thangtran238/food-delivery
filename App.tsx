import {onAuthStateChanged} from 'firebase/auth';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useEffect, useRef, createContext, useState, useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import colors from "./app/res/colors";
import {Routes} from "./app/src/Routes";
import * as Animatable from "react-native-animatable";
import IconCom, {Icons} from "./app/src/components/Icon";
import Chat from "./app/src/scenes/Chat";
import Login from "./app/src/scenes/Login";
import Signup from "./app/src/scenes/Signup";

//quan
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import firebase from "firebase/compat";
import {auth} from './config/firebase';


const TabArr = Routes;

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
            style={[styles.container, {flex: focused ? 1 : 0.65}]}
        >
            <View>
                <Animatable.View
                    ref={viewRef}
                    style={[
                        StyleSheet.absoluteFillObject,
                        {backgroundColor: item.color, borderRadius: 20},
                    ]}
                />
                <View style={[styles.btn]}>
                    <IconCom
                        type={item.iconType}
                        name={item.icon}
                        color={focused ? colors.primary : colors.secondary}
                        style={{fontSize: 24}}
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


//


export default function App() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        // onAuthStateChanged returns an unsubscriber
         onAuthStateChanged(
            auth,
            async authenticatedUser => {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
            }
        );
        console.log(user)
    }, [user]);


    return (
        <>
            {
                user ? <NavigationContainer>
                        <Tab.Navigator
                            screenOptions={{
                                headerShown: false,
                                tabBarStyle: {
                                    height: 80,
                                    position: "absolute",
                                    bottom: 16,
                                    right: 16,
                                    left: 16,
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
                                        tabBarButton: (props) => <TabButton {...props} item={item}/>,
                                    }}
                                />
                            ))}
                        </Tab.Navigator>
                    </NavigationContainer>
                    :
                    <>
                        <Login/>
                    </>
            }
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
