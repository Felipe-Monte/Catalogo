import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Cards({ imgUrl, title, code, price }) {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  function handleCardClick() {
    navigate(`/details/${code}`, { state: { imgUrl, title, code, price } })
  }

  return (
    <Container onClick={handleCardClick}>
      <CardImg>
        {!imageLoaded && <div className="loading-indicator">Carregando...</div>}
        <img
          src={imgUrl}
          alt={`Imagem de ${title}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </CardImg>

      <CardText>
        <h2>{title}</h2>
        <p>Cód: {code}</p>
        <span>{price}</span>
      </CardText>
    </Container>
  )
}
