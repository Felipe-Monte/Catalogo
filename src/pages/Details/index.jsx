import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { Container, Section, WrapperContainer, ContainerImg, ContainerText, ContainerButton } from './styles';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

export function Details() {
  const location = useLocation();
  const { imgUrl, title, code, price } = location.state || {};
  const navigate = useNavigate();

  function handleClickBack() {
    navigate('/');
  }

  function handleShareOnWhatsApp() {
    const message = `Confira este produto: ${title} - ${price}`;
    const encodedMessage = encodeURIComponent(message);
    const encodedUrl = encodeURIComponent(imgUrl);

    if (navigator.share) {
      // Se o navegador suportar a API de compartilhamento, use-a
      navigator.share({
        title: 'Detalhes do Produto',
        text: message,
        url: imgUrl,
      })
      .catch((error) => console.error('Error sharing:', error));
    } else {
      // Caso contrário, abrir uma nova janela com a URL do WhatsApp
      const url = `whatsapp://send?text=${encodedMessage}%20${encodedUrl}`;
      window.open(url, '_blank');
    }
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

              {/* Adicionando o ícone do WhatsApp com a função de compartilhamento */}
              <FaWhatsapp onClick={handleShareOnWhatsApp} style={{ cursor: 'pointer' }} />
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




// import { FiArrowLeft } from 'react-icons/fi'
// import { FaWhatsapp } from "react-icons/fa";
// import { Container, Section, WrapperContainer, ContainerImg, ContainerText, ContainerButton } from './styles'
// import { useLocation } from 'react-router-dom'

// import { Header } from '../../components/Header'

// import { useNavigate } from 'react-router-dom'

// export function Details() {
//   const location = useLocation()
//   const { imgUrl, title, code, price } = location.state || {}

//   const navigate = useNavigate()

//   function handleClickBack() {
//     navigate("/")
//   }

//   return (
//     <Container>
//       <Header title="Detalhes do produto" />

//       <main>
//         <Section>
//           <ContainerImg>
//             <img src={imgUrl} />
//           </ContainerImg>

//           <WrapperContainer>
//             <ContainerText>
//               <h2>{title}</h2>
//               <p>Cód: {code}</p>
//               <span>{price}</span>

//               <FaWhatsapp />

//             </ContainerText>

//             <ContainerButton>
//               <button
//                 id='btn_back'
//                 onClick={handleClickBack}
//               >
//                 <FiArrowLeft />
//                 Voltar
//               </button>
//               {/* <button
//                 id='btn_delete'
//                 onClick={handleClickDelete}
//               >
//                 Deletar
//               </button> */}
//             </ContainerButton>
//           </WrapperContainer>

//         </Section>
//       </main>

//     </Container>
//   )
// }