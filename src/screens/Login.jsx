import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import axios from 'axios'
import Danger from '../components/Danger'
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const onLoginPressed = async () => {
    const response = await axios.post('http://172.20.10.2:3000/login', {
      email: email,
      password: password
    })
    console.log(response.data.data.status);
    if (response.data.data.status === 200) {
      setError(false)
      navigation.replace('Main')
    }
    else setError(true)
  }


  return (
    <Background>
      <View>
        <Logo />
        <Text style={styles.header}>Bienvenido</Text>
      </View>
      {
        error ? <Danger message={'Verifique los datos ingresados'} style={styles.danger} /> : null
      }
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry

      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <Button style={styles.button} mode="contained" onPress={() => onLoginPressed()}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>No tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={styles.link}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>


    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: 'black',

  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.backdrop,
  },
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    padding: 10,
    height: 50,
    paddingVertical: 12,
    // alignSelf: 'center'
    textAlign: 'center'
  },
  button: {
    backgroundColor: theme.colors.primary,
  },
  textInput: {
    borderRadius: 10,
  },
  danger: {
    backgroundColor: theme.colors.danger,
    borderWidth: 1
  }
})