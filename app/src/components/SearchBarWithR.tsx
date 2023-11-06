import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import R from "../R";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

const SearchBarWithR: React.FC<{ navigation: Navigator }> = ({
  navigation
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon
          name={"search"}
          size={28}
          color={R.colors.secondary}
        />
        <TextInput
          style={styles.input}
          placeholder="What do you want to order"
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Filter")} style={styles.wrapper}>
        <Icon
          style={styles.sub_icon}
          name={"options"}
          size={21}
          color={R.colors.secondary}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: R.dimensions.width,
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  searchBar: {
    backgroundColor: R.colors.purple,
    height: 60,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    flex: 0.85 ,
    columnGap: 10,
    shadowColor: "#ccc",
    shadowOpacity: 0.8,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  input: {
    fontSize: R.strings.h3,
    color: R.colors.secondary,
  },
  wrapper: {
    padding: 20,
    height: 60,
    flex: 0.1,
    backgroundColor: R.colors.purple,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#ccc",
    shadowOpacity: 0.7,
    shadowRadius: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
});

export default SearchBarWithR;
