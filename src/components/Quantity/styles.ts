import styled from 'styled-components'

export const QuantityContainer = styled.div`
  background: ${(props) => props.theme['--base---button']};
  padding: 0 0.25rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 6px;
  max-width: 5.5rem;

  input {
    width: 1.25rem;
    text-align: center;
    background-color: transparent;
    -webkit-appearance: none;
    margin: 0;
  }

  button {
    background-color: transparent;
    padding: 0.5rem;

    svg {
      color: ${(props) => props.theme['--brand---purple']};
    }
  }

  button:hover {
    svg {
      color: ${(props) => props.theme['--brand---purple--dark']};
    }
  }
`
export const QuantityInputContainer = styled.input``
