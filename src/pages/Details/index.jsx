import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import {
  Container,
  Section,
  WrapperContainer,
  ContainerImg,
  ContainerText,
  ContainerButton,
} from "./styles";
import { HeaderDetails } from "../../components/HeaderDetails";

function Details() {
  const location = useLocation();
  const { category, share, imgUrl, title, code, price } = location.state || {};

  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  const sendWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      share
    )} ${title} Cód: ${code} ${price}.`;
    window.open(whatsappURL);
  };

  const handleCopyToClipboard = () => {
    const whatsappURL = `${share} ${title} Cód: ${code} ${price}.`;

    // Criar um elemento de input temporário
    const inputElement = document.createElement("input");
    inputElement.value = whatsappURL;

    // Adicionar o elemento ao DOM
    document.body.appendChild(inputElement);

    // Selecionar o texto no campo de input
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copiar o texto para a área de transferência
    document.execCommand("copy");

    // Remover o elemento temporário
    document.body.removeChild(inputElement);

    // Alerta ou feedback para o usuário
    alert("Link copiado para a área de transferência!");
  };

  return (
    <Container>
      <HeaderDetails title="Detalhes do produto" />

      <main>
        <Section>
          <ContainerImg>
            <img src={imgUrl} alt={`Imagem de ${title}`} />
          </ContainerImg>

          <WrapperContainer>
            <ContainerText>
              <h2>{title}</h2>
              <p>Código: {code}</p>
              <p>{category}</p>
              <span>{price}</span>

              <div className="wrapper-icons">
                <FaWhatsapp className="icon-whatsapp" onClick={sendWhatsApp} />
                <FaRegCopy onClick={handleCopyToClipboard} />
              </div>
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
