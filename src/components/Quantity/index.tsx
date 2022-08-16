import { Minus, Plus } from 'phosphor-react'
import { QuantityContainer } from './styles'

interface IQuantityProps {
  quantity: number
  decrementValue: () => void
  incrementValue: () => void
}

export function Quantity({
  quantity,
  decrementValue,
  incrementValue,
}: IQuantityProps) {
  return (
    <QuantityContainer>
      <button type="button" onClick={decrementValue}>
        <Minus size={14} weight="fill" />
      </button>
      <input type="number" value={quantity} readOnly={true} />
      <button type="button" onClick={incrementValue}>
        <Plus size={14} weight="fill" />
      </button>
    </QuantityContainer>
  )
}
