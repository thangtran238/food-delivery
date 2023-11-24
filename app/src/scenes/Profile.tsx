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
import R from "../R";
import FontAwesome5IconButton from "react-native-vector-icons/FontAwesome5";
import Button from "../components/Button";
import AppOption from "../components/AppOption";
import AppItem from "../components/AppItem";
import { NavigationProp } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Props = {
  navigation: NavigationProp;
};

const Component: React.FC<Props> = ({ navigation }) => {
  const onSignOut = async () => {
    try {
      await signOut(auth);
      // Remove user data from AsyncStorage
      await AsyncStorage.removeItem("user");
      navigation.navigate("Log In");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };
  return (
    <ScrollView>
      <Button
        styleType="custom"
        style={{
          borderRadius: 12,
          padding: 12,
          width: 111,
          color: R.colors.secondary,
          backgroundColor: R.colors.lightOverlayColor,
          fontsize: 12,
        }}
        text={{ text: "Gold Member" }}
      />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>Arash Ranjibaran</Text>
          <Text style={styles.email}>awdesign.ar@gmail.com</Text>
        </View>
        <View style={styles.iconGroup}>
          <FontAwesome5IconButton
            name="edit"
            size={21}
            color={R.colors.secondary}
          />
          <TouchableOpacity onPress={() => onSignOut()}>
            <FontAwesome5IconButton
              name="dragon"
              size={21}
              color={R.colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Voucher")}>
      <AppOption
        image={require("../../res/image/voucher.png")}
        type="normal"
        text="You Have 3 Vouchers"
      />
      </TouchableOpacity>
      <View style={styles.favorite}>
        <Text style={styles.font}>Favorite</Text>
        <View>
          <AppItem
            type="Buy Again"
            image_url={require("../../res/image/food1.png")}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"
            image_url={require("../../res/image/food2.png")}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"
            image_url={require("../../res/image/food3.png")}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"
            image_url={"../../res/image/voucher.png"}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
        </View>
      </View>
    </ScrollView>
  );
};

// create a component
const Profile: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../res/image/profile.png")}
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
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  name: { fontSize: 27, fontWeight: R.fonts.bold },
  email: { fontSize: 14, color: R.colors.substance },
  font: { fontSize: 15, fontWeight: R.fonts.bold },
  favorite: { paddingHorizontal: 12 },
  iconGroup: {
    flexDirection: "row",
    columnGap: 12,
    alignItems: "center",
  },
});

// make this component available to the app
export default Profile;
