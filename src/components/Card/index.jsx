import { Container, CardImg, CardText } from "./styles"

export function Card({ imgUrl, title, code, price }) {
  return (
    <Container>

      <CardImg>
        <img src={imgUrl} alt="imagem do card" />
      </CardImg>

      <CardText>
        <h2>{title}</h2>
        <p>{code}</p>
        <span>{price}</span>
      </CardText>
      
    </Container>
  )
}