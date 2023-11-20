//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
} from "react-native";
import Heading from "../../../components/Heading";
import Item from "../../../components/Item";
import R from "../../../R";
// create a component
const PopularMenu: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../res/image/bg.png")}
        style={styles.image}
      >
        <Heading navigation={navigation} />

        <Text style={styles.popularTitle}>Popular Menu</Text>
        <ScrollView>
          <View style={styles.popularContainer}>
            <Item
              styleType="primary"
              source={{ image_url: require("../../../../res/image/food1.png") }}
              text={{
                food_name: "Herbal Pancake",
                restaurant: "Wijie Resto",
                price: 7,
              }}
            />
            <Item
              styleType="primary"
              source={{ image_url: require("../../../../res/image/food1.png") }}
              text={{
                food_name: "Herbal Pancake",
                restaurant: "Wijie Resto",
                price: 7,
              }}
            />
            <Item
              styleType="primary"
              source={{ image_url: require("../../../../res/image/food1.png") }}
              text={{
                food_name: "Herbal Pancake",
                restaurant: "Wijie Resto",
                price: 7,
              }}
            />
            <Item
              styleType="primary"
              source={{ image_url: require("../../../../res/image/food1.png") }}
              text={{
                food_name: "Herbal Pancake",
                restaurant: "Wijie Resto",
                price: 7,
              }}
            />
          </View>
        </ScrollView>
        <StatusBar style="auto" />
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
    flex: 1,
    height: R.dimensions.height,
  },
  popularContainer: {
    marginTop: 30,
    marginHorizontal: 12,
  },
  popularTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 40,
    marginTop: 10,
  },
  foodItem: {
    backgroundColor: "#F8F8FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  foodImage: {
    width: 70,
    height: 70,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: 10,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  foodtitle: {
    fontSize: 17,
    color: "#DCDCDC",
  },
  foodPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "blue",
    marginRight: 20,
  },
});

//make this component available to the app
export default PopularMenu;
