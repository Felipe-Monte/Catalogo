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

export function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { category, share, imgUrl, title, code, price } = location.state || {};

  const handleClickBack = () => {
    navigate(-1, { state: { fromDetails: true } });
  };

  const sendWhatsApp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      share
    )} ${title} Cód: ${code} ${price}.`;
    window.open(whatsappURL);
  };

  const handleCopyToClipboard = () => {
    const whatsappURL = `${share} ${title} Cód: ${code} ${price}.`;

    const inputElement = document.createElement("input");
    inputElement.value = whatsappURL;

    document.body.appendChild(inputElement);

    inputElement.select();
    inputElement.setSelectionRange(0, 99999);

    document.execCommand("copy");
    document.body.removeChild(inputElement);

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
              <p>Cód: {code}</p>
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
