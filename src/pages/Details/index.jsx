import { FiArrowLeft } from 'react-icons/fi'
import { FaWhatsapp } from "react-icons/fa";
import { Container, Section, WrapperContainer, ContainerImg, ContainerText, ContainerButton } from './styles'
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

          <WrapperContainer>
            <ContainerText>
              <h2>{title}</h2>
              <p>Cód: {code}</p>
              <span>{price}</span>

              <FaWhatsapp />

            </ContainerText>

            <ContainerButton>
              <button id='btn_back'>Voltar</button>
              <button id='btn_delete'>Deletar</button>
            </ContainerButton>
          </WrapperContainer>

        </Section>
      </main>


    </Container>
  )
}