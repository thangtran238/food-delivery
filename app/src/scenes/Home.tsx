import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import { GET_NAV } from '../util/constant'
import SearchBarWithR from '../components/SearchBarWithR'
import Banner from '../components/Banner'
import Shop from '../components/Shop'
type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.imageBackground}>
      <Heading navigation={GET_NAV()} />
      <SearchBarWithR />
      <Banner />

      <Shop
        source={{ image_url: require('../../res/image/Restaurant2.png') }}
        text={{
          title: 'Product Title',
          time: '13 minutes',
        }}
      />


    </View>
  )
}
const styles = StyleSheet.create({
  imageBackground: {},
  image: { flex: 1 },
  tex_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nearest_restaurant: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  view_more: {
    fontSize: 12,
    color: '#6B50F6',
  },
});

export default Home
