import React, { useContext } from 'react'
import { AuthContext } from 'src/contexts/AuthContext'
import LoginComponent from '@components/Login/LoginComponent'

const LoginContainer: React.FC = () => {
  const { login } = useContext(AuthContext)

  const handleLoginCustomer = () => {
    const user = {
      id: '1',
      name: 'Nombre del cliente',
      email: 'cliente@billet.com',
    }

    login('customer', user)
  }

  const handleLoginDelivery = () => {
    const user = {
      id: '1',
      name: 'Nombre del delivery',
      email: 'delivery@billet.com',
    }

    login('delivery', user)
  }

  return (
    <LoginComponent
      onLoginCustomer={handleLoginCustomer}
      onLoginDelivery={handleLoginDelivery}
    />
  )
}

export default LoginContainer
