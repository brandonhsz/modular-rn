import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'

export default function AllPatientInfor() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre:</Text>
      <Text style={styles.text}>Apellido: </Text>
      <Text style={styles.text}>Edad: </Text>
      <Text style={styles.text}>Tipo De Sangre:</Text>
      <Text style={styles.text}>Medico: </Text>
      <Text style={styles.text}>Procedimiento: </Text>
      <Text style={styles.text}>Area: </Text>
      <Text style={styles.text}>Brazalete: </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 20,
    marginTop: 30,
    borderColor: '#a1a1a1',
    borderWidth: 2,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20
  },
  text: {
    color: 'white',
  }
})