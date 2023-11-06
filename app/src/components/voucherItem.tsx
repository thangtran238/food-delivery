import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import R from "../R";
import Button from "./Button";

type Props = {
  theme: string;
  image_url?: string | ImageSourcePropType;
  fontColor: string;
};

// create a component
const VoucherItem = (props: Props) => {
  const styles = StyleSheet.create({
    image: {
      width: 175,
      height: 122,
      objectFit: "cover",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      rowGap: 4,
      marginVertical: 12,
    },
    wrapper: {
      borderRadius: 15, // Add this line
      width: R.dimensions.width - 50,
      height: 122,
      flexDirection: "row",
      backgroundColor: `${props.theme}`,
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: 12,
      overflow: "hidden",
    },
    text: {
      rowGap: 20,
      alignItems: "flex-start",
    },
    font: {
      fontWeight: R.fonts.bold,
      fontSize: R.strings.h3,
      color: props.fontColor,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={props.image_url} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.font}>Special Deal For {"\n"}October</Text>
          <Button styleType="short" text={{ text: "Order now" }} />
        </View>
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default VoucherItem;
