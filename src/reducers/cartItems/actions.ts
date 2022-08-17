import { ICartItems } from '../../contexts/CartItemsContext'

/* eslint-disable no-unused-vars */
export enum ActionsTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  DECREASE_CART_ITEM_QUANTITY = 'DECREASE_CART_ITEM_QUANTITY',
  INCREASE_CART_ITEM_QUANTITY = 'INCREASE_CART_ITEM_QUANTITY',
  CLEAR_CART = 'CLEAR_CART',
}

export function addItemToCartAction(selectedCartItem: ICartItems) {
  return {
    type: ActionsTypes.ADD_ITEM_TO_CART,
    payload: {
      selectedCartItem,
    },
  }
}

export function removeItemFromCartAction(itemId: number) {
  return {
    type: ActionsTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      itemId,
    },
  }
}

export function decreaseCartItemQuantityAction(itemId: number) {
  return {
    type: ActionsTypes.DECREASE_CART_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function increaseCartItemQuantityAction(itemId: number) {
  return {
    type: ActionsTypes.INCREASE_CART_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  }
}

export function clearCartAction() {
  return {
    type: ActionsTypes.CLEAR_CART,
  }
}
