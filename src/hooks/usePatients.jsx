import React, { useState, useEffect } from 'react'
import axios from 'axios'
const usePatients = () => {

  const [patientsData, setPatientsData] = useState()

  const getPatients = async () => {
    const response = await axios('http://172.20.10.2:3000/patient')
    console.log(response.data.data)
    setPatientsData(response.data.data)
  }

  useEffect(() => {
    getPatients()
  }, [])

  return {
    patientsData,
    getPatients
  }
}

export default usePatients