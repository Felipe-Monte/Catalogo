import { FiArrowLeft } from 'react-icons/fi'
import { Container, Section, ContainerImg, ContainerText, ButtonBackContainer } from './styles'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function Details() {
  const location = useLocation()
  const { imgUrl, title, code, price } = location.state || {}

  // Define os estados para imgUrl, title, code e price
  const [productData, setProductData] = useState({
    imgUrl: imgUrl || '',
    title: title || '',
    code: code || '',
    price: price || '',
  });

  useEffect(() => {
    // Salve os dados no localStorage
    localStorage.setItem('productDetails', JSON.stringify(productData));
  }, [productData]);

  useEffect(() => {
    // Recupere os dados do localStorage
    const storedData = localStorage.getItem('productDetails');
    if (storedData) {
      const { imgUrl, title, code, price } = JSON.parse(storedData);
      
      // Atualize o estado local com os dados recuperados
      setProductData({ imgUrl, title, code, price });
    }
  }, []);

  return (
    <Container>
      <Header title="Detalhes do produto" />

      <main>
        <div className='container-section'>
          <Section>
            <ContainerImg>
              <img src={productData.imgUrl} alt={productData.title} />
            </ContainerImg>

            <ContainerText>
              <h2>{productData.title}</h2>
              <p>{productData.code}</p>
              <span>R$: {productData.price}</span>
            </ContainerText>

            <ButtonBackContainer>
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
