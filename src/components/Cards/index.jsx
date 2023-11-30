import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Cards({share, imgUrl, title, code, price }) {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  function handleCardClick() {
    navigate(`/details/${code}`, { state: { share, imgUrl, title, code, price } })
  }

  return (
    <Container onClick={handleCardClick}>
      <CardImg>
        {!imageLoaded && <img id="loader" src="/spinner.svg" alt="loading spinner" loading="lazy"/>}
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
        <p id="share">{share}</p>
      </CardText>
    </Container>
  )
}
