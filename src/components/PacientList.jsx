import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { patients } from '../data/patients'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LogoFemenino from '../assets/todo/am4.png'
import LogoMasculino from '../assets/todo/ah5.png'
import Button from './Button'
import Sensors from './Sensors';
import { theme } from '../core/theme';
import SensorIcon from '../assets/todo/prescripcion-medica.png'


export default function PacientList() {

  const navigation = useNavigation()

  return (
    <>
      <Text style={styles.welcomeText}>Los pacientes de hoy son:</Text>
      <ScrollView style={styles.container}>
        <FlatList
          data={patients}
          renderItem={({ item }) => (
            <View
              style={styles.card}
            >
              <View style={styles.imageDirection}>
                <Image
                  style={styles.patientLogo}

                  source={item.gender === 'Femenino' ? LogoFemenino : LogoMasculino}
                />
                <Text style={styles.text}>{item.name} {item.lastName}</Text>
              </View>

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
            </View>
          )}
        />
      </ScrollView>
      <Button
        mode={'contained'}
        style={styles.button}
        onPress={() => navigation.navigate('Add')}
      >Añadir Paciente</Button>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '90%',
  },
  text: {
    alignSelf: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'rgba(246, 51,65, 0.85)',
    marginTop: 5,
    padding: 10,
    width: "100%",
    borderTopWidth: 1,
  },
  patientLogo: {
    width: 60,
    height: 60,
    borderWidth: 1,
    // borderRadius: '50%',
    borderRadius: 60 / 2,
    marginRight: 10,
    borderColor: 'rgb(0, 218, 227)',
  },
  imageDirection: {
    flexDirection: 'row'
  },
  welcomeText: {
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
    marginLeft: 40,
    position: 'relative',
    bottom: -20
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginBottom: 20,
  },
  icon: {
    height: 50,
    width: 50,
  }
})