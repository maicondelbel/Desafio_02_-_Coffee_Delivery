import { ReactNode } from 'react'
import { FormTitleContainer } from './styles'

interface IFormTitle {
  title: string
  description: string
  icon: ReactNode
  iconColor: string
}

export function FormTitle(props: IFormTitle) {
  const { title, description, icon, iconColor } = props
  return (
    <FormTitleContainer iconColor={iconColor}>
      {icon}
      <div>
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </FormTitleContainer>
  )
}
