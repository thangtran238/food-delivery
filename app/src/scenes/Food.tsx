//import liraries
import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import SwipeUp from "../components/SwipeUp";
import { NavigationProp } from "@react-navigation/native";
import R from "../R";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
  navigation: NavigationProp;
};

const Component = (props: Props) => {
  return (
    <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.status}>
            <Text style={styles.statusFont}>Popular</Text>
          </View>
          <View style={styles.iconWrapper}>
            <Icon
              style={styles.icon}
              name={"location"}
              size={20}
              color={R.colors.secondary}
            />
            <Icon
              style={styles.icon}
              name={"heart"}
              size={20}
              color={R.colors.red}
            />
          </View>
        </View>
        <View style={styles.desc}>
          <Text style={styles.title}>Rainbow Sandwich Sugarless</Text>
        </View>
        <View style={styles.commentSession}></View>
    </ScrollView>
  );
};

// create a component
const Food: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../res/image/item1.png")}
        style={styles.image}
      />
      <SwipeUp component={<Component navigation={navigation} />} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: R.dimensions.width,
    height: R.dimensions.height,
  },
  image: {
    width: R.dimensions.width,
    height: R.dimensions.height / 2.2,
    objectFit: "cover",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 24
  },
  iconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    columnGap: 10,
    alignItems: "center",
  },
  icon: {
    padding: 8,
    borderRadius: 30,
    backgroundColor: R.colors.primaryLite,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  status: {
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: R.colors.primaryLite,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  statusFont: {
    fontSize: R.strings.h5,
    color: R.colors.secondary,
    fontWeight: R.fonts.bold,
  },
  desc: {
    paddingHorizontal: 34,
  },
  title: {
    width: R.dimensions.width - 80,
    fontSize: R.strings.h1,
    fontWeight: R.fonts.bold,
  },
  commentSession: {},
});

//make this component available to the app
export default Food;
