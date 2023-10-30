import { FiArrowLeft } from 'react-icons/fi'
import { Container, Section, ContainerImg, ContainerText,ButtonBackContainer } from './styles'
import { useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Details() {
  const location = useLocation()
  const { imgUrl, title, code, price } = location.state || {}


  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
        <div className='container-section'>
          <Section>
            <ContainerImg>
              <img src={imgUrl} />
            </ContainerImg>

            <ContainerText>
              <h2>{title}</h2>
              <p>{code}</p>
              <span>R$: {price}</span>
            </ContainerText>

            <ButtonBackContainer>
              <FiArrowLeft/>
              <a href="#">voltar</a>
            </ButtonBackContainer>
          </Section>
        </div>
      </main>

      {/* <Footer /> */}

    </Container>
  )
}