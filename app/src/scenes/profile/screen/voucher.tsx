//import liraries
import React, { Component } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/Button";
import R from "../../../R";

// create a component
const Voucher: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../res/image/bg.png")}
        style={styles.image}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button styleType="custom" text={{ text: "<" }} />
        </TouchableOpacity>
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
});

//make this component available to the app
export default Voucher;
