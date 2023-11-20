//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AppOption from "../components/AppOption";
import Button from "../components/Button";
import OrderCom from "../components/OrderCom";

import R from "../R";

// create a component
const Shipping: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../res/image/bg.png")}
        style={styles.image}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
          >
            <Button styleType="custom" text={{ text: "<" }} />
          </TouchableOpacity>
          <Text style={styles.font}>Payment</Text>

          <ScrollView style={styles.scale}>
            <View style={styles.subWrapper}>
              <OrderCom
                category="shipping"
                image_url={require("../../res/image/detail1.png")}
                type={"Order Location"}
                text={"8502 Preston Rd. Inglewood, Maine 98380"}
              />
              <OrderCom
                category="location"
                image_url={require("../../res/image/detail1.png")}
                type={"Order Location"}
                text={"8502 Preston Rd. Inglewood, Maine 98380"}
                onPress={() => navigation.navigate("Location")}
              />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scale: {
    height: R.dimensions.height,
    width: R.dimensions.width,
  },
  image: {
    width: "100%",
    height: R.dimensions.height,
  },
  button: {
    alignItems: "flex-start",
    marginTop: 24,
    marginStart: 24,
  },
  font: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h2,
    paddingHorizontal: 12,
    marginVertical: 20,
    marginStart: 14,
  },

  subWrapper: {
    flexDirection: "column",
  },
});

//make this component available to the app
export default Shipping;
