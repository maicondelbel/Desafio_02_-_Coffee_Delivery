import { LayoutContainer } from '../../layouts/styles'
import {
  DeliveryInfoBoxContainer,
  LeftSideContainer,
  OrderCompleteContainer,
  PageContentContainer,
  RightSideContainer,
} from './styles'

import deliveryImage from '../../assets/delivery-image.png'
import { ShoppingCart, Package, Timer } from 'phosphor-react'
import { IconList } from '../../components/IconList'
import { useTheme } from 'styled-components'
import { useContext, useEffect } from 'react'
import { CartItemsContext } from '../../contexts/CartItemsContext'
import { useNavigate } from 'react-router-dom'

export function OrderComplete() {
  const { order } = useContext(CartItemsContext)
  const theme = useTheme()
  const navigate = useNavigate()

  useEffect(() => {
    if (!order) {
      navigate('/')
    }
  }, [navigate, order])

  const PAYMENT_METHOD = {
    debit: 'Cartão de Débito',
    credit: 'Cartão de Crédito',
    money: 'Dinheiro',
  }

  if (!order) return

  return (
    <OrderCompleteContainer>
      <LayoutContainer>
        <PageContentContainer>
          <LeftSideContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
            <DeliveryInfoBoxContainer>
              <IconList
                bgColor={theme['--brand---yellow--dark']}
                icon={<ShoppingCart size={16} weight="fill" />}
                title={
                  <span>
                    Entrega em{' '}
                    <strong>{`${order.billingInfo.street}, ${order.billingInfo.number}`}</strong>
                  </span>
                }
                subtitle={
                  <span>{`${order.billingInfo.neighborhood} - ${order.billingInfo.city}, ${order.billingInfo.state}`}</span>
                }
              />
              <IconList
                bgColor={theme['--base---text']}
                icon={<Package size={16} weight="fill" />}
                title={<span>Previsão de entrega</span>}
                subtitle={
                  <span>
                    <strong>20 min - 30 min</strong>
                  </span>
                }
              />
              <IconList
                bgColor={theme['--brand---yellow']}
                icon={<Timer size={16} weight="fill" />}
                title={<span>Pagamento na entrega</span>}
                subtitle={
                  <span>
                    <strong>{PAYMENT_METHOD[order.billingInfo.payment]}</strong>
                  </span>
                }
              />
            </DeliveryInfoBoxContainer>
          </LeftSideContainer>
          <RightSideContainer>
            <img src={deliveryImage} alt="" />
          </RightSideContainer>
        </PageContentContainer>
      </LayoutContainer>
    </OrderCompleteContainer>
  )
}
