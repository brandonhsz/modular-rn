import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import React, { useState } from 'react'
import Imagen from '../assets/todo/pmt.png'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import { Button } from 'react-native-paper'
import usePatients from '../hooks/usePatients'
export default function AddPatient() {

  const [patient, setPatient] = useState({})
  const [error, setError] = useState()
  const { getPatients } = usePatients()

  const onPatiendAdded = async () => {
    const response = await axios.post('http://172.20.10.2:3000/patient', {
      name: patient.name,
      lasName: patient.lasName,
      age: Number(patient.age),
      gender: patient.gender,
      doctor: patient.doctor,
      blood: patient.blood,
      procedure: patient.procedure,
      details: patient.details,
      room: patient.room,
      status: patient.status === 'True' ? true : false
    })
    console.log(response)
    if (response.data.data.status === 201) {
      console.log(response.data.data.status);
      setError(false)
      await getPatients()
      // navigation.replace('Main')
    }
    else console.log('error');
  }

  return (
    <>
      <View style={styles.horizontal}>
        <Text style={styles.header}>Ingresar Datos Del Paciente</Text>
        <Image
          source={Imagen}
          style={styles.image}
        />
      </View>
      <ScrollView
        // style={styles.container}
        contentContainerStyle={styles.container}
      >

        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            name: text
          })}
          label="Nombre(s)"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            lasName: text
          })}
          label="Apellidos"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            age: text
          })}
          label="Edad"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            gender: text
          })}
          label="Sexo"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            doctor: text
          })}
          label="Doctor"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            blood: text
          })}
          label="Tipo De Sangre"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            procedure: text
          })}
          label="Procedimiento"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            details: text
          })}
          label="Detalles"
          returnKeyType="next"
        />
        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            room: text
          })}
          label="Area"
          returnKeyType="next"
        />

        <TextInput
          onChangeText={(text) => setPatient({
            ...patient,
            status: text
          })}
          label="Estado"
        />

        <Button style={styles.button} mode="contained" onPress={async () => await onPatiendAdded()}>
          AÑADIR
        </Button>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: 'row',
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    height: 90,
    width: 90,
  },
  globito: {
    width: 300,
    height: 300,
    resizeMode: 'center'
  },
  header: {
    fontSize: 15,
    color: theme.colors.primary,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    height: 50,
    paddingVertical: 12,
    position: 'relative',
    // top: 30,
    // right: 10
    // width: "100%"
  },
  container: {
    // padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginBottom: 40,
  },
})