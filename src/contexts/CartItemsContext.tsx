import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { ICoffee } from '../components/CoffeeCard'
import { IOrder } from '../pages/Checkout'
import {
  addItemToCartAction,
  clearCartAction,
  decreaseCartItemQuantityAction,
  increaseCartItemQuantityAction,
  removeItemFromCartAction,
} from '../reducers/cartItems/actions'
import { cartItemsReducer } from '../reducers/cartItems/reducers'

export interface ICartItems extends ICoffee {
  quantity: number
}

interface ICartItemsContext {
  numbersOfItensOnCart: number
  cartItems: ICartItems[]
  cartTotalAmount: number
  order: IOrder | null
  clearCart: () => void
  addItemToCart: (selectedCartItem: ICartItems) => void
  removeItemFromCart: (itemId: number) => void
  decreaseCartItemQuantity: (itemId: number) => void
  increaseCartItemQuantity: (itemId: number) => void
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

  const [cartItems, dispatch] = useReducer(
    cartItemsReducer,
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

  function addItemToCart(selectedCartItem: ICartItems) {
    dispatch(addItemToCartAction(selectedCartItem))
  }

  function removeItemFromCart(itemId: number) {
    dispatch(removeItemFromCartAction(itemId))
  }

  function decreaseCartItemQuantity(itemId: number) {
    dispatch(decreaseCartItemQuantityAction(itemId))
  }

  function increaseCartItemQuantity(itemId: number) {
    dispatch(increaseCartItemQuantityAction(itemId))
  }

  function clearCart() {
    dispatch(clearCartAction())
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
        decreaseCartItemQuantity,
        increaseCartItemQuantity,
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
