import React from 'react'
import { Button, TextInput, View } from 'react-native'

interface CustomerAuthenticationProps {
  email: string
  password: string
  onEmailChange: (newEmail: string) => void
  onPasswordChange: (newPassword: string) => void
  onLogin: () => void
}

const CustomerAuthentication: React.FC<CustomerAuthenticationProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onLogin,
}) => {
  return (
    <View>
      <TextInput
        value={email}
        onChangeText={onEmailChange}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress" // allow autofill in iOS
      />

      <TextInput
        value={password}
        onChangeText={onPasswordChange}
        placeholder="Password"
        secureTextEntry // acá habría que agregar la logica para mostrar u ocultar el password
      />

      <Button title="Login" onPress={onLogin} />
    </View>
  )
}

export default CustomerAuthentication
