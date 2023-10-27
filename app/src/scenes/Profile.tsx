import React from "react";
import { View, ScrollView, Text, StyleSheet, ImageBackground } from "react-native";
import SwipeUp from "../components/SwipeUp";
import R from "../R";
import FontAwesome5IconButton from "react-native-vector-icons/FontAwesome5";
import Button from "../components/Button";
import AppOption from "../components/AppOption";
import AppItem from "../components/AppItem";

const Component = () => {
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
        <FontAwesome5IconButton
          name="edit"
          size={30}
          color={R.colors.secondary}
        />
      </View>
      <AppOption
        image={"../../res/image/voucher.png"}
        type="normal"
        text="You Have 3 Vouchers"
      />
      <View style={styles.favorite}>
        <Text style={styles.font}>Favorite</Text>
        <View>
          <AppItem
            type="Buy Again"
            image={"../../res/image/voucher.png"}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"
            image={"../../res/image/voucher.png"}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"

            image={"../../res/image/voucher.png"}
            title={"Spacy fresh crab"}
            restaurant={"Waroenk kita"}
            price={35}
          />
          <AppItem
            type="Buy Again"
            image={"../../res/image/voucher.png"}
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
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: `../../res/${R.images.profile}` }} />
      <SwipeUp component={<Component />} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

// make this component available to the app
export default Profile;
