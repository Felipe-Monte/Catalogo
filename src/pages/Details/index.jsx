import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Container, Section, WrapperContainer, ContainerImg, ContainerText, ContainerButton } from './styles'
import { Header } from '../../components/Header'

export function Details() {
  const location = useLocation()
  const {share, imgUrl, title, code, price } = location.state || {}
  
  const navigate = useNavigate()

  const handleClickBack = () => {
    navigate(-1)
  }

  const enviarWhatsApp = () => {
    const whatsappURL = `
    https://api.whatsapp.com/send?text=${encodeURIComponent(share)} 
    Produto ${title} (Cód: ${code}, Preço: ${price}).`
    window.open(whatsappURL)
  }

  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
        <Section>
          <ContainerImg>
            <img src={imgUrl} alt={title} />
          </ContainerImg>

          <WrapperContainer>
            <ContainerText>
              <h2>{title}</h2>
              <p>Cód: {code}</p>
              <span>{price}</span>

              <FaWhatsapp onClick={enviarWhatsApp} />
            </ContainerText>

            <ContainerButton>
              <button id='btn_back' onClick={handleClickBack}>
                <FiArrowLeft />
                Voltar
              </button>
            </ContainerButton>
          </WrapperContainer>
        </Section>
      </main>
    </Container>
  )
}

