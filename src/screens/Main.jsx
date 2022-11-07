import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import React from 'react'

import Header from '../components/Header'

import useMQTT from '../hooks/useMQTT'
import { theme } from '../core/theme'

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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
  },
})
