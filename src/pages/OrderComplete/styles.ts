import styled from 'styled-components'

export const OrderCompleteContainer = styled.section`
  margin: 5rem 0;
`

export const PageContentContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  gap: 6.375rem;
`

export const LeftSideContainer = styled.div`
  > h1 {
    font-weight: 800;
    color: ${(props) => props.theme['--brand---yellow--dark']};
    font-size: ${(props) => props.theme['--title---title--l']};
    font-family: ${(props) => props.theme['--font---title']};
  }

  > span {
    color: ${(props) => props.theme['--base---subtitle']};
    font-size: ${(props) => props.theme['--text---regular--l']};
  }
`

export const RightSideContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`

export const DeliveryInfoBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: linear-gradient(
        ${(props) => props.theme['--base---background']},
        ${(props) => props.theme['--base---background']}
      )
      padding-box,
    linear-gradient(135deg, #dbac2c, #8047f8) border-box;
  border: 1px solid transparent;
`
