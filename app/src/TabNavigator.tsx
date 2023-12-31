import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../app/res/colors";
import { Nav, Screen } from "./Routes";
import * as Animatable from "react-native-animatable";
import IconCom, { Icons } from "../../app/src/components/Icon";
import { GET_NAV } from "../../app/src/util/constant";

const Tab = createBottomTabNavigator();
const TabArr = Nav;

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
      
    >
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            headerShown: false,
            tabBarStyle: {
              display: item.display,
              height: 80,
              position: "absolute",
              bottom: 5,
              right: 10,
              left: 10,
              borderRadius: 26,
            },
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarButton: (props) => <TabButton {...props} item={item} />,
          }}

        />
      ))}
    </Tab.Navigator>
  );
};
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
export default TabNavigator;
