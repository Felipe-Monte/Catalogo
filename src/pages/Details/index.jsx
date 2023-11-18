import { FiArrowLeft } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";
import { Container, Section, ContainerImg, ContainerText } from './styles'
import { useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'

import { useNavigate } from 'react-router-dom'

export function Details() {
  const location = useLocation()
  const { imgUrl, title, code, price } = location.state || {}

  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
          <Section>
            <ContainerImg>
              <img src={imgUrl} />
            </ContainerImg>

            <ContainerText>
              <h2>{title}</h2>
              <p>Cód: {code}</p>
              <span>{price}</span>

              <FaWhatsapp />

            </ContainerText>
          </Section>
      </main>


    </Container>
  )
}