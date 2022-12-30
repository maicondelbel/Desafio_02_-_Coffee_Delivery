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
  min-height: 34rem;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap-reverse;
  flex: 1;
  padding: 0 1rem;
  min-height: 70vh;
`

export const BannerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 37rem;
  flex-wrap: wrap;

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
  img {
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
