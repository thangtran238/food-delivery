import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <View>
      <Text>Home</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});