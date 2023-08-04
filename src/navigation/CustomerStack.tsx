import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CartContainer from '@containers/Customer/Cart'
import ProfileContainer from '@containers/Customer/Profile'
import PromotionsContainer from '@containers/Customer/Promotions'

const Stack = createStackNavigator()

const CustomerStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Cart" component={CartContainer} />
      <Stack.Screen name="Profile" component={ProfileContainer} />
      <Stack.Screen name="Promotions" component={PromotionsContainer} />
    </Stack.Navigator>
  )
}

export default CustomerStack
