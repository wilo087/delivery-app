import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginContainer from '@containers/Login/LoginContainer'
import CustomerStack from './CustomerStack'
import DeliveryStack from './DeliveryStack'
import { AuthContext } from '@contexts/AuthContext'

const Stack = createStackNavigator()

const RootStack: React.FC = () => {
  const { customer, delivery } = useContext(AuthContext)

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{ headerShown: false }}
      />

      {customer && (
        <Stack.Screen
          name="Customer"
          component={CustomerStack}
          options={{ headerShown: false }}
        />
      )}

      {delivery && (
        <Stack.Screen
          name="Delivery"
          component={DeliveryStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  )
}

export default RootStack
