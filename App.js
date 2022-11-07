// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Patient from './src/screens/Patient';
import AddPatient from './src/screens/AddPatient'
import useMQTT from './src/hooks/useMQTT';
import LoginScreen from './src/screens/Login';
import { Text } from 'react-native';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Patient" component={Patient} />
        <Stack.Screen name="Add" component={AddPatient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;