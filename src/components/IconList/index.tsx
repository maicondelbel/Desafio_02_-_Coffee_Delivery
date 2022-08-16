import { ReactNode } from 'react'
import { IconContainer, IconListItemContainer, TextContainer } from './styles'

interface IIconListProps {
  title: ReactNode
  icon: ReactNode
  bgColor: string
  subtitle?: ReactNode
}

export function IconList({ title, subtitle, icon, bgColor }: IIconListProps) {
  return (
    <IconListItemContainer>
      <IconContainer bgColor={bgColor}>{icon}</IconContainer>
      <TextContainer>
        {title} {subtitle}
      </TextContainer>
    </IconListItemContainer>
  )
}
