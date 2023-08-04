// /src/components/Login/LoginComponent.tsx
import React from 'react'
import { Button, View } from 'react-native'

interface LoginComponentProps {
  onLoginCustomer: () => void
  onLoginDelivery: () => void
}

const LoginComponent: React.FC<LoginComponentProps> = ({
  onLoginCustomer,
  onLoginDelivery,
}) => {
  return (
    <View>
      <Button title="Iniciar sesión como cliente" onPress={onLoginCustomer} />
      <Button title="Iniciar sesión como delivery" onPress={onLoginDelivery} />
    </View>
  )
}

export default LoginComponent
