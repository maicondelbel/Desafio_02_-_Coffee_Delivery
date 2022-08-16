import {
  BadgeContainer,
  CartButtonContainer,
  NavbarContainer,
  PlaceContainer,
} from './styles'
import logo from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { LayoutContainer } from './../../layouts/styles'
import { useContext } from 'react'
import { CartItemsContext } from '../../contexts/CartItemsContext'

export function Navbar() {
  const { numbersOfItensOnCart } = useContext(CartItemsContext)
  return (
    <NavbarContainer>
      <LayoutContainer>
        <div className="start">
          <NavLink to="/">
            <img src={logo} alt="Coffee Delivery Logo" />
          </NavLink>
        </div>
        <div className="end">
          <PlaceContainer>
            <MapPin size={22} weight="fill" />
            <span>Limeira - SP</span>
          </PlaceContainer>
          <NavLink to={'/checkout'}>
            <CartButtonContainer>
              {numbersOfItensOnCart >= 1 && (
                <BadgeContainer>{numbersOfItensOnCart}</BadgeContainer>
              )}
              <ShoppingCart size={22} weight="fill" />
            </CartButtonContainer>
          </NavLink>
        </div>
      </LayoutContainer>
    </NavbarContainer>
  )
}
