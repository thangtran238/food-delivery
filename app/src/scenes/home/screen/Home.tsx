import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import Heading from "../../../components/Heading";
import { GET_NAV } from "../../../util/constant";
import SearchBarWithR from "../../../components/SearchBarWithR";
import Banner from "../../../components/Banner";
import Shop from "../../../components/Shop";
import ViewMore from "../../../components/ViewMore";
import R from "../../../R";
import Item from "../../../components/Item";
import { getData } from "../../../services/api";

const Home: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  const [menus, setMenu] = useState<Menu[]>([]);
  const [restaurants, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataMenu = await getData("menu");
        const dataRestaurant = await getData("restaurant");

        setMenu(dataMenu);
        setRestaurant(dataRestaurant);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.imageBackground}>
      <ImageBackground source={require("../../../../res/image/bg.png")}>
        <Heading navigation={navigation} />

        <ScrollView>
          <SearchBarWithR navigation={navigation} />
          <Banner />
          <TouchableOpacity
            onPress={() => navigation.navigate("PopularRestaurant")}
          >
            <ViewMore
              text={{
                title: "Popular Menu",
                viewmore: "View More",
              }}
            />
          </TouchableOpacity>

          <ScrollView horizontal>
            <View style={styles.shop_container}>
              {restaurants.map((restaurant) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Restaurant',{id: restaurant.id})}
                >
                  <Shop
                    source={{
                      image_url: require(`../../../../res/image/${restaurant.image}`),
                    }}
                    text={{
                      title: restaurant.title,
                      string: restaurant.distance,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity onPress={() => navigation.navigate("PopularMenu")}>
            <ViewMore
              text={{
                title: "Popular Menu",
                viewmore: "View More",
              }}
            />
          </TouchableOpacity>
          {menus.map((menu) => (
            <TouchableOpacity onPress={() => navigation.navigate("Food",{id :menu.id})}>
            <Item
              styleType="primary"
              source={{ image_url: require(`../../../../res/image/${menu.image_url}`) }}
              text={{
                food_name: menu.food_name,
                restaurant: menu.restaurant,
                price: menu.price,
              }}
              />
          
          </TouchableOpacity>
          ))}
            
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    marginBottom: 270,
  },
  image: { flex: 1 },
  shop_container: {
    flexDirection: "row",
    gap: R.dimensions.width / 7.5,
    padding: 26,
  },
});

export default Home;
