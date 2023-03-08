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
  item: ICoffee
}

export function CoffeeCard({ item }: ICoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addItemToCart } = useContext(CartItemsContext)

  function handleAddToCart() {
    const itemToAdd = { ...item, quantity }
    addItemToCart(itemToAdd)
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
      <div>
        <img src={item.image} alt="" />
        <CoffeeTagWrapperContent>
          {item.tags.map((tag) => {
            return <CoffeeTagContent key={tag}>{tag}</CoffeeTagContent>
          })}
        </CoffeeTagWrapperContent>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <CoffeeActionsContent>
          <CoffeeActionsStartContent>
            <span>{CurrencyFormat(item.price)}</span>
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
      </div>
    </CoffeeCardContent>
  )
}
