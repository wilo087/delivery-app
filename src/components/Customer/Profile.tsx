import React from 'react'
import { View, Text, Button } from 'react-native'
import { ProfileComponentProps } from '@types'

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  user,
  onLogout,
}) => {
  return (
    <View>
      <Text>Bienvenido, {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  )
}

export default ProfileComponent
