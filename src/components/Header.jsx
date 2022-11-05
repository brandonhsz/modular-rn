import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.doctorLogo}
        source={require('../assets/doctor.png')}
      />
      <View>
        <Text style={styles.header} {...props} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    height: 50,
    paddingVertical: 12,
  },
  doctorLogo: {
    width: 100,
    height: 100,
    marginTop: 30,
    borderWidth: 2,
    borderColor: 'rgb(0, 218, 227)',
    borderRadius: 100 / 2,
  },
})