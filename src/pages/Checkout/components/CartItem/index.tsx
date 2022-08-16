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
}

export function CartItem({ item }: ICartItemProps) {
  const { removeItemFromCart, decreaseQuantityOnCart, increaseQuantityOnCart } =
    useContext(CartItemsContext)

  function handleRemoveCartItem() {
    removeItemFromCart(item.id)
  }

  function handleDecreaseQuantityOnCart() {
    decreaseQuantityOnCart(item.id)
  }

  function handleIncreaseQuantityOnCart() {
    increaseQuantityOnCart(item.id)
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
