// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/screens/Main';
import Patient from './src/screens/Patient';
import useMQTT from './src/hooks/useMQTT';


const Stack = createNativeStackNavigator();

function App() {

  const { client, connect } = useMQTT();

  React.useEffect(() => {
    connect();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Patient" component={Patient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;