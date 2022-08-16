import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentInputContainer, PaymentLabelContainer } from './styles'

interface IPaymentInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
  icon: ReactNode
  label: string
}

export const PaymentInput = forwardRef<HTMLInputElement, IPaymentInputProps>(
  ({ hasError = false, label, id, icon, ...props }, ref) => {
    return (
      <>
        <PaymentInputContainer
          type="radio"
          {...props}
          hasError={hasError}
          ref={ref}
          id={id}
        />
        <PaymentLabelContainer htmlFor={id}>
          {icon}
          {label}
        </PaymentLabelContainer>
      </>
    )
  },
)
PaymentInput.displayName = 'PaymentInput'
