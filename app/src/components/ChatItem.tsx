//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import R from "../R";
type Props = {
  image_url: string | ImageSourcePropType;
  name: string;
  time: string;
};
// create a component
const ChatItem = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.louis_Kelly}>
        <Image style={styles.Kelly} source={props.image_url} />
        <View style={styles.infor}>
          <Text style={styles.KellyText}>{props.name}</Text>
          <Text style={styles.yourOrder}>Your Order Just Arrived!</Text>
        </View>

        <Text style={styles.time}>{props.time}</Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  louis_Kelly: {
    flexDirection: "row",
    backgroundColor: "#f5f6fa",
    width: R.dimensions.width - 50,
    height: "auto",
    borderRadius: 20,
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  Kelly: {
    width: 62,
    height: 62,
    borderRadius: 15,
  },
  KellyText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  yourOrder: { fontSize: 14, color: R.colors.substance },
  time: {
    fontSize: 14,
    color: R.colors.substance,
  },
  infor: {
    justifyContent: "space-evenly",
    alignItem: "center"
  }
});

//make this component available to the app
export default ChatItem;
