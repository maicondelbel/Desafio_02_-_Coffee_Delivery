import styled from 'styled-components'

export const MainPageContainer = styled.section`
  margin: 2rem 0;

  h1 {
    font-weight: 800;
    line-height: 1.6;
    font-family: ${(props) => props.theme['--font---title']};
    font-size: ${(props) => props.theme['--title---title--l']};
    color: ${(props) => props.theme['--base---subtitle']};
  }

  main {
    margin-top: 3.375rem;
  }
`
export const PageContentContainer = styled.main`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 3.5rem;
  justify-content: space-evenly;
`
