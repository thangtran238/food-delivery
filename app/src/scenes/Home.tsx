import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Heading from '../components/Heading'
import { GET_NAV } from '../util/constant'
import SearchBarWithR from '../components/SearchBarWithR'
import R from '../R'
import Button from '../components/Button'
type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.imageBackground}>
      <Heading navigation={GET_NAV()} />
      <SearchBarWithR />
      <View style={styles.imageBackground}>
        <ImageBackground source={{ uri: R.images.a }} resizeMode='cover' style={styles.image} />
        <Image source={{ uri: R.images.a }} resizeMode='cover' style={styles.image} />
      </View>
      <View style={styles.box_container}>
        <Image source={require('../../res/image/icream.png')} style={{ width: 200, height: 200 }} resizeMode="contain"></Image>
        <View style={styles.box}>
          <Text style={styles.text}>Special Deal For October</Text>
          <Button styleType='short'></Button>
        </View>
        <View>
          <Text>ABkskja</Text>
        </View>
      </View>

    </View>
  )
}
const styles = StyleSheet.create({
  imageBackground: {},
  image: { flex: 1 },
  box_container: {
    backgroundColor: '#6B50F6',
    alignSelf: 'center',
    marginTop: 20,
    width: 325,
    height: 150,
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  text: {
    color: 'white',
    width: '50%',
    marginRight: 10,
    fontWeight: '700',
    fontSize: 17,
  },
  box: {
    // alignSelf: 'baseline',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  button: {
    marginLeft: 100,
  },

});

export default Home