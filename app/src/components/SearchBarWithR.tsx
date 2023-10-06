import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from 'react-native-search-bar';

type SearchBarWithRProps = {};

const SearchBarWithR: React.FC<SearchBarWithRProps> = () => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search..."
        barStyle="default"
        onChangeText={(searchText: string) => {
          // Handle search text changes here
          console.log(searchText);
        }}
        onSearchButtonPress={(searchText: string) => {
          // Handle search button press here
          console.log(searchText);
        }}
        onCancelButtonPress={() => {
          // Handle cancel button press here
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add your container styles here
  },
});

export default SearchBarWithR;
