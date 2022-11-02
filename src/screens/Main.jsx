import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { patients } from '../data/patients'
import Header from '../components/Header'
import { Card } from 'react-native-paper'
import useMQTT from '../hooks/useMQTT'

import { useStore } from '../store/store'

export default function Main({ navigation }) {

  const { client, connect } = useMQTT();


  React.useEffect(() => {
    connect();
  }, []);

  return (
    <View
      style={styles.container}
    >
      <Header>Bienvenido Doctor</Header>
      <Text>Sus Pacientes:</Text>
      <FlatList
        data={patients}
        style={styles.list}
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
          >
            <Button
              title={item.name}
              onPress={() => navigation.navigate('Patient', { item })}
            />
            <Text style={styles.text}>{item.name}</Text>
          </Card>
        )}
      />
      <Button
        title="Go to Patient"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  list: {
    borderColor: 'black',
    borderWidth: 1,
    height: 'auto',
  },
  card: {
    margin: 10,
    padding: 10,
    width: 150,
  },
  cardContainer: {
  }
})