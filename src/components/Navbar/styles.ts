import styled from 'styled-components'

export const NavbarContainer = styled.header`
  background-color: ${(props) => props.theme['--base---background']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.5rem;
    padding: 0 15px;
  }

  .end {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`
export const PlaceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme['--brand---purple--light']};
  border-radius: 6px;
  padding: 0.5rem;

  svg {
    color: ${(props) => props.theme['--brand---purple']};
  }

  span {
    color: ${(props) => props.theme['--brand---purple--dark']};
    font-size: ${(props) => props.theme['--text---regular--s']};
  }
`
export const CartButtonContainer = styled.button`
  padding: 0.5rem;
  position: relative;
  background-color: ${(props) => props.theme['--brand---yellow--light']};

  svg {
    color: ${(props) => props.theme['--brand---yellow--dark']};
  }
`

export const BadgeContainer = styled.span`
  position: absolute;
  top: -25%;
  right: -25%;
  background-color: ${(props) => props.theme['--brand---yellow--dark']};
  color: ${(props) => props.theme['--base---white']};
  font-size: ${(props) => props.theme['--text---bold--s']};
  font-weight: bold;
  border-radius: 50%;
  height: 1.25rem;
  width: 1.25rem;
  line-height: 1.25rem;
`
