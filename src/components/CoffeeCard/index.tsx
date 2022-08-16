import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CurrencyFormat } from '../../utils/CurrencyFormat'
import { Quantity } from '../Quantity'
import { CartItemsContext } from './../../contexts/CartItemsContext'
import {
  AddToCartButtonContainer,
  CoffeeActionsContent,
  CoffeeActionsEndContent,
  CoffeeActionsStartContent,
  CoffeeCardContent,
  CoffeeTagContent,
  CoffeeTagWrapperContent,
} from './style'

export interface ICoffee {
  id: number
  tags: string[]
  name: string
  description: string
  image: string
  price: number
}

interface ICoffeeProps {
  coffee: ICoffee
}

export function CoffeeCard({ coffee }: ICoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart } = useContext(CartItemsContext)

  function handleAddToCart() {
    const novo = { ...coffee, quantity }
    addItemToCart(novo)
  }

  function handleDecrementValue() {
    setQuantity((state) => {
      return state <= 1 ? 1 : state - 1
    })
  }

  function handleIncrementValue() {
    setQuantity((state) => state + 1)
  }

  return (
    <CoffeeCardContent>
      <img src={coffee.image} alt="" />
      <CoffeeTagWrapperContent>
        {coffee.tags.map((tag) => {
          return <CoffeeTagContent key={tag}>{tag}</CoffeeTagContent>
        })}
      </CoffeeTagWrapperContent>
      <h5>{coffee.name}</h5>
      <p>{coffee.description}</p>
      <CoffeeActionsContent>
        <CoffeeActionsStartContent>
          <span>{CurrencyFormat(coffee.price)}</span>
        </CoffeeActionsStartContent>
        <CoffeeActionsEndContent>
          <Quantity
            decrementValue={handleDecrementValue}
            incrementValue={handleIncrementValue}
            quantity={quantity}
          />
          <AddToCartButtonContainer onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </AddToCartButtonContainer>
        </CoffeeActionsEndContent>
      </CoffeeActionsContent>
    </CoffeeCardContent>
  )
}
