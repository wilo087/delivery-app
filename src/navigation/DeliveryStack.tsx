import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OrdersContainer from '@containers/Delivery/Orders'
import DeliveryProfileContainer from '@containers/Delivery/Profile'

const Stack = createStackNavigator()

const DeliveryStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen name="Orders" component={OrdersContainer} />
      <Stack.Screen name="Profile" component={DeliveryProfileContainer} />
    </Stack.Navigator>
  )
}

export default DeliveryStack
