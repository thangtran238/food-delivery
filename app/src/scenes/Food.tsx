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
import Comment from "../components/Comment";

type Props = {
  navigation: NavigationProp;
};

const Component = (props: Props) => {
  return (
    <View style={styles.container}>
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
          <View style={styles.groupIcon}>
            <View style={styles.groupIcon}>
              <Icon
                name={"location-outline"}
                size={20}
                color={R.colors.secondary}
              />
              <Text> 19 Km </Text>
            </View>
            <View style={styles.groupIcon}>
              <Icon name={"star"} size={20} color={R.colors.green} />
              <Text> 4,8 Rating </Text>
            </View>
          </View>
          <View>
            <Text>
              Nulla occaecat velit laborum exercitation ullamco. Elit labore eu
              aute elit nostrud culpa velit excepteur deserunt sunt. Velit non
              est cillum consequat cupidatat ex Lorem laboris labore aliqua ad
              duis eu laborum. Strowberry Cream wheat Nulla occaecat velit
              laborum exercitation ullamco. Elit labore eu aute elit nostrud
              culpa velit excepteur deserunt sunt. {"\n"}- Strawberries{"\n"}-
              Cream{"\n"}- Wheat{"\n"}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
              explicabo culpa repellat, velit corrupti eos nulla consequuntur
              dicta, iusto qui quasi. Corrupti, non ratione provident cupiditate
              commodi assumenda fugiat iusto.
            </Text>
          </View>
        </View>
        <View style={styles.commentSession}>
          <Text style={styles.commentFont}>Testimonials</Text>
          <View style={styles.commentWrapper}>
            <Comment
              image_url={require("../../res/image/comment1.png")}
              name="Dianne Russell"
              time="12 April 2021"
              rate={5}
              comment="This is great. So delicious! You must here with your family"
            />
            <Comment
              image_url={require("../../res/image/comment1.png")}
              name="Dianne Russell"
              time="12 April 2021"
              rate={5}
              comment="This is great. So delicious! You must here with your family"
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.searchButtonContainer}>
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    position: "relative",
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
    paddingVertical: 24,
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
  groupIcon: {
    flexDirection: "row",
    marginVertical: 6,
  },
  commentFont: {
    fontSize: R.strings.h2,
    fontWeight: R.fonts.bold,
    marginBottom: 24,
  },
  commentSession: {
    paddingHorizontal: 34,
    marginVertical: 24,
  },
  searchButtonContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 40,
    right: 40,
    bottom: 80,
  },
  searchButton: {
    backgroundColor: R.colors.secondary,
    borderRadius: 20,
    paddingHorizontal: 120,
    paddingVertical: 17,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    height: 20,
  },
  commentWrapper: {
    rowGap: 40,
  },
});

//make this component available to the app
export default Food;
