import { StyleSheet, Text, View, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import R from '../R';
import Button from './Button';

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

const Item_cart = (props: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [cost, setCost] = useState(0);
  const [price, setPrice] = useState(0);
  let imageSource = props.source?.image_url || '';
  if (typeof imageSource === 'string') {
    imageSource = { uri: imageSource };
  }

  const text = {
    food_name: props.text?.food_name || '',
    restaurant: props.text?.restaurant || '',
    price: props.text?.price || 0,
  };


  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
              <Text style={styles.price}>${text.price}</Text>
            </View>
            <Text style={styles.price}>${text.price}</Text>
          </View>
        </View>
      );

    case "secondary":
      return (
        <View>
          <View style={styles.item_container}>
            <Image style={styles.food_image} source={imageSource} resizeMode="contain" />
            <View>
              <Text style={styles.food_name}>{text.food_name}</Text>
              <Text style={styles.restaurant}>{text.restaurant}</Text>
              <Text style={styles.price}>${text.price}</Text>
            </View>


            <View style={styles.quantityContainer}>
              <View style={styles.wrap_sub}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.sub}>-</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.number}>{quantity}</Text>

              <View style={styles.wrap_add}>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.add}>+</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      );
    default:
      break;

  }
};

export default Item_cart;

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
    fontSize: 25,
    fontWeight: 'bold',
  },
  add: {
    backgroundColor: '#E7E2FE',
    borderRadius: 10,
    width: 26,
    height: 26,
    justifyContent: 'center',
    fontSize: 20,
    color: '#6B50F6',
    paddingLeft: 7,
  },
  wrap_sub: {
    paddingRight: 10,
  },

  sub: {
    backgroundColor: '#E7E2FE',
    borderRadius: 10,
    width: 26,
    height: 26,
    justifyContent: 'center',
    fontSize: 20,
    color: '#6B50F6',
    paddingLeft: 10,
  },
  wrap_add: {
    paddingLeft: 10,

  },

  number: {
    fontSize: 20,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
  },

  quantityButton: {
    backgroundColor: '#E7E2FE',
    borderRadius: 10,
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#6B50F6',
  },

});
