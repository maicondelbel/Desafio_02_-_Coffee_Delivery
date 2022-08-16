import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import bannerImage from '../../../../assets/banner-image.png'
import { IconList } from '../../../../components/IconList'
import {
  BannerInfoContainer,
  BannerImageContainer,
  BannerContainer,
  BannerWrapperContainer,
  IconListWrapper,
} from './styles'

export function Banner() {
  const theme = useTheme()
  return (
    <BannerContainer>
      <BannerWrapperContainer>
        <BannerInfoContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <IconListWrapper>
            <IconList
              bgColor={theme['--brand---yellow--dark']}
              icon={<ShoppingCart size={16} weight="fill" />}
              title={<span>Compra simples e segura</span>}
            />
            <IconList
              bgColor={theme['--base---text']}
              icon={<Package size={16} weight="fill" />}
              title={<span>Embalagem mantém o café intacto</span>}
            />
            <IconList
              bgColor={theme['--brand---yellow']}
              icon={<Timer size={16} weight="fill" />}
              title={<span>Entrega rápida e rastreada</span>}
            />
            <IconList
              bgColor={theme['--brand---purple']}
              icon={<Coffee size={16} weight="fill" />}
              title={<span>O café chega fresquinho até você</span>}
            />
          </IconListWrapper>
        </BannerInfoContainer>
        <BannerImageContainer>
          <img src={bannerImage} alt="" />
        </BannerImageContainer>
      </BannerWrapperContainer>
    </BannerContainer>
  )
}
