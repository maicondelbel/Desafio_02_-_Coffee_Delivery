import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { Input } from '../../components/Input'
import { LayoutContainer } from '../../layouts/styles'
import { CartItem } from './components/CartItem'
import { SeparatorContainer } from './components/CartItem/styles'
import { ConfirmationOrder } from './components/ConfirmationOrder'

import { CartItemsContext, ICartItems } from './../../contexts/CartItemsContext'
import { FormTitle } from './components/FormTitle'
import {
  CheckoutContainer,
  BillingFormContainer,
  LeftSideContainer,
  PaymentContainer,
  RightSideContainer,
  BillingFormInputContainer,
  PaymentMethodWrapper,
  PageContentContainer,
  CartItensContainer,
  PlaceOrderButtonContainer,
  ErrorBoxContainer,
} from './styles'
import { useContext } from 'react'
import { CurrencyFormat } from './../../utils/CurrencyFormat'
import { useForm } from 'react-hook-form'
import { PaymentInput } from './components/PaymentInput'
import { useNavigate } from 'react-router-dom'

export interface IBillingData {
  cep: string
  city: string
  complement: string | undefined
  neighborhood: string
  number: string
  payment: 'credit' | 'debit' | 'money'
  state: string
  street: string
}

export interface IOrder {
  cartItems: ICartItems[]
  billingInfo: IBillingData
}

const deliveryTax = 3.5

export function Checkout() {
  const {
    cartItems,
    numbersOfItensOnCart,
    cartTotalAmount,
    clearCart,
    placeOrder,
  } = useContext(CartItemsContext)

  const theme = useTheme()

  const checkoutForm = useForm<IBillingData>()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = checkoutForm

  function handlePlaceOrder(data: IBillingData) {
    const newOrder: IOrder = { billingInfo: data, cartItems }
    placeOrder(newOrder)
    reset()
    clearCart()
    navigate('/order-complete')
  }

  return (
    <CheckoutContainer>
      <LayoutContainer>
        <form onSubmit={handleSubmit(handlePlaceOrder)}>
          <PageContentContainer>
            <LeftSideContainer>
              <h3>Complete seu pedido</h3>
              <BillingFormContainer>
                <FormTitle
                  icon={<MapPinLine size={22} />}
                  title={'Endereço de Entrega'}
                  description={
                    'Informe o endereço onde deseja receber seu pedido'
                  }
                  iconColor={theme['--brand---yellow--dark']}
                />
                <BillingFormInputContainer>
                  <div className="form-line">
                    <Input
                      type="text"
                      placeholder="CEP"
                      className="cep"
                      {...register('cep', { required: true })}
                      hasError={!!errors.cep}
                    />
                  </div>
                  <div className="form-line">
                    <Input
                      placeholder="Rua"
                      {...register('street', { required: true })}
                      hasError={!!errors.street}
                    />
                  </div>
                  <div className="form-line">
                    <Input
                      placeholder="Número"
                      className="number"
                      {...register('number', { required: true })}
                      hasError={!!errors.number}
                    />
                    <div className="optional-field">
                      <Input
                        placeholder="Complemento"
                        {...register('complement')}
                      />
                      <span>Opcional</span>
                    </div>
                  </div>
                  <div className="form-line">
                    <Input
                      placeholder="Bairro"
                      {...register('neighborhood', { required: true })}
                      hasError={!!errors.neighborhood}
                    />
                    <Input
                      placeholder="Cidade"
                      {...register('city', { required: true })}
                      hasError={!!errors.city}
                    />
                    <Input
                      placeholder="UF"
                      className="uf"
                      {...register('state', { required: true })}
                      hasError={!!errors.state}
                    />
                  </div>
                </BillingFormInputContainer>
                <ErrorBoxContainer>
                  {errors.cep && <small>CEP é obrigatório</small>}
                  {errors.street && <small>Rua é obrigatório</small>}
                  {errors.number && <small>Número é obrigatório</small>}
                  {errors.neighborhood && <small>Bairro é obrigatório</small>}
                  {errors.city && <small>Cidade é obrigatório</small>}
                  {errors.state && <small>UF é obrigatório</small>}
                </ErrorBoxContainer>
              </BillingFormContainer>
              <PaymentContainer>
                <FormTitle
                  icon={<CurrencyDollarSimple size={22} />}
                  title={'Pagamento'}
                  description={
                    'O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                  }
                  iconColor={theme['--brand---purple']}
                />
                <PaymentMethodWrapper>
                  <PaymentInput
                    type={'radio'}
                    id={'credit'}
                    value={'credit'}
                    label={'Cartão de Crédito'}
                    icon={<CreditCard size={16} />}
                    hasError={!!errors.payment}
                    {...register('payment', { required: true })}
                  />
                  <PaymentInput
                    type={'radio'}
                    id={'debit'}
                    value={'debit'}
                    label={'Cartão de Débito'}
                    icon={<Bank size={16} />}
                    hasError={!!errors.payment}
                    {...register('payment', { required: true })}
                  />
                  <PaymentInput
                    type={'radio'}
                    id={'money'}
                    value={'money'}
                    label={'Dinheiro'}
                    icon={<Money size={16} />}
                    hasError={!!errors.payment}
                    {...register('payment', { required: true })}
                  />
                </PaymentMethodWrapper>
                <ErrorBoxContainer>
                  {errors.payment && (
                    <small>Escolha uma forma de Pagamento</small>
                  )}
                </ErrorBoxContainer>
              </PaymentContainer>
            </LeftSideContainer>
            <RightSideContainer>
              <h3>Cafés selecionados</h3>
              <CartItensContainer>
                {cartItems.map((cartItem) => {
                  return <CartItem key={cartItem.id} item={cartItem} />
                })}
                <SeparatorContainer />
                <ConfirmationOrder
                  deliveryTax={CurrencyFormat(deliveryTax)}
                  cartItensTotalAmount={CurrencyFormat(cartTotalAmount)}
                  cartTotalAmount={CurrencyFormat(
                    cartTotalAmount + deliveryTax,
                  )}
                />
                <PlaceOrderButtonContainer
                  disabled={!numbersOfItensOnCart}
                  type="submit"
                >
                  Confirmar Pedido
                </PlaceOrderButtonContainer>
              </CartItensContainer>
            </RightSideContainer>
          </PageContentContainer>
        </form>
      </LayoutContainer>
    </CheckoutContainer>
  )
}
