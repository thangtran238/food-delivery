import { View, Text } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import { GET_NAV } from '../util/constant'
import SearchBarWithR from '../components/SearchBarWithR'
type Props = {}

const Home = (props: Props) => {
  return (
    <View>
      
      <Heading navigation={GET_NAV()}/>
    </View>
  )
}

export default Home