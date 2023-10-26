//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import R from "../R";

type Props = {
  image: string;
  type?: "normal" | "payment";
  text?: string;
};
// create a component
const AppOption = (props: Props) => {
  let optionStyle = {};
  switch (props.type) {
    case "normal":
      optionStyle = {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderRadius: 22,
        width: 347,
        height: 64,
        backgroundColor: R.colors.primaryDark,
        columnGap: 24,
        fontWeight: R.fonts.normal
      };
      break;
    case "payment":
      optionStyle = {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 18,
        borderRadius: 22,
        width: 347,
        height: 64,
        backgroundColor: R.colors.primaryDark,
        columnGap: 24,
        fontWeight: R.fonts.bold

      };
  }
  return (
    <View style={styles.container}>
      <View style={optionStyle}>
        <Image source={{uri : props.image}} style={styles.image} />
        <Text style={styles.font}>{props.text}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    shadowColor: "#a8bed2",
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginVertical: 40,
  },
  image: {
    width: 45,
    height: 45,
  },
  font: {
    fontSize: 15
  },
});

//make this component available to the app
export default AppOption;
