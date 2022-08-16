import styled from 'styled-components'

export const IconListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`
interface IIconContainer {
  bgColor: string
}

export const IconContainer = styled.div<IIconContainer>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  min-width: 2rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  color: ${(props) => props.theme['--base---white']};
`

export const TextContainer = styled.div`
  span {
    display: block;
    font-size: ${(props) => props.theme['--text---regular--m']};
    color: ${(props) => props.theme['--base---text']};
  }
`
