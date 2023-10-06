import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "./app/res/colors";
import { Routes } from "./app/src/Routes";
import * as Animatable from "react-native-animatable";
import IconCom, { Icons } from "./app/src/components/Icon";

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
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}
    >
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: item.color, borderRadius: 16 },
          ]}
        />
        <View style={[styles.btn]}>
          <IconCom
            type={item.iconType}
            name={item.icon}
            color={focused ? colors.white : colors.primary}
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

export default function AnimTab3() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 60,
            position: "absolute",
            bottom: 16,
            right: 16,
            left: 16,
            borderRadius: 16,
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
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        ))}
      </Tab.Navigator>
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
    padding: 8,
    borderRadius: 16,
  },
});
