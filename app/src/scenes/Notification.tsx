//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
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
            <Button styleType="custom" text={{ text: "<" }}/>
          </TouchableOpacity>
          <Text style={styles.font}>Notifications</Text>

          <ScrollView style={styles.scale}>
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
    marginStart: 14
  },

  subWrapper: {
    flexDirection: "column"
  },
});

//make this component available to the app
export default Notification;
