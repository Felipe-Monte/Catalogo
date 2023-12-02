import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export function Cards({ share, imgUrl, title, code, price, isAvaliable }) {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  function handleCardClick() {
    if (isAvaliable) {
      navigate(`/details/${code}`, { state: { share, imgUrl, title, code, price } })
    }
  }

  return (
    <Container onClick={handleCardClick} className={isAvaliable ? "" : "unavailable" }>
      <CardImg>
        {!imageLoaded && <img id="loader" src="/spinner.svg" alt="loading spinner" loading="lazy" />}
        <img
          src={imgUrl}
          alt={`Imagem de ${title}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        {!isAvaliable && <div className="unavailable-banner">Indisponível</div>}
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
