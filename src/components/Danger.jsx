import { View, Text } from 'react-native'
import React from 'react'

export default function Danger({ message }, ...props) {
  return (
    <Text {...props}>{message}</Text>
  )
}