import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import R from "../R";
import Item_cart from "../components/Item_cart";
import React from "react";


type Props = {};

const Cart: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button styleType="custom" text={{ text: "<" }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Order details</Text>

      <ScrollView>
        <Item_cart
          styleType="secondary"
          source={{ image_url: require("../../res/image/food1.png") }}
          text={{
            food_name: "Herbal Pancake",
            restaurant: "Wijie Resto",
            price: 7,
          }}
        />
      </ScrollView>

      {/* </View> */}

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
        <TouchableOpacity onPress={() => navigation.navigate("Order Detail")}>
          <Button
            styleType="long_white"
            text={{ text: "Place My Order" }}
          ></Button>
        </TouchableOpacity>

        <View style={styles.space}></View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text: {
    width: "50%",
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h1,
  },
  container: {
    flex: 1,
    marginLeft: 23,
    marginTop: 38,
  },
  back: {
    marginRight: "auto",
  },

  total: {
    backgroundColor: R.colors.secondary,
    width: "auto",
    height: "auto",
    borderRadius: 22,
    justifyContent: "flex-end",
    marginBottom: 15,
    marginRight: 25,
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
  space: {
    height: 15,
  },
});
