import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import { GET_NAV } from '../util/constant'
import SearchBarWithR from '../components/SearchBarWithR'
import Banner from '../components/Banner'
import Shop from '../components/Shop'
import ViewMore from '../components/ViewMore'
import R from '../R'
import Item from '../components/Item'

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.imageBackground}>
      <Heading navigation={GET_NAV()} />

      <ScrollView>
        <SearchBarWithR />
        <Banner />

        <ViewMore
          text={{
            title: 'Nearest Restaurant',
            viewmore: 'View More',
          }}
        />

        <ScrollView horizontal>
          <View style={styles.shop_container}>
            <Shop
              source={{ image_url: require('../../res/image/Restaurant1.png') }}
              text={{
                title: 'Vergan Store',
                time: '12 minutes',
              }}
            />
            <Shop
              source={{ image_url: require('../../res/image/Restaurant2.png') }}
              text={{
                title: 'Smart Resto',
                time: '18 minutes',
              }}
            />
            <Shop
              source={{ image_url: require('../../res/image/Restaurant3.png') }}
              text={{
                title: 'Healthy Food',
                time: '8 minutes',
              }}
            />
            <Shop
              source={{ image_url: require('../../res/image/Restaurant4.png') }}
              text={{
                title: 'Vergan Food',
                time: '13 minutes',
              }}
            />

          </View>
        </ScrollView>

        <ViewMore
          text={{
            title: 'Popular Menu',
            viewmore: 'View More',
          }}
        />

        <Item
          styleType="primary"
          source={{ image_url: require('../../res/image/food1.png') }}
          text={{
            food_name: 'Herbal Pancake',
            restaurant: 'Wijie Resto',
            price: 7,
          }}
        />
        <Item
          styleType="primary"
          source={{ image_url: require('../../res/image/food2.png') }}
          text={{
            food_name: 'Fruit Salad',
            restaurant: 'Warung Herbal',
            price: 9,
          }}
        />
        <Item
          styleType="secondary"
          source={{ image_url: require('../../res/image/food3.png') }}
          text={{
            food_name: 'Green Noddle',
            restaurant: 'Warung Resto',
            price: 12,
          }}
        />
      </ScrollView>

    </View>
  )
}
const styles = StyleSheet.create({
  imageBackground: {
    marginBottom: 270,
  },
  image: { flex: 1 },
  shop_container: {
    flexDirection: 'row',
  },

});

export default Home
