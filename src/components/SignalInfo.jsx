import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function SignalInfo({ signal, icon }) {
  return (
    <View style={styles.signalContainer}>
      <Image
        source={icon}
        style={styles.signalIcon}
      />
      <Text style={styles.text}>{signal}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    marginLeft: 5,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '500'
  },
  signalIcon: {
    width: 30,
    height: 30,
  },
  signalContainer: {
    margin: 10,
    flexDirection: 'row'
  }
})