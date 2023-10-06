import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon, { Icons } from './app/src/components/Icon';
import colors from './app/res/colors';
import ColorScreen from './app/src/components/ColorScreen';
import * as Animatable from 'react-native-animatable';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: ColorScreen,
    color: colors.primary,
    alphaClr: colors.primaryAlpha,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.Feather,
    icon: 'search',
    component: ColorScreen,
    color: colors.green,
    alphaClr: colors.greenAlpha,
  },
  {
    route: 'Add',
    label: 'Add New',
    type: Icons.Feather,
    icon: 'plus-square',
    component: ColorScreen,
    color: colors.red,
    alphaClr: colors.redAlpha,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: ColorScreen,
    color: colors.purple,
    alphaClr: colors.purpleAlpha,
  },
];

const Tab = createBottomTabNavigator();


const TabButton = ({ item, onPress, accessibilityState }: { item: typeof TabArr[0], onPress: () => void, accessibilityState: any }) => {
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
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 16 }]}
        />
        <View style={[styles.btn]}>
          <Icon type={item.type} name={item.icon} color={focused ? colors.white : colors.primary} style={{ fontSize: 24 }} />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text style={{
                color: colors.white,
                paddingHorizontal: 8
              }}>{item.label}</Text>
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
            position: 'absolute',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
