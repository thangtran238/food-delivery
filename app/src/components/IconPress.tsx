import { View,  StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  style: {
    borderRadius: number;
    backgroundColor: string;
    boxShadow?: string;
  };
  icon: string;
  size: number;
  color: string;
};

const IconPress = (props: Props) => {
  const styles = StyleSheet.create({
    container: {
      color: props.color,
      borderRadius: props.style.borderRadius,
      backgroundColor: props.style.backgroundColor,
      shadowColor: props.style.boxShadow,
    },
  });
  return (
    <View style={styles.container}>
      <Icon
        name={props.icon}
        size={props.size}
        color={props.style.backgroundColor}
      />
    </View>
  );
};

export default IconPress;
