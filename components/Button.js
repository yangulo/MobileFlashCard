import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { pink } from '../utils/colors'

export default function Button ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      color: pink,
    }
  })