import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import IconoFemenino from '../assets/todo/am4.png'
import Temp from '../assets/todo/termometro.png'
import Freq from '../assets/todo/ritmo-cardiaco.png'
import Sat from '../assets/todo/saturacion-de-oxigeno.png'
import Huellas from '../assets/todo/huellas.png'
import SignalInfo from './SignalInfo'

export default function PatientInfo() {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.horizontal}>
        <Image
          source={IconoFemenino}
          style={styles.patientIcon}
        />
        <Text style={styles.text}>Meztle De la Caridad</Text>
      </View>

      <View style={styles.horizontal}>
        <SignalInfo
          signal={'36°'}
          icon={Temp}
        />

        <SignalInfo
          signal={'36°'}
          icon={Freq}
        />

        <SignalInfo
          signal={'36°'}
          icon={Sat}
        />

        <SignalInfo
          signal={'36°'}
          icon={Huellas}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    borderColor: '#a1a1a1',
    borderWidth: 2,
    borderRadius: 30,
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 20
  },
  patientIcon: {
    height: 120,
    width: 120,
  },
  text: {
    marginLeft: 5,
    alignSelf: 'center',
    fontSize: 20,
  },
  horizontal: {
    flexDirection: 'row'
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