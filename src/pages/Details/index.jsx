import { FiArrowLeft } from 'react-icons/fi'
import { Container, Section, ContainerImg, ContainerText, ButtonBackContainer } from './styles'
import { useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { useNavigate } from 'react-router-dom'

export function Details() {
  const location = useLocation()
  const { imgUrl, title, code, price } = location.state || {}

  const navigate = useNavigate()

  function handleClickBack() {
    navigate('/')
  }

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
              <p>Cód: {code}</p>
              <span>R$: {price}</span>
            </ContainerText>

            <ButtonBackContainer onClick={handleClickBack}>
              <FiArrowLeft />
              <a href="#">voltar</a>
            </ButtonBackContainer>
          </Section>
        </div>
      </main>

      {/* <Footer /> */}

    </Container>
  )
}