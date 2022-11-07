import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SensorIcon from '../assets/todo/prescripcion-medica.png'
import { useNavigation } from '@react-navigation/native';
export default function Sensors({ item }) {

  const navigation = useNavigation()
  console.log(item)
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Patient', { item: item })}
    >
      <View
        style={styles.container}
      >
        <Image
          style={styles.icon}
          source={SensorIcon}
        />
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  icon: {
    height: 50,
    width: 50,
  }
})
