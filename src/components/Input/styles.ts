import styled, { css } from 'styled-components'

interface IInputContainer {
  hasError: boolean
}

const InputWithError = css`
  box-shadow: 0 0 0 2px red;
`

export const InputContainer = styled.input<IInputContainer>`
  width: 100%;
  padding: 0.75rem;
  background-color: ${(props) => props.theme['--base---input']};
  border-radius: 4px;
  color: ${(props) => props.theme['--base---text']};
  font-size: ${(props) => props.theme['--text---regular--s']};
  outline: transparent;

  ${(props) => (props.hasError ? InputWithError : '')};

  &::placeholder {
    color: ${(props) => props.theme['--base---label']};
  }

  &:active {
    box-shadow: 0 0 0 2px ${(props) => props.theme['--brand---yellow--dark']};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['--brand---yellow--dark']};
  }
`
