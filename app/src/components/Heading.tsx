import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

import R from "../R";
import SearchBarWithR from "./SearchBarWithR";





type Props = {
  navigation: string;
};

const Heading = (props: Props) => {
  const mainHeading = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Find Your Favorite Food</Text>
        <Icon style={styles.icon} name={"notifications-outline"} size={24} color={R.colors.secondary} />
        {/* <SearchBarWithR /> */}
      </View>
    );
  };

  const subHeading = () => {
    return (
      <View>
        <Icon name={"notifications-outline"} size={24} color={R.colors.secondary} />
      </View>
    );
  };

  const choseHeading = () => {
    return props.navigation === "Home" ? mainHeading() : subHeading();
  };

  return choseHeading()
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 36,
  },
  text: {
    width: "40%",
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h1,

  },
  icon: {
    backgroundColor: R.colors.primary,
    borderRadius: 8,
    padding: 8
  }
});
export default Heading;

