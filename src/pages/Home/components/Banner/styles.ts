import styled from 'styled-components'
import bannerBackground from '../../../../assets/banner-background.png'

export const BannerContainer = styled.section`
  background-image: url(${bannerBackground});
  background-size: cover;
  background-position: bottom;
`
export const BannerWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 3.5rem;

  margin-left: auto;
  margin-right: auto;

  flex: 1;
  min-height: 70vh;

  @media (max-width: 767px) {
    flex-flow: column-reverse;
  }
`

export const BannerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  flex-wrap: wrap;
  flex: 1;

  @media (max-width: 767px) {
    min-width: 100%;
  }

  h1 {
    font-family: ${(props) => props.theme['--font---title']};
    font-size: ${(props) => props.theme['--title---title--x-l']};
    color: ${(props) => props.theme['--base---title']};
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  p {
    font-family: ${(props) => props.theme['--font---text']};
    font-size: ${(props) => props.theme['--text---regular--l']};
    color: ${(props) => props.theme['--base---subtitle']};
    line-height: 1.3;
  }
`

export const BannerImageContainer = styled.div`
  flex: 1;
  padding: 2rem 0;

  img {
    max-width: 476px;
    width: 100%;
    height: auto;
  }
`

export const IconListWrapper = styled.div`
  margin-top: 4.125rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 0.125rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const IconListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    background-color: ${(props) => props.theme['--brand---yellow--dark']};
    border-radius: 50%;
    color: ${(props) => props.theme['--base---white']};
  }

  span {
    font-size: ${(props) => props.theme['--text---regular--m']};
    color: ${(props) => props.theme['--base---text']};
  }
`
