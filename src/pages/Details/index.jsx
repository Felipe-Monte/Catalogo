import { Container, Section, ContainerImg, ContainerText } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Details() {
  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
        <Section>
          <ContainerImg>
            <img src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagem do produto" />
          </ContainerImg>

          <ContainerText>
            <h2>Item 1</h2>
            <p>00000</p>
            <span>R$: 59,90</span>
          </ContainerText>

        </Section>
      </main>

      <Footer />

    </Container>
  )
}