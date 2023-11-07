//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import R from "../R";

type Props = {
  message: string;
  image_url: string | ImageSourcePropType;
  time: string;
};

// create a component
const Noti = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrap}>
          <Image source={props.image_url} style={styles.image} />
        </View>
        <View style={styles.text}>
          <Text style={styles.font}>{props.message}</Text>
          <Text style={styles.time}>{props.time}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  imageWrap: {
    flex: 0.22,
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  image: {
    height: 50,
    width: 50,
    objectFit: "cover",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    rowGap: 4,
    marginVertical: 12,
  },
  wrapper: {
    borderRadius: 15, // Add this line
    width: R.dimensions.width - 50,
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    backgroundColor: R.colors.white,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  text: {
    flex: 0.7,
    rowGap: 6,
    alignItems: "flex-start",
  },
  font: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h3,
  },
  time: {
    fontSize: R.strings.h4,
    color: R.colors.subFontColor
  }
});
//make this component available to the app
export default Noti;
