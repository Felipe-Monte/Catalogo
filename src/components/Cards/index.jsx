import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import Spinner from '../../../public/spinner.svg'

export function Cards({ imgUrl, title, code, price }) {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  function handleCardClick() {
    navigate(`/details/${code}`, { state: { imgUrl, title, code, price } })
  }

  return (
    <Container onClick={handleCardClick}>
      <CardImg>
        {!imageLoaded && <img id="loader" src="/public/spinner.svg"/>}
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
