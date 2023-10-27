import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
  styleType?: 'long_blue' | 'long_white' | 'short' | 'custom';
  style?: {
    borderRadius?: number,
    padding?: number,
    color?: string,
    width?: number | string,
    height?: number,
    backgroundColor?: string
    fontsize?: number
  },
  text?: {
    text?: string
  }
}

const Button = (props: Props) => {
  let buttonStyle = {};
  switch (props.styleType) {
    case 'long_blue':
      buttonStyle = {
        backgroundColor: '#6B50F6',
        borderRadius: 15,
        width: 325,
        height: 57,
        fontSize: 14,
      };
      break;
    case 'long_white':
      buttonStyle = {
        backgroundColor: 'white',
        borderRadius: 15,
        width: 325,
        height: 57,
        fontSize: 14,
        color: '#6B50F6',
      };
      break;
    case 'short':
      buttonStyle = {
        backgroundColor: 'white',
        borderRadius: 6,
        width: 82,
        height: 32,
        color: '#6B50F6',
        fontSize: 10,
      };
      break;
    case 'custom':
      buttonStyle = {
        backgroundColor: props.style?.backgroundColor || '#E7E2FE',
        borderRadius: props.style?.borderRadius || 10,
        width: props.style?.width || 45,
        height: props.style?.height || 45,
        padding: props.style?.padding || 10,
        fontSize: props.style?.fontsize || 20,
        color: props.style?.color || '#6B50F6',
      };
      break;
    default:
      break;
  }

  const buttonText = {
    text: props.text?.text || 'Submit',
  };

  return (
    <View>
      <Text style={[styles.button, buttonStyle]}>
        {buttonText.text}
      </Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 14,
  },
});
