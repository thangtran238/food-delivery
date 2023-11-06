//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Noti from "../components/Noti";
import VoucherItem from "../components/voucherItem";
import R from "../R";

// create a component
const Notification: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
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
          <View>
            <Text style={styles.font}>Notifications</Text>
            <View style={styles.subWrapper}>
              <Noti
                image_url={require("../../res/image/icon1.png")}
                message={"Your order has been taken by the driver"}
                time={"Recently"}
              />
              <Noti
                image_url={require("../../res/image/icon2.png")}
                message={"Topup for $100 was successful"}
                time={"10.00 Am"}
              />
              <Noti
                image_url={require("../../res/image/icon3.png")}
                message={"Your order has been canceled"}
                time={"22 July 2021"}
              />
            </View>
          </View>
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
  image: {
    width: "100%",
    height: R.dimensions.height,
  },
  wrapper: {
    padding: 20,
  },
  button: {
    alignItems: "flex-start",
  },
  font: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h2,
    paddingHorizontal: 12,
    marginVertical: 20,
  },

  subWrapper: {
    paddingVertical: "auto",
  },
});

//make this component available to the app
export default Notification;
