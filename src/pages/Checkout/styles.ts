import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  margin: 2rem 0;
`
export const PageContentContainer = styled.main`
  display: flex;
  column-gap: 2rem;
  row-gap: 3.5rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const LeftSideContainer = styled.div`
  flex: 1 40rem;
  max-width: 40rem;

  > h3 {
    color: ${(props) => props.theme['--base---subtitle']};
    font-size: ${(props) => props.theme['--title---title--x-s']};
    font-family: ${(props) => props.theme['--font---title']};
  }
`

export const RightSideContainer = styled.div`
  flex: 1;
  min-width: 21rem;

  > h3 {
    color: ${(props) => props.theme['--base---subtitle']};
    font-size: ${(props) => props.theme['--title---title--x-s']};
    font-family: ${(props) => props.theme['--font---title']};
  }
`

export const CartItensContainer = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme['--base---card']};
  padding: 2.5rem;
  border-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;

  p {
    text-align: center;
    color: ${(props) => props.theme['--base---text']};
    font-size: ${(props) => props.theme['--text---regular--s']};
  }
`

export const BillingFormContainer = styled.div`
  margin-top: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['--base---card']};
`

export const PaymentContainer = styled.div`
  border-radius: 6px;
  margin-top: 0.75rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['--base---card']};
`

export const PaymentMethodWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: ${(props) => props.theme['--brand---purple--light']};
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--brand---purple']};
  }

  label {
    border-radius: 6px;
    background-color: ${(props) => props.theme['--base---button']};
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${(props) => props.theme['--base---text']};
    font-size: ${(props) => props.theme['--components---button--s']};
    text-transform: uppercase;
    cursor: pointer;
  }

  label:hover {
    background-color: ${(props) => props.theme['--base---hover']};
  }

  svg {
    color: ${(props) => props.theme['--brand---purple']};
  }
`

export const ErrorBoxContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;

  small {
    color: red;
    font-size: 0.7rem;
    font-style: italic;
  }
`

export const BillingFormInputContainer = styled.div`
  display: grid;
  flex-direction: row;
  column-gap: 0.75rem;
  row-gap: 1rem;
  margin-top: 2rem;

  .optional-field {
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: end;
  }
  .optional-field > input {
    padding-right: 4.375rem;
  }

  .optional-field span {
    position: absolute;
    color: ${(props) => props.theme['--base---label']};
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
  }

  .form-line {
    display: flex;
    column-gap: 0.75rem;
  }

  .cep,
  .number,
  .neighborhood {
    width: 12.5rem;
  }

  .city {
    flex: 1;
  }

  .uf {
    width: 3.75rem;
  }

  @media (max-width: 992px) {
    .form-line {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .form-line input {
      width: 100%;
    }
  }
`

export const PlaceOrderButtonContainer = styled.button`
  text-transform: uppercase;
  height: 3rem;
  margin-top: 1.5rem;
  width: 100%;
  font-weight: bold;
  font-size: ${(props) => props.theme['--components---button--g']};
  background-color: ${(props) => props.theme['--brand---yellow']};
  color: ${(props) => props.theme['--base---white']};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['--brand---yellow--dark']};
  }
`
