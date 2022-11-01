import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { patients } from '../data/patients'

export default function Main({ navigation }) {
  return (
    <View
      style={styles.container}
    >
      <Text>Bienvenido</Text>
      <FlatList
        data={patients}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() => navigation.navigate('Patient', { item })}
          />
        )}
      />
      <Button
        title="Go to Patient"
        onPress={() => navigation.navigate('Patient')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
})