import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons';
import React from 'react'
import { useStore } from '../store/store';


export default function Patient({ route, navigation }) {
  const { name, lastName, age, gender, doctor, blood, procedure, details, room, status } = route.params.item

  const data = useStore(state => state.datos);

  console.log(data);
  return (
    <ScrollView>

      <Card>
        <Card.Title title={`Paciente ${name.toUpperCase()} ${lastName.toUpperCase()}`} />
        <Card.Content>
          <Title>{`Paciente de ${procedure}`}</Title>
          <Paragraph>{`${details}`}</Paragraph>
          <Paragraph>{`${room}`}</Paragraph>
          <Paragraph>{`Sangre: ${blood}`}</Paragraph>
          <Paragraph>{`Sexo: ${gender}`}</Paragraph>
          <Paragraph>{`Responsable: ${doctor}`}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Medir signos</Button>
          <Button
            onPress={() => navigation.navigate('Main')}
          >Regresar</Button>
        </Card.Actions>
      </Card>
      <View style={styles.container}>
        <AntDesign name="heart" size={100} color={'red'} />
        <FontAwesome5 name="temperature-high" size={100} color="black" />
        <Entypo name="air" size={100} color="black" />
      </View>




    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  info: {
    alignItems: 'flex-start',
  },
})