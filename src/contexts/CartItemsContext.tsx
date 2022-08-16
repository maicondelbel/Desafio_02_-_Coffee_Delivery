import { createContext, ReactNode, useEffect, useState } from 'react'
import { ICoffee } from '../components/CoffeeCard'
import { IOrder } from '../pages/Checkout'

export interface ICartItems extends ICoffee {
  quantity: number
}

interface ICartItemsContext {
  numbersOfItensOnCart: number
  cartItems: ICartItems[]
  cartTotalAmount: number
  order: IOrder | null
  clearCart: () => void
  addItemToCart: (coffee: ICartItems) => void
  removeItemFromCart: (itemId: number) => void
  decreaseQuantityOnCart: (itemId: number) => void
  increaseQuantityOnCart: (itemId: number) => void
  placeOrder: (order: IOrder) => void
}

interface ICartItemsProviderProps {
  children: ReactNode
}

export const CartItemsContext = createContext({} as ICartItemsContext)

export function CartItemsContextProvider({
  children,
}: ICartItemsProviderProps) {
  function getCartItemsFromLocalStorage(): ICartItems[] {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-coffee-delivery:cart-items-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return []
  }

  const [cartItems, setCartItems] = useState<ICartItems[]>(
    getCartItemsFromLocalStorage(),
  )
  const [order, setOrder] = useState<IOrder | null>(null)

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItems)
    localStorage.setItem('@ignite-coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItems])

  const numbersOfItensOnCart = cartItems.length

  const cartTotalAmount = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  function addItemToCart(coffee: ICartItems) {
    const itemExistsOnCart = cartItems.find((cartItem) => {
      return cartItem.id === coffee.id
    })

    if (itemExistsOnCart) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === coffee.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + coffee.quantity,
            }
          }
          return cartItem
        }),
      )
    } else {
      setCartItems((state) => [...state, coffee])
    }
  }

  function removeItemFromCart(itemId: number) {
    const newCartItems = cartItems.filter((cartItem) => {
      return cartItem.id !== itemId
    })

    setCartItems(newCartItems)
  }

  function decreaseQuantityOnCart(itemId: number) {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        if (cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
      }
      return cartItem
    })

    setCartItems(newCartItems)
  }

  function increaseQuantityOnCart(itemId: number) {
    const newCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === itemId) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })

    setCartItems(newCartItems)
  }

  function clearCart() {
    setCartItems([])
  }

  function placeOrder(placeOrderData: IOrder) {
    setOrder(placeOrderData)
  }

  return (
    <CartItemsContext.Provider
      value={{
        addItemToCart,
        cartItems,
        numbersOfItensOnCart,
        removeItemFromCart,
        decreaseQuantityOnCart,
        increaseQuantityOnCart,
        cartTotalAmount,
        clearCart,
        placeOrder,
        order,
      }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
