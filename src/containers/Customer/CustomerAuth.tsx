import React, { useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import CustomerAuth from '@components/Customer/CustomerAuth'
import CustomerProfile from '@components/Customer/CustomerProfile'
import apiService from '@services/aws-api'

interface LoginResponse {
  token: string
}

const CustomerAuthContainer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = async () => {
    try {
      const data = (await apiService.request('/login', {
        method: 'POST',
        body: { email, password },
      })) as LoginResponse

      if (data && data.token) {
        await AsyncStorage.setItem('token', data.token)
        setIsLoggedIn(true)
      } else {
        console.log('No se pudo iniciar sesión')
      }
    } catch (error) {
      console.log('Error al realizar el request')
    }
  }

  if (isLoggedIn) {
    return <CustomerProfile />
  }

  return (
    <CustomerAuth
      email={email}
      password={password}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      onLogin={handleLogin}
    />
  )
}

export default CustomerAuthContainer
