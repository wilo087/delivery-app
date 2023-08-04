import React, { createContext, useState } from 'react'
import { User, AuthContextData } from '@types'

export const AuthContext = createContext<AuthContextData>({
  customer: null,
  delivery: null,
  login: () => {},
  logoutCustomer: () => {},
  logoutDelivery: () => {},
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [customer, setCustomer] = useState<User | null>(null)
  const [delivery, setDelivery] = useState<User | null>(null)

  const login = (role: 'customer' | 'delivery', user: User) => {
    if (role === 'customer') {
      setCustomer(user)
    } else if (role === 'delivery') {
      setDelivery(user)
    }
  }

  const logoutCustomer = () => {
    setCustomer(null)
  }

  const logoutDelivery = () => {
    setDelivery(null)
  }

  return (
    <AuthContext.Provider
      value={{ customer, delivery, login, logoutCustomer, logoutDelivery }}>
      {children}
    </AuthContext.Provider>
  )
}
