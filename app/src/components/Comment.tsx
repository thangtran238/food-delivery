//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import R from "../R";

type Props = {
  name: string;
  image_url: string | ImageSourcePropType;
  time: string;
  comment: string;
  rate: number;
};
// create a component
const Comment = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={props.image_url} style={styles.image} />
      </View>
      <View style={styles.commentWrapper}>
        <View style={styles.titleWrapper}>
          <View>
            <Text style={styles.fontName}>{props.name}</Text>
            <Text style={styles.time}>{props.time}</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Icon name={"star"} color={R.colors.secondary} size={20} />
            <Text style={styles.rate}>{props.rate}</Text>
          </View>
        </View>
        <View>
          <Text>{props.comment}</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: R.dimensions.width - 50,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    columnGap: 12
  },
  imageWrapper: {
    justifyContent: "flex-start",
    flex: 0.2,
    height: "100%",
  },
  image: {
    width: 65,
    height: 65,
    objectFit: "cover",
    borderRadius: 12,
  },
  commentWrapper: {
    flex: 0.7,
    rowGap: 14
  },
  iconWrapper: {
    alignItems: "center",
    flexDirection: "row",
    columnGap: 8,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: R.colors.purple
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  fontName: {
    fontSize: R.strings.h3,
    fontWeight: R.fonts.bold,
  },
  time: {
    fontSize: R.strings.h4,
    fontWeight: R.fonts.thin,
    color: R.colors.substance,
    marginTop: 6
  },
  rate: {
    fontWeight: R.fonts.bold,
    color: R.colors.secondary
  }
});

//make this component available to the app
export default Comment;
