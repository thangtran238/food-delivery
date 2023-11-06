//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import Heading from "../../../components/Heading";
import SearchBarWithR from "../../../components/SearchBarWithR";
import Shop from "../../../components/Shop";
// create a component
const PopularRestaurant: React.FC<{ navigation: Navigator }> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../res/image/bg.png")}
        style={styles.image}
      >
        <Heading navigation="Home" />
        <SearchBarWithR navigation={navigation} />
        <Text style={styles.popularTitle}>Popular Restaurant</Text>

        <ScrollView contentContainerStyle={styles.restaurantContainer}>
          <Shop text={{ title: "Vegan Resto", time: "8" }} />
          <Shop text={{ title: "Vegan Resto", time: "8" }} />
          <Shop text={{ title: "Vegan Resto", time: "8" }} />
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
    resizeMode: "cover",
    justifyContent: "center",
  },
  restaurantContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    gap: 25,
    marginTop: 10,
    flexWrap: "wrap",
  },
  restaurantBox: {
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    width: "45%",
    marginBottom: 20,
    marginHorizontal: 1,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  popularTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 20,
    marginTop: 5,
  },
});

//make this component available to the app
export default PopularRestaurant;
