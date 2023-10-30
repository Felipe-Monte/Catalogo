import { Container, Section, ContainerImg, ContainerText } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Details() {
  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
        <div className='container-section'>
          <Section>
            <ContainerImg>
              <img src="/bababell.jpeg" />
            </ContainerImg>

            <ContainerText>
              <h2>Item 1</h2>
              <p>00000</p>
              <span>R$: 59,90</span>
            </ContainerText>
          </Section>
        </div>
      </main>

      {/* <Footer /> */}

    </Container>
  )
}