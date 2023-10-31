import { FiArrowLeft } from 'react-icons/fi'
import { Container, Section, ContainerImg, ContainerText,ButtonBackContainer } from './styles'
import { useLocation } from 'react-router-dom'

import { useEffect } from 'react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Details() {
  const location = useLocation()
  const { imgUrl, title, code, price } = location.state || {}

  useEffect(() => {
    // Salve os dados no localStorage
    localStorage.setItem('productDetails', JSON.stringify({ imgUrl, title, code, price }));
  }, [imgUrl, title, code, price]);
  
  useEffect(() => {
    // Recupere os dados do localStorage
    const storedData = localStorage.getItem('productDetails');
    if (storedData) {
      const { imgUrl, title, code, price } = JSON.parse(storedData);
      // Atualize o estado local com os dados recuperados
    }
  }, []);

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