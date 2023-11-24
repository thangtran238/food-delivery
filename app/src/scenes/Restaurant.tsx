//import liraries
import React, { useEffect, useState } from "react";

import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import SwipeUp from "../components/SwipeUp";
import { NavigationProp } from "@react-navigation/native";
import R from "../R";
import Icon from "react-native-vector-icons/Ionicons";
import Comment from "../components/Comment";
import Shop from "../components/Shop";
import ViewMore from "../components/ViewMore";
import { getData } from "../services/api";

type Props = {
  navigation: NavigationProp;
  id: number;
};

const Component = (props: Props) => {
  const [restaurant, setRestaurant] = useState<Restaurant>();
  const [menus, setMenu] = useState<Menu[]>([]);
  const [restaurantMenus, setRestaurantMenu] = useState<RestaurantMenu>();
  console.log(props.id);
  const filteredFoods = menus.filter((menu) =>
    restaurantMenus?.foods.some((food) => food === menu.id)
  );
  console.log(filteredFoods);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRestaurant = await getData(`restaurant/${props.id}`);
        const dataMenus = await getData(`menu`);
        const dataRestaurantMenus = await getData(
          `restaurant_menu/${props.id}`
        );
        setRestaurant(dataRestaurant);
        setMenu(dataMenus);
        setRestaurantMenu(dataRestaurantMenus);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.id]);
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
          <Text style={styles.title}>{restaurant?.title}</Text>
          <View style={styles.groupIcon}>
            <View style={styles.groupIcon}>
              <Icon
                name={"location-outline"}
                size={20}
                color={R.colors.secondary}
              />
              <Text> {restaurant?.distance} Km </Text>
            </View>
            <View style={styles.groupIcon}>
              <Icon name={"star"} size={20} color={R.colors.green} />
              <Text> 4,8 Rating </Text>
            </View>
          </View>
          <View>
            <Text>
              Most whole Alaskan Red King Crabs get broken down into legs,
              claws, and lump meat. We offer all of these options as well in our
              online shop, but there is nothing like getting the whole . . . .
            </Text>
          </View>
        </View>
        <View>
          <ViewMore
            text={{
              title: "Popular Menu",
              viewmore: "View More",
            }}
          />
          <ScrollView horizontal>
            <View style={styles.menuWrapper}>
              {filteredFoods.map((food, index) => (
                <Shop
                  key={index}
                  source={{
                    image_url: food && food.image_url ? require(`../../res/image/food1.png`) : null,
                  }}
                  text={{
                    title: `${food.food_name}`,
                    string: `${food.price}`,
                  }}
                />
              ))}
            </View>
          </ScrollView>
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
    </View>
  );
};

// create a component
const Restaurant: React.FC<{
  navigation: Navigator;
  route: { params: { id: number } };
}> = ({ navigation, route }) => {
  const id = route.params.id;
  const [restaurant, setRestaurant] = useState<Restaurant>();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRestaurant = await getData(`restaurant/${id}`);
        setRestaurant(dataRestaurant);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  const picture = restaurant?.picture
  console.log(restaurant);
  return (
    <View style={styles.container}>
      {restaurant ? (
        <>
          <ImageBackground
            source={require(`../../res/image/res1.png`) }
            style={styles.image}
          />
          <SwipeUp component={<Component navigation={navigation} id={id} />} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
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
  menuWrapper: {
    flexDirection: "row",
    gap: R.dimensions.width / 7.5,
    padding: 26,
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
export default Restaurant;
