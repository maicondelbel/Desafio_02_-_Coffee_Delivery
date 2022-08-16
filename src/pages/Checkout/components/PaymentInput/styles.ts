import styled, { css } from 'styled-components'

interface IPaymentInputContainer {
  hasError: boolean
}

const PaymentInputWithError = css`
  box-shadow: 0 0 0 2px red;
`

export const PaymentInputContainer = styled.input<IPaymentInputContainer>`
  display: none;

  & + label {
    ${(props) => (props.hasError ? PaymentInputWithError : '')};
  }

  &:checked + label {
    background-color: ${(props) => props.theme['--brand---purple--light']};
    outline: transparent;
    box-shadow: 0 0 0 2px ${(props) => props.theme['--brand---purple']};
  }
`
export const PaymentLabelContainer = styled.label`
  border-radius: 6px;
  background-color: ${(props) => props.theme['--base---button']};
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${(props) => props.theme['--base---text']};
  font-size: ${(props) => props.theme['--components---button--s']};
  text-transform: uppercase;
  width: 11rem;
  cursor: pointer;

  & svg {
    color: ${(props) => props.theme['--brand---purple']};
  }

  &:hover {
    background-color: ${(props) => props.theme['--base---hover']};
  }
`
