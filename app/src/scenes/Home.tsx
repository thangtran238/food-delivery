import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Shop from '../components/Shop'
type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Shop
        source={{
          image_url: require('../../../assets/Restaurant1.png')
        }}
        text={{
          title: 'Product Title',
          time: '13 minutes',
        }}>
      </Shop>
      <Shop
        source={{
          image_url: require('../../../assets/Restaurant2.png')
        }}
        text={{
          title: 'Product Title',
          time: '13 minutes',
        }}>
      </Shop>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});