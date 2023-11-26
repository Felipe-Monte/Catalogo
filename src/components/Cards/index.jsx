
import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"

export function Cards({ imgUrl, title, code, price }) {
  const navigate = useNavigate()

  function handleCardClick() {
    navigate(`/details/${code}`, { state: { imgUrl, title, code, price } })
  }

  return (
    <Container onClick={handleCardClick}>
      <CardImg>
        <img src={imgUrl} alt={`Imagem de ${title}`} />
      </CardImg>

      <CardText>
        <h2>{title}</h2>
        <p>Cód: {code}</p>
        <span>{price}</span>
      </CardText>
    </Container>
  )
}


























