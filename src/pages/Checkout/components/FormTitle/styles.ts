import styled from 'styled-components'

interface IFormTitle {
  iconColor: string
}

export const FormTitleContainer = styled.div<IFormTitle>`
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.iconColor};
  }

  h5 {
    font-weight: 400;
    color: ${(props) => props.theme['--base---subtitle']};
    font-size: ${(props) => props.theme['--text---regular--m']};
  }

  p {
    color: ${(props) => props.theme['--base---text']};
    font-size: ${(props) => props.theme['--text---regular--s']};
  }
`
