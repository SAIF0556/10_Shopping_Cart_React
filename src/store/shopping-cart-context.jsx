import { createContext } from 'react'

export const CartContext = createContext({
  items: [],
  addItem: () => {},
  updatedItem: () => {},
})

export default function CartContextProvider({ children }) {}
