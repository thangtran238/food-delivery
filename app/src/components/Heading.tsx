import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import R from "../R";

const Heading: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Find Your {"\n"}Favorite Food</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Icon
            style={styles.icon}
            name={"notifications-outline"}
            size={22}
            color={R.colors.secondary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Heading;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 31,
    paddingTop: 60,
    paddingBottom: 18,
  },
  text: {
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h1,
  },
  icon: {
    backgroundColor: R.colors.primary,
    borderRadius: 8,
    padding: 11,
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});
