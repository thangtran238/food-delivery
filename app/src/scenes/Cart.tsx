import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from 'react';
import { useState } from "react";
import Button from "../components/Button";
import R from "../R";

type Props = {};

const Cart: React.FC<{ navigation: Navigator }> = ({ navigation }) => {
  const [quantity1, setQuantity1] = useState(1);
  const [quantity2, setQuantity2] = useState(1);
  const [price1, setPrice1] = useState(0);
  const [price2, setPrice2] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(20);
  const [discount, setDiscount] = useState(10);
  const [total, setTotal] = useState(0);

  const increaseQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decreaseQuantity1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };

  const increaseQuantity2 = () => {
    setQuantity2(quantity2 + 1);
  };

  const decreaseQuantity2 = () => {
    if (quantity2 > 1) {
      setQuantity2(quantity2 - 1);
    }
  };

  useEffect(() => {
    setSubTotal(quantity1 * 7 + quantity2 * 10);
  }, [quantity1, quantity2]);

  useEffect(() => {
    setTotal(subTotal + deliveryCharge - discount);
  }, [subTotal]);
  


  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Button styleType="custom" text={{ text: "<" }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Order details</Text>

      <ScrollView>

        <View style={styles.item_container}>
          <Image style={styles.food_image} source={require("../../res/image/food1.png")} resizeMode="contain" />

          <View>
            <Text style={styles.food_name}>Herbal Pancake</Text>
            <Text style={styles.restaurant}>Wijie Resto</Text>
            <Text style={styles.price}>$7</Text>
          </View>


          <View style={styles.quantityContainer}>
            <View style={styles.wrap_sub}>
              <TouchableOpacity onPress={decreaseQuantity1}>
                <Text style={styles.sub}>-</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.number}>{quantity1}</Text>

            <View style={styles.wrap_add}>
              <TouchableOpacity onPress={increaseQuantity1}>
                <Text style={styles.add}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        {/* --------------------------------------------- */}

        <View style={styles.item_container}>
          <Image style={styles.food_image} source={require("../../res/image/food4.png")} resizeMode="contain" />

          <View>
            <Text style={styles.food_name}>Spacy Fresh Crab</Text>
            <Text style={styles.restaurant}>Waroenk Kita</Text>
            <Text style={styles.price}>$10</Text>
          </View>


          <View style={styles.quantityContainer}>
            <View style={styles.wrap_sub}>
              <TouchableOpacity onPress={decreaseQuantity2}>
                <Text style={styles.sub}>-</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.number}>{quantity2}</Text>

            <View style={styles.wrap_add}>
              <TouchableOpacity onPress={increaseQuantity2}>
                <Text style={styles.add}>+</Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

      </ScrollView>

      {/* </View> */}

      <View style={styles.total}>
        <View style={styles.container_total_text}>
          <View style={styles.left_total_text}>
            <Text style={styles.sub_total}>Sub-Total</Text>
            <Text style={styles.delivery_discount}>Delivery Charge</Text>
            <Text style={styles.delivery_discount}>Discount</Text>
            <Text style={styles.total_highlight}>Total</Text>
          </View>
          <View style={styles.right_total_text}>
            <Text style={styles.sub_total}>{subTotal}$</Text>
            <Text style={styles.delivery_discount}>{deliveryCharge}$</Text>
            <Text style={styles.delivery_discount}>{discount}$</Text>
            <Text style={styles.total_highlight}>{total}$</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Order Detail")}>
          <Button
            styleType="long_white"
            text={{ text: "Place My Order" }}
          ></Button>
        </TouchableOpacity>

        <View style={styles.space}></View>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  text: {
    width: "50%",
    fontWeight: R.fonts.bold,
    fontSize: R.strings.h1,
  },
  container: {
    flex: 1,
    marginLeft: 23,
    marginTop: 38,
  },
  back: {
    marginRight: "auto",
  },

  total: {
    backgroundColor: R.colors.secondary,
    width: "auto",
    height: "auto",
    borderRadius: 22,
    justifyContent: "flex-end",
    marginBottom: 15,
    marginRight: 25,
  },
  container_total_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  left_total_text: {
    width: "auto",
    height: "auto",
    borderRadius: 22,
    color: "white",
  },
  right_total_text: {
    width: "auto",
    height: "auto",
    borderRadius: 22,
    color: "white",
  },
  sub_total: {
    color: "white",
    marginTop: 10,
    fontWeight: "bold",
  },
  delivery_discount: {
    color: "white",
    marginBottom: 2,
    fontWeight: "bold",
  },
  total_highlight: {
    color: "white",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  space: {
    height: 15,
  },


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
