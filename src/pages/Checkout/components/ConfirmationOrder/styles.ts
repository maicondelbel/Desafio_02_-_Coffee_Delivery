import styled from 'styled-components'

export const ConfirmationOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  button {
    text-transform: uppercase;
    height: 3rem;
    margin-top: 2rem;
    width: 100%;
    font-weight: bold;
    font-size: ${(props) => props.theme['--components---button--g']};
    background-color: ${(props) => props.theme['--brand---yellow']};
    color: ${(props) => props.theme['--base---white']};

    &:hover {
      background-color: ${(props) => props.theme['--brand---yellow--dark']};
    }
  }
`
export const TotalItensAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:nth-child(1) {
    line-height: 1.3;
    font-size: ${(props) => props.theme['--text---regular--s']};
    color: ${(props) => props.theme['--base---text']};
  }

  span:nth-child(2) {
    line-height: 1.3;
    font-size: ${(props) => props.theme['--text---regular--m']};
  }
`
export const TotalAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: ${(props) => props.theme['--text---bold--l']};
    color: ${(props) => props.theme['--base---subtitle']};
    font-weight: bold;
    line-height: 1.3;
  }
`
