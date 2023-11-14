//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import ChatItem from "../components/ChatItem";
import R from "../R";

// create a component
const Chat: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../res/image/bg.png")}
        style={styles.img}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Button styleType="custom" text={{ text: "<" }} />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.chat}>Chat</Text>
        </View>
        <View style={styles.chatList}>
          <ChatItem
            image_url={require("../../res/image/chat1.png")}
            name={"Kelly"}
            time={"20:00"}
          />
          <ChatItem
            image_url={require("../../res/image/chat1.png")}
            name={"Kelly"}
            time={"20:00"}
          />
          <ChatItem
            image_url={require("../../res/image/chat1.png")}
            name={"Kelly"}
            time={"20:00"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  img: {
    width: R.dimensions.width,
    height: R.dimensions.height,
  },
  chat: {
    fontWeight: "bold",
    fontSize: 40,
    marginLeft: 20,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  chatList: {
    paddingVertical: 12,
    rowGap: 20,
  },
  button: {
    alignItems: "flex-start",
    marginTop: 24,
    marginStart: 24,
  },
});

//make this component available to the app
export default Chat;
