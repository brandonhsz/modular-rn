import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { theme } from '../core/theme'
import MapView from 'react-native-maps'

export default function Map() {
  const [longitude, setLongitude] = useState(20.65700)
  useEffect(() => {
    const interval = setInterval(() => {
      setLongitude(20.65600)
    }, 5000)

    clearInterval(interval)
  })

  return (
    // <View style={styles.container}>
    <MapView style={styles.map} region={{
      latitude: 20.6568,
      longitude: -103.3245,
      latitudeDelta: 0.0092,
      longitudeDelta: 0.0021

    }}>
      <MapView.Marker coordinate={{
        latitude: longitude,
        longitude: -103.3245,
      }} />
    </MapView>
    // </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: theme.colors.surface,
    padding: 20,
    marginTop: 30,
    borderColor: '#a1a1a1',
    // borderWidth: 2,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20
  },
  map: {
    padding: 20,
    marginTop: 30,
    borderColor: '#a1a1a1',
    borderWidth: 2,
    borderRadius: 30,
    width: '90%',
    height: 250,
    alignSelf: 'center',
    // paddingBottom: 20
  },

})