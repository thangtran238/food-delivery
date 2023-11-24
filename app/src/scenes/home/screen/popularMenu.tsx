//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Heading from "../../../components/Heading";
import Item from "../../../components/Item";
import SearchBarWithR from "../../../components/SearchBarWithR";
import R from "../../../R";
import { getData } from "../../../services/api";
// create a component
const PopularMenu: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  const [menus, setMenu] = useState<Menu[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMenu = await getData("menu");
        setMenu(dataMenu);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../../res/image/bg.png")}
        style={styles.image}
      >
        <Heading navigation={navigation} />
        <SearchBarWithR navigation={navigation} />

        <Text style={styles.popularTitle}>Popular Menu</Text>
        <ScrollView>
          <View style={styles.popularContainer}>
            {menus.map((menu) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Food", { id: menu.id })}
              >
                <Item
                  key={menu.id}
                  styleType="primary"
                  source={{
                    image_url: require(`../../../../res/image/${menu.image_url}`),
                  }}
                  text={{
                    food_name: `${menu.food_name}`,
                    restaurant: `${menu.restaurant}`,
                    price: menu.price,
                  }}
                />
              </TouchableOpacity>
            ))}
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
