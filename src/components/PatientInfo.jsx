import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import IconoFemenino from '../assets/todo/am4.png'
import IconoMasculino from '../assets/todo/ah5.png'
import Temp from '../assets/todo/termometro.png'
import Freq from '../assets/todo/ritmo-cardiaco.png'
import Sat from '../assets/todo/saturacion-de-oxigeno.png'
import Huellas from '../assets/todo/huellas.png'
import SignalInfo from './SignalInfo'
import useMQTT from '../hooks/useMQTT'

export default function PatientInfo({ patient }) {
  const { name, lasName, age, gender, doctor, blood, procedure, details, room, status } = patient

  const { client, data } = useMQTT()



  return (
    <View
      style={styles.container}
    >
      <View style={styles.horizontal}>
        <Image
          source={gender === 'Femenino' ? IconoFemenino : IconoMasculino}
          style={styles.patientIcon}
        />
        <Text style={styles.text}>{name} {lasName}</Text>
      </View>

      <View style={styles.horizontalSignal}>
        <SignalInfo
          signal={data.temp || 0}
          icon={Temp}
        />

        <SignalInfo
          signal={data.freq || 0}
          icon={Freq}
        />

        <SignalInfo
          signal={data.ox || 0}
          icon={Sat}
        />

        <SignalInfo
          signal={data.steps || 0}
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
    flexDirection: 'row',
  },
  horizontalSignal: {
    flexDirection: 'row',
    width: '50%',
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