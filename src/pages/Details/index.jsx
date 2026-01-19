import { FiArrowLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderDetails } from '../../components/HeaderDetails';
import {
  Container,
  ContainerButton,
  ContainerImg,
  ContainerText,
  Section,
  WrapperContainer,
} from './styles';

function Details() {
  const location = useLocation();
  const { category, imgUrl, title, code, price } = location.state || {};

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Container>
      <HeaderDetails title="Detalhes do produto" />

      <main>
        <Section className="animeLeft">
          <ContainerImg>
            <img src={imgUrl} alt={`Imagem de ${title}`} />
          </ContainerImg>

          <WrapperContainer>
            <ContainerText>
              <h2>{title}</h2>
              <p>Código: {code}</p>
              <p>{category}</p>
              <span>{price}</span>
            </ContainerText>

            <ContainerButton>
              <button id="btn_back" onClick={handleClickBack}>
                <FiArrowLeft />
                Voltar
              </button>
            </ContainerButton>
          </WrapperContainer>
        </Section>
      </main>
    </Container>
  );
}

export default Details;
