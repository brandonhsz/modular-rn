import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'

export default function AllPatientInfor({ patient }) {
  const { name, lasName, age, gender, doctor, blood, procedure, details, room, status } = patient

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nombre:{name}
      </Text>
      <Text style={styles.text}>
        Apellido:{lasName}</Text>
      <Text style={styles.text}>
        Edad:{age}
      </Text>
      <Text style={styles.text}>
        Tipo De Sangre:{blood}
      </Text>
      <Text style={styles.text}>
        Medico:{doctor}</Text>
      <Text style={styles.text}>
        Procedimiento:{procedure}
      </Text>
      <Text style={styles.text}>
        Area:{room}
      </Text>
      <Text style={styles.text}>
        Brazalete:{1}
      </Text>
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