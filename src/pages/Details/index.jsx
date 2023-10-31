import { FiArrowLeft } from 'react-icons/fi';
import { Container, Section, ContainerImg, ContainerText, ButtonBackContainer } from './styles';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Details() {
  const location = useLocation();
  const { imgUrl, title, code, price } = location.state || {};

  const navigate = useNavigate(); // Use useNavigate para navegar

  useEffect(() => {
    // Salve os dados no localStorage
    localStorage.setItem('productDetails', JSON.stringify({ imgUrl, title, code, price }));
  }, [imgUrl, title, code, price]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      // Navegue de volta para a página inicial (Home) quando a página for recarregada
      navigate(-1);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

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
  );
}
