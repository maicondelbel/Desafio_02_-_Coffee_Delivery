import { Quantity } from '../../../../components/Quantity'
import {
  CartItemEndContainer,
  CartItemMiddleContainer,
  CartItemStartContainer,
  CartItemWrapperContainer,
} from './styles'
import { Trash } from 'phosphor-react'
import {
  CartItemsContext,
  ICartItems,
} from '../../../../contexts/CartItemsContext'
import { CurrencyFormat } from './../../../../utils/CurrencyFormat'
import { useContext } from 'react'

export interface ICartItemProps {
  item: ICartItems
  size?: 'normal' | 'small'
}

export function CartItem({ item, size }: ICartItemProps) {
  const {
    removeItemFromCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  } = useContext(CartItemsContext)

  function handleRemoveCartItem() {
    removeItemFromCart(item.id)
  }

  function handleDecreaseQuantityOnCart() {
    decreaseCartItemQuantity(item.id)
  }

  function handleIncreaseQuantityOnCart() {
    increaseCartItemQuantity(item.id)
  }

  return (
    <CartItemWrapperContainer>
      <CartItemStartContainer>
        <img src={item.image} alt="" />
      </CartItemStartContainer>
      <CartItemMiddleContainer>
        <span>{item.name}</span>
        <div>
          <Quantity
            size={size}
            quantity={item.quantity}
            decrementValue={handleDecreaseQuantityOnCart}
            incrementValue={handleIncreaseQuantityOnCart}
          />
          <button type="button" onClick={handleRemoveCartItem}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CartItemMiddleContainer>
      <CartItemEndContainer>
        <span>R$ {CurrencyFormat(item.price)}</span>
      </CartItemEndContainer>
    </CartItemWrapperContainer>
  )
}
