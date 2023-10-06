import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import { GET_NAV } from '../util/constant'
import SearchBarWithR from '../components/SearchBarWithR'
import R from '../R'
type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.imageBackground}>

      <Heading navigation={GET_NAV()}/>
      <SearchBarWithR />
      <View style={styles.imageBackground}>
        <ImageBackground source={{uri: R.images.a}} resizeMode='cover' style={styles.image}/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  imageBackground: {},
  image: {flex: 1 }
});

export default Home