import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { theme } from '../core/theme'
import Header from '../components/Header'
import { TextInput } from 'react-native-paper'
import SelectDropdown from 'react-native-select-dropdown'
import { areas } from '../data/areas'

export default function AddPatient() {


  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          style={styles.doctorLogo}
          source={require('../assets/todo/pmtp.png')}
        />
        <View>
          <Text style={styles.header}>Por favor,  Agregue los datos del nuevo paciente</Text>
        </View>

        <View style={styles.center}>
          <TextInput style={styles.inputs} label={'Nombre(s)'} />
          <TextInput style={styles.inputs} label={'Apellidos'} />
          <TextInput style={styles.inputs} label={'Medico Tratante'} />
          <TextInput style={styles.inputs} label={'Procedimiento'} />
        </View>

        <View style={styles.center}>
          <View style={styles.horizontalAlign}>
            <Text style={{ alignSelf: 'center', marginRight: 2 }}>Area:</Text>
            <SelectDropdown
              data={areas}
            />
          </View>

          <View>
            <Text>Edad:</Text>
          </View>

          <View>
            <Text>Sexo:</Text>
          </View>

          <View>
            <Text>Brazalete:</Text>
          </View>

          <View>
            <Text>Tipo de sangre:</Text>
          </View>
        </View>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    marginHorizontal: 10,
    backgroundColor: theme.colors.surface,
    maxWidth: '100%'
    // alignItems: 'center',
    // flexDirection: 'row'
  },
  header: {
    // fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: 'grey',
    padding: 10,
    height: 50,
    paddingVertical: 12,

  },
  doctorLogo: {
    width: 100,
    height: 100,
    marginTop: 30,
    // borderWidth: 2,
    borderColor: 'rgb(0, 218, 227)',
    // borderRadius: 100 / 2,
  },
  center: {
    alignItems: 'center'
  },
  inputs: {
    width: '90%',
    backgroundColor: theme.colors.surface,
  },
  horizontalAlign: {
    flexDirection: 'row'
  },
})