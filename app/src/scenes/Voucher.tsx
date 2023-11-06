//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import VoucherItem from "../components/voucherItem";
import R from "../R";

// create a component
const Voucher: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../res/image/bg.png")}
        style={styles.image}
      >
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Button styleType="custom" text={{ text: "<" }} />
          </TouchableOpacity>
          <View>
            <Text style={styles.font}>Voucher Promo</Text>
            <View style={styles.subWrapper}>
              <VoucherItem
                image_url={require("../../res/image/Image.png")}
                theme={R.colors.secondary}
                fontColor={R.colors.white}
              />
              <VoucherItem
                image_url={require("../../res/image/Image2.png")}
                theme={"#E9F7BA"}
                fontColor={"#6B3A5B"}
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
    alignItems: "flex-start"
  },
  font: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h2,
    paddingHorizontal: 12,
    marginVertical: 20
  },

  subWrapper: {
    paddingVertical: "auto"
  }
});

//make this component available to the app
export default Voucher;
