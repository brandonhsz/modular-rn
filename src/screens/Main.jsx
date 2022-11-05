import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Header from '../components/Header'

import useMQTT from '../hooks/useMQTT'

import { useStore } from '../store/store'
import PacientList from '../components/PacientList'

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
      <PacientList />
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


})