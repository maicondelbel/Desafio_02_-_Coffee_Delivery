import { ICartItems } from '../../contexts/CartItemsContext'
import { ActionsTypes } from './actions'

import { produce } from 'immer'

export function cartItemsReducer(state: ICartItems[], action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_ITEM_TO_CART: {
      return produce(state, (draft) => {
        const cartItemExists = state.findIndex((cartItem) => {
          return cartItem.id === action.payload.selectedCartItem.id
        })
        if (cartItemExists >= 0) {
          draft[cartItemExists].quantity +=
            action.payload.selectedCartItem.quantity
        } else {
          draft.push(action.payload.selectedCartItem)
        }
      })
    }

    case ActionsTypes.REMOVE_ITEM_FROM_CART: {
      return produce(state, (draft) => {
        const cartItemExists = state.findIndex((cartItem) => {
          return cartItem.id === action.payload.itemId
        })
        if (cartItemExists >= 0) {
          draft.splice(cartItemExists, 1)
        }
      })
    }

    case ActionsTypes.DECREASE_CART_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const cartItemExists = state.findIndex((cartItem) => {
          return cartItem.id === action.payload.itemId
        })
        if (cartItemExists >= 0) {
          if (draft[cartItemExists].quantity > 1) {
            draft[cartItemExists].quantity -= 1
          }
        }
      })
    }

    case ActionsTypes.INCREASE_CART_ITEM_QUANTITY: {
      return produce(state, (draft) => {
        const cartItemExists = state.findIndex((cartItem) => {
          return cartItem.id === action.payload.itemId
        })
        if (cartItemExists >= 0) {
          draft[cartItemExists].quantity += 1
        }
      })
    }

    case ActionsTypes.CLEAR_CART: {
      return []
    }

    default:
      return state
  }
}
