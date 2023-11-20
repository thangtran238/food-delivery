//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import AppOption from "../components/AppOption";
import Button from "../components/Button";

import R from "../R";

// create a component
const Payment: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
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
              <AppOption
                type="payment"
                image={require("../../res/image/paypal.png")}
                text={"2121 6352 8465 ****"}
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
export default Payment;
