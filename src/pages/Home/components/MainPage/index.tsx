import { MainPageContainer, PageContentContainer } from './styles'
import { LayoutContainer } from './../../../../layouts/styles'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../../../../components/CoffeeCard/index'

export function MainPage() {
  return (
    <MainPageContainer>
      <LayoutContainer>
        <h1>Nossos cafés</h1>
        <PageContentContainer>
          {coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />
          })}
        </PageContentContainer>
      </LayoutContainer>
    </MainPageContainer>
  )
}
