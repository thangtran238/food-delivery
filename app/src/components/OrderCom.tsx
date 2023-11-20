//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import R from "../R";

type Props = {
  category: "order" | "shipping" | "location";
  type: string;
  image_url: string | ImageSourcePropType;
  text: string | number;
  onPress?: () => void;
};
// create a component
const OrderCom: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.type}>{props.type}</Text>
          {props.category == "order" ? (
            <TouchableOpacity onPress={props.onPress}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.subWrapper}>
          <View style={styles.imageWrapper}>
            <Image source={props.image_url} style={styles.image} />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </View>
        {props.category == "location" ? (
          <TouchableOpacity onPress={props.onPress}>
            <Text style={styles.textLocation}>set location</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: R.dimensions.width - 55,
    height: "auto",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 16,
    rowGap: 12,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  subWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  edit: {
    fontSize: R.strings.h4,
    color: R.colors.secondary,
  },
  imageWrapper: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    objectFit: "cover",
  },
  textWrapper: { flex: 0.8 },
  text: {
    fontSize: R.strings.h3,
    fontWeight: R.fonts.bold,
    alignSelf: "flex-end",
  },
  type: { fontSize: R.strings.h4, color: R.colors.substance },
  textLocation: { paddingRight: 8, color: R.colors.secondary },
});

//make this component available to the app
export default OrderCom;
