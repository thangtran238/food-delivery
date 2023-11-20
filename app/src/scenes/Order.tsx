//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Noti from "../components/Noti";
import OrderCom from "../components/OrderCom";
import VoucherItem from "../components/voucherItem";
import R from "../R";

// create a component
const OrderDetail: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
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
          <Text style={styles.font}>Order Details</Text>

          <ScrollView style={styles.scale}>
            <View style={styles.subWrapper}>
              <OrderCom
                category="order"
                type={"Deliver To"}
                image_url={require("../../res/image/detail1.png")}
                text={"4517 Washington Ave. Manchester, Kentucky 39495"}
                onPress={() => navigation.navigate("Shipping")}
              />
              <OrderCom
                category="order"
                type={"Payment Method"}
                image_url={require("../../res/image/detail2.png")}
                text={"2121 6352 8465 ****"}
                onPress={() => navigation.navigate("Payment")}
              />
            </View>
          </ScrollView>
          <View style={styles.total}>
            <View style={styles.container_total_text}>
              <View style={styles.left_total_text}>
                <Text style={styles.first_line}>Sub-Total</Text>
                <Text style={styles.whiteText}>Delivery Charge</Text>
                <Text style={styles.whiteText}>Discount</Text>
                <Text style={styles.total_highlight}>Total</Text>
              </View>
              <View style={styles.right_total_text}>
                <Text style={styles.first_line}>10$</Text>
                <Text style={styles.whiteText}>10$</Text>
                <Text style={styles.whiteText}>10$</Text>
                <Text style={styles.total_highlight}>10$</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Order Detail")}
            >
              <Button
                styleType="long_white"
                text={{ text: "Place My Order" }}
              ></Button>
            </TouchableOpacity>
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
    rowGap: 20,
  },
  total: {
    backgroundColor: R.colors.secondary,
    width: "auto",
    height: "auto",
    borderRadius: 22,
    justifyContent: "flex-end",
    marginBottom: 15,
    marginRight: 25,
    bottom: 12,
  },
  container_total_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  left_total_text: {
    width: "auto",
    height: "auto",
    borderRadius: 22,
    color: "white",
  },
  right_total_text: {
    width: "auto",
    height: "auto",
    borderRadius: 22,
    color: "white",
  },
  first_line: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  whiteText: {
    color: "white",
    marginBottom: 2,
    fontWeight: "bold",
  },
  total_highlight: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});

//make this component available to the app
export default OrderDetail;
