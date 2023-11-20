import * as React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";
import R from "../R";
import Button from "../components/Button";
type Props = {};

const Banner = (props: Props) => {
  return (
    <View>
      <View style={styles.box_container}>
        <Image
          source={require("../../res/image/icream.png")}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
        ></Image>
        <View style={styles.box}>
          <Text style={styles.text}>Special Deal{"\n"}For October</Text>
          <Button styleType="short"></Button>
        </View>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  box_container: {
    backgroundColor: "#6B50F6",
    alignSelf: "center",
    marginTop: 20,
    width: R.dimensions.width - 50,
    height: 150,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16 ,
    paddingTop: 6,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  image: {
    width: R.dimensions.width - 100,
    height: 150,
  },
  text: {
    color: "white",
    marginRight: 10,
    fontWeight: "700",
    fontSize: 17,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "baseline",
  },
});
