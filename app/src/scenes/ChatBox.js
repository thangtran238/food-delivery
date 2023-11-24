import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from "react";
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../../../config/firebase";

import { AntDesign } from "@expo/vector-icons";
import R from "../R";
import Button from "../components/Button";

export default function ChatBox(navigation) {
  const styles = StyleSheet.create({
    container: {
      width: R.dimensions.width,
      height: R.dimensions.height,
    },
    image: {
      width: R.dimensions.width,
      height: R.dimensions.height,
    },
    wrapper: {
      flexDirection: "column",
    },
  });
  const colors = {
    primary: "#f57c00",
    gray: "#C5C5C7",
    mediumGray: "#F6F7FB",
    lightGray: "#FAFAFA",
  };
  const [messages, setMessages] = useState([]);

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      console.log("querySnapshot unsusbscribe");
      setMessages(
        querySnapshot.docs.map((doc,index) => ({
          key: index,
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    // setMessages([...messages, ...messages]);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    // <>
    //   {messages.map(message => (
    //     <Text key={message._id}>{message.text}</Text>
    //   ))}
    // </>
    <View style={styles.container}>
      <ImageBackground
        source={require("../../res/image/bg.png")}
        style={styles.image}
      >
        <View>
          <Button styleType="short" text={{text: "<"}}/>
        </View>
        <View>
          <Text>Chat</Text>
        </View>
          <GiftedChat
            messages={messages}
            showAvatarForEveryMessage={false}
            showUserAvatar={false}
            onSend={(messages) => onSend(messages)}
            messagesContainerStyle={{
              backgroundColor: ""
            }}
            textInputStyle={{
              backgroundColor: "#fff",
              borderRadius: 20,
            }}
            user={{
              _id: auth?.currentUser?.email,
              avatar: "https://i.pravatar.cc/300",
            }}
          />
      </ImageBackground>
    </View>
  );
}
