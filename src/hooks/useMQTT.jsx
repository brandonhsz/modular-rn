import React, { useState, useEffect } from 'react'
import { useStore } from '../store/store'
import Paho from 'paho-mqtt';

const useMQTT = () => {

  const [connectStatus, setConnectStatus] = useState(false);
  const [data, setData] = useState({})
  const options = {
    host: '172.20.10.2',
    port: 8083,
    path: '/sensores',
    id: 'id_' + 'BrandonIphone'
  };

  const client = new Paho.Client(options.host, Number(options.port), options.id);

  useEffect(() => {
    connect()
  }, [])

  useEffect(() => {
    console.log(`desde hook:${data}`)
  }, [data])

  const connect = () => {
    client.connect({
      onSuccess: () => {
        console.log('connected to mqtt server');
        setConnectStatus(true);
        client.subscribe('sensores');
        console.log('subscribed to topic');
        client.onMessageArrived = (message) => {
          console.log('message arrived', message.payloadString);
          setData(JSON.parse(message.payloadString))
          console.log(data.temp);
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
    data
  }
}

export default useMQTT