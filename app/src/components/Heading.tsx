import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBarWithR from "./SearchBarWithR";
import R from "../R";





type Props = {
  navigation: string;
};

const Heading = (props: Props) => {
  const mainHeading = () => {
    return (
      <View >
        <View style={styles.container}>
          <Text style={styles.text}>Find Your {"\n"}Favorite Food</Text>
          <Icon style={styles.icon} name={"notifications-outline"} size={22} color={R.colors.secondary} />

        </View>
      </View>
    );
  };

  const subHeading = () => {
    return (
      <View>
        <Icon name={"notifications-outline"} size={45} color={R.colors.secondary} />
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
    paddingHorizontal: 31,
    paddingTop: 60,
    paddingBottom: 18,
  },
  text: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h1,

  },
  icon: {
    backgroundColor: R.colors.primary,
    borderRadius: 8,
    padding: 11,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  }
});
export default Heading;

