//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ImageBackground,
  Touchable,
  TouchableOpacity,
} from "react-native";
import R from "../R";

type Props = {
  image: string | ImageSourcePropType;
  type?: "normal" | "payment";
  text?: string;
};
// create a component
const AppOption = (props: Props) => {
  let imageSource = props.image || "";
  if (typeof imageSource === "string") {
    imageSource = { uri: imageSource };
  }

  let optionStyle = {};
  let imageStyle = {};
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
        columnGap: 30,
        fontWeight: R.fonts.normal,
      };
      imageStyle = {
        width: 30,
        height: 30,
      }
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
        fontWeight: R.fonts.bold,
      };
      imageStyle = {
        width: 85,
        height: 22,
        objectFit: "cover"
      }
  }
  return (
    <View style={styles.container}>
      <View style={[optionStyle, styles.wrapper]}>
        <ImageBackground source={imageSource} style={imageStyle} />
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
  },
  wrapper: {
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginVertical: 40,
  },

  font: {
    fontSize: 15,
    fontWeight: R.fonts.bold
  },
});

//make this component available to the app
export default AppOption;
