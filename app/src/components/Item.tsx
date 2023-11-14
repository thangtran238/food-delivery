import { StyleSheet, Text, View, ImageSourcePropType, Image } from 'react-native'
import React from 'react'
import R from '../R';

type Props = {
  styleType?: 'primary' | 'secondary';
  source?: {
    image_url?: string | ImageSourcePropType;
  };
  text?: {
    food_name?: string,
    restaurant?: string,
    price?: number,
  }
}

const Item = (props: Props) => {
  let imageSource = props.source?.image_url || '';
  if (typeof imageSource === 'string') {
    imageSource = { uri: imageSource };
  }

  const text = {
    food_name: props.text?.food_name || '',
    restaurant: props.text?.restaurant || '',
    price: props.text?.price || 0,
  };
  switch (props.styleType) {
    case "primary":
      return (
        <View>
          <View style={styles.item_container}>
            <Image style={styles.food_image} source={imageSource} resizeMode="contain"></Image>
            <View>
              <Text style={styles.food_name}>{text.food_name}</Text>
              <Text style={styles.restaurant}>{text.restaurant}</Text>
            </View>
            <Text style={styles.price}>${text.price}</Text>
          </View>
        </View>
      );
    case "secondary":
      return (
        <View>
          <View style={styles.item_container}>
            <Image style={styles.food_image} source={imageSource} resizeMode="contain"></Image>
            <View>
              <Text style={styles.food_name}>{text.food_name}</Text>
              <Text style={styles.restaurant}>{text.restaurant}</Text>
            </View>
            <Text style={styles.price}>${text.price}</Text>
          </View>
        </View>
      );
    default:

      break;
  }

};

export default Item;

const styles = StyleSheet.create({
  item_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '86%',
    height: 87,
    borderRadius: 22,
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
    alignSelf: 'center',
    shadowColor: "#ccc",
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  food_name: {
    color: 'black',
    fontSize: 15,
  },
  food_image: {
    width: 64,
    height: 64,
    marginLeft: 10,
    borderRadius: 10,
  },
  restaurant: {
    color: 'grey',
    fontSize: 14,
  },
  price: {
    color: R.colors.secondary,
    fontSize: 22,
    marginLeft: 'auto',
    fontWeight: 'bold',
    marginRight: 20,
  },
});
