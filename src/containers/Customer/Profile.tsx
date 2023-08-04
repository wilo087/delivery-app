import React, { useState } from 'react'
import PromotionCustomerComponent from '@components/Customer/Promotions'

const CustomerProfileContainer: React.FC = () => {
  const [isLoggedIn, _] = useState(false)
  // Logica para obtener la data del perfil

  if (isLoggedIn) {
    console.log('isLoggedIn', isLoggedIn)
  }

  return <PromotionCustomerComponent />
}

export default CustomerProfileContainer
