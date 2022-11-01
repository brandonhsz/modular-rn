import React, { useState, useEffect } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import init from 'react_native_mqtt';
import Paho from 'paho-mqtt';

const useMQTT = () => {

  const [connectStatus, setConnectStatus] = useState(false);

  const options = {
    host: '192.168.100.10',
    port: 8083,
    path: '/testTopic',
    id: 'id_' + 'BrandonIphone'
  };

  const client = new Paho.Client(options.host, Number(options.port), options.id);

  const connect = () => {
    client.connect({
      onSuccess: () => {
        console.log('connected');
        setConnectStatus(true);
        client.subscribe('sensores');
      },
      onFailure: () => {
        console.log('failed');
        setConnectStatus(false);
      }
    });
  };


  const disconnect = () => {
    client.disconnect();
    setConnectStatus(false);
  };

  return {
    client,
    connect,
  }
}

export default useMQTT