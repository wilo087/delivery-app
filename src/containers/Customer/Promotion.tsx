import React, { useState } from 'react'
import PromotionCustomerComponent from '@components/Customer/Promotions'

const CustomerAuthContainer: React.FC = () => {
  const [isLoggedIn, _] = useState(false)
  // Logic to get promotions

  if (isLoggedIn) {
    console.log('isLoggedIn', isLoggedIn)
  }

  return <PromotionCustomerComponent />
}

export default CustomerAuthContainer
