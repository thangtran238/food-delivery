import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import R from '../R';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchBarWithRProps = {};

const SearchBarWithR: React.FC<SearchBarWithRProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Icon name={'search'} size={28} color={R.colors.secondary} style={styles.icon} />
        <TextInput style={styles.input} placeholder='What do you want to order' />

      </View>
      <Icon style={styles.sub_icon} name={'options'} size={21} color={R.colors.secondary} />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25
  },
  searchBar: {
    marginRight: 12,
    backgroundColor: R.colors.purple,
    height: 60,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    width: "85%"
  },
  input: {
    fontSize: R.strings.h3,
    color: R.colors.secondary
  }, icon: {
    marginRight: 12
  },
  sub_icon: {
    padding: 20,
    height: 60,
    width: "15%",
    borderRadius: 15,
    marginRight: 30,
    backgroundColor: R.colors.purple
  }
});

export default SearchBarWithR;