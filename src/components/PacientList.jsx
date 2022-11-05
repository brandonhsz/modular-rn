import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native'
import { patients } from '../data/patients'
import React from 'react'

import LogoFemenino from '../assets/femenino.png'
import LogoMasculino from '../assets/masculino.png'

export default function PacientList() {
  return (
    <View style={styles.container}>
      <Text>Los pacientes de hoy son: :</Text>
      <FlatList
        data={patients}
        style={styles.list}
        // numColumns={2}
        renderItem={({ item }) => (
          <View
            style={styles.card}
          >
            {/* <Button
              title={item.name}
              onPress={() => navigation.navigate('Patient', { item })}
            /> */}
            <Image
              style={styles.patientLogo}

              source={item.gender === 'Femenino' ? LogoFemenino : LogoMasculino}
            />
            <Text style={styles.text}>{item.name}</Text>

            <Text style={styles.text}>Aqui la info de sensores</Text>
          </View>
        )}
      />
    </View>
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
  list: {
    borderColor: 'black',
    // borderWidth: 1,
    // height: 'auto',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
  },
  patientLogo: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 50 / 2,
    borderColor: 'rgb(0, 218, 227)',
  }
})