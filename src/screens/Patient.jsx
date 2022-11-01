import { View, Text, Button, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'


export default function Patient({ route, navigation }) {
  const { name, age, status } = route.params.item
  return (
    <View>

      <View style={styles.container}>
        <View style={styles.info}>
          <Text>Nombre: {name}</Text>
          <Text>Edad: {age}</Text>
          <Text>Estado: {status ? 'Vivo' : 'Muerto'} </Text>
        </View>
        <AntDesign name="heart" size={100} color={'red'} />
      </View>

      <Button
        title="Go to Main"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    alignItems: 'flex-start',
  },
})