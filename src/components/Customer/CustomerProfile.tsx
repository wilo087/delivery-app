import React from 'react'
import { View, Text, Button } from 'react-native'

interface ProfileComponentProps {
  user: {
    name: string
    email: string
  }
  onLogout: () => void
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({
  user,
  onLogout,
}) => {
  return (
    <View>
      <Text>Bienvenido, {user.name}</Text>
      <Text>Email: {user.email}</Text>
      {/* Aquí podrías agregar más información sobre el usuario. */}
      <Button title="Cerrar sesión" onPress={onLogout} />
    </View>
  )
}

export default ProfileComponent
