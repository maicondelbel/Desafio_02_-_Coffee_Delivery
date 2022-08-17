import styled from 'styled-components'

export const CartItemWrapperContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  flex: 1 23rem;
  margin-bottom: 1.5rem;
  justify-content: center;

  & + & {
    padding-top: 1.5rem;
    border-top: 1px solid ${(props) => props.theme['--base---button']};
  }
`
export const CartItemStartContainer = styled.div`
  img {
    width: auto;
    height: 4rem;
  }
`

export const CartItemMiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  span {
    line-height: 1.3;
    font-size: ${(props) => props.theme['--text---regular--m']};
    color: ${(props) => props.theme['--base---subtitle']};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    > button {
      padding: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.125rem;
      text-transform: uppercase;
      font-size: ${(props) => props.theme['--components---button--s']};
      color: ${(props) => props.theme['--base---text']};
      background-color: ${(props) => props.theme['--base---button']};

      svg {
        color: ${(props) => props.theme['--brand---purple']};
      }

      &:hover {
        background-color: ${(props) => props.theme['--base---hover']};
      }
    }
  }
`

export const CartItemEndContainer = styled.div`
  /* width: 100%; */
  text-align: end;

  span {
    color: ${(props) => props.theme['--base---text']};
    font-size: ${(props) => props.theme['--text---bold--m']};
    font-weight: bold;
  }
`
export const SeparatorContainer = styled.div`
  margin: 1.5rem 0;
  border-top: 1px solid ${(props) => props.theme['--base---button']}; ;
`
