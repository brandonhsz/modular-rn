import React, { useState, useEffect } from 'react'
import { useStore } from '../store/store'
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
        console.log('connected to mqtt server');
        setConnectStatus(true);
        client.subscribe('sensores');
        console.log('subscribed to topic');
        client.onMessageArrived = (message) => {
          console.log('message arrived', message.payloadString);
        };
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