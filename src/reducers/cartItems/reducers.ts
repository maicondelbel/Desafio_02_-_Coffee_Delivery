import { ICartItems } from '../../contexts/CartItemsContext'
import { ActionsTypes } from './actions'

export function cartItemsReducer(state: ICartItems[], action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_ITEM_TO_CART: {
      const itemExistsOnCart = state.find((cartItem) => {
        return cartItem.id === action.payload.selectedCartItem.id
      })
      if (itemExistsOnCart) {
        return state.map((cartItem) => {
          if (cartItem.id === action.payload.selectedCartItem.id) {
            return {
              ...cartItem,
              quantity:
                cartItem.quantity + action.payload.selectedCartItem.quantity,
            }
          }
          return cartItem
        })
      } else {
        return [...state, action.payload.selectedCartItem]
      }
    }

    case ActionsTypes.REMOVE_ITEM_FROM_CART: {
      const newCartItems = state.filter((cartItem) => {
        return cartItem.id !== action.payload.itemId
      })
      return newCartItems
    }

    case ActionsTypes.DECREASE_CART_ITEM_QUANTITY: {
      const newCartItems = state.map((cartItem) => {
        if (cartItem.id === action.payload.itemId) {
          if (cartItem.quantity > 1) {
            return { ...cartItem, quantity: cartItem.quantity - 1 }
          }
        }
        return cartItem
      })
      return newCartItems
    }

    case ActionsTypes.INCREASE_CART_ITEM_QUANTITY: {
      const newCartItems = state.map((cartItem) => {
        if (cartItem.id === action.payload.itemId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      return newCartItems
    }

    case ActionsTypes.CLEAR_CART: {
      return []
    }

    default:
      return state
  }
}
