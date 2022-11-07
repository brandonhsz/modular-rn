import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import React from 'react'
import { useStore } from '../store/store';
import PatientInfo from '../components/PatientInfo';
import AllPatientInfor from '../components/AllPatientInfor';


export default function Patient({ route, navigation }) {
  console.log(route);
  const { name, lastName, age, gender, doctor, blood, procedure, details, room, status } = route.params.item

  const data = useStore(state => state.datos);
  return (
    <ScrollView
      style={styles.container}
    >
      <PatientInfo />
      <AllPatientInfor />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',

  },
  info: {
    alignItems: 'flex-start',
  },
})