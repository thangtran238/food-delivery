import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    style?: {
        border?: string,
        padding?: number,
        color?: string,
        backgroundColor?: string
    }
}

const Button = (props: Props) => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({})
