import styled from 'styled-components'

export const CoffeeCardContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 1.25rem 1.5rem;
  background-color: ${(props) => props.theme['--base---card']};
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  width: 256px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
    margin-left: auto;
    margin-right: auto;
  }

  h5 {
    font-family: ${(props) => props.theme['--font---title']};
    color: ${(props) => props.theme['--base---subtitle']};
    font-size: ${(props) => props.theme['--title---title--s']};
    font-weight: bold;
    line-height: 1.3;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  p {
    color: ${(props) => props.theme['--base---label']};
    font-size: ${(props) => props.theme['--text---regular--s']};
    text-align: center;
    line-height: 1.3;
  }
`

export const CoffeeTagWrapperContent = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  text-align: center;
`

export const CoffeeActionsContent = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const CoffeeActionsStartContent = styled.div`
  display: flex;
  align-items: center;

  span::before {
    content: 'R$';
    color: ${(props) => props.theme['--base---label']};
    font-size: ${(props) => props.theme['--text---regular--s']};
    margin-right: 0.125rem;
  }

  span {
    font-family: ${(props) => props.theme['--font---title']};
    color: ${(props) => props.theme['--base---text']};
    font-size: ${(props) => props.theme['--title---title--m']};
    font-weight: bold;
  }
`

export const CoffeeActionsEndContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddToCartButtonContainer = styled.button`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['--brand---purple--dark']};
  color: ${(props) => props.theme['--base---card']};

  &:hover {
    background-color: ${(props) => props.theme['--brand---purple']};
  }
`

export const CoffeeTagContent = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['--brand---yellow--light']};
  border-radius: 100px;
  text-transform: uppercase;
  color: ${(props) => props.theme['--brand---yellow--dark']};
  font-weight: bold;
  font-size: ${(props) => props.theme['--text---bold--s']}; ;
`
