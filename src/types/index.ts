export interface User {
  id: string
  name: string
  email: string
}

export interface AuthContextData {
  customer: User | null
  delivery: User | null
  login: (role: 'customer' | 'delivery', user: User) => void
  logoutCustomer: () => void
  logoutDelivery: () => void
}

export interface Product {
  id: string
  name: string
  price: number
}

export interface Cart {
  user: User
  products: Product[]
  total: number
}
