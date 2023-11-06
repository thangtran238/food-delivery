//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import R from "../R";
import Button from "./Button";

type Props = {
  type?: "Buy Again" | "Process";
  image: string;
  title: string;
  restaurant: string;
  price: number;
};
// create a component
const AppItem = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image source={{ uri: props.image }} style={styles.image} />
        <View>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.restaurant}>{props.restaurant}</Text>
          <Text style={styles.price}>$ {props.price}</Text>
        </View>
        <Button
          styleType="custom"
          text={{ text: props.type }}
          style={{
            backgroundColor: R.colors.secondary,
            borderRadius: 17,
            width: 85,
            height: 30,
            padding: 8,
            fontsize: 12,
            color: "white",
          }}
        />
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
  wrap: {
    width: 347,
    height: 103,
    padding: 22,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 18,
    backgroundColor: R.colors.primaryDark,
    borderRadius: 22,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    marginVertical: 25,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 16,
  },
  title: { fontSize: 15, fontWeight: R.fonts.bold },
  restaurant: { fontSize: 14, color: R.colors.subFontColor, marginVertical: 6 },
  price: { fontSize: 19, fontWeight: R.fonts.bold, color: R.colors.secondary },
});

//make this component available to the app
export default AppItem;
