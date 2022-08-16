import {
  ConfirmationOrderContainer,
  TotalAmountContainer,
  TotalItensAmountContainer,
} from './styles'

interface IConfirmationOrderProps {
  cartItensTotalAmount: string
  deliveryTax: string
  cartTotalAmount: string
}

export function ConfirmationOrder(props: IConfirmationOrderProps) {
  const { cartItensTotalAmount, deliveryTax, cartTotalAmount } = props
  return (
    <ConfirmationOrderContainer>
      <TotalItensAmountContainer>
        <span>Total de itens</span>
        <span>R$ {cartItensTotalAmount}</span>
      </TotalItensAmountContainer>
      <TotalItensAmountContainer>
        <span>Entrega</span>
        <span>R$ {deliveryTax}</span>
      </TotalItensAmountContainer>
      <TotalAmountContainer>
        <span>Total</span>
        <span>R$ {cartTotalAmount}</span>
      </TotalAmountContainer>
    </ConfirmationOrderContainer>
  )
}
