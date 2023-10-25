import { Container, CardImg, CardText } from './styles';


export function Cards({ imgUrl, title, code, price }) {
  return (
    <Container>
      <CardImg>
        <img src={imgUrl} alt={`Imagem de ${title}`} />
      </CardImg>

      <CardText>
        <h2>{title}</h2>
        <p>{code}</p>
        <span>{price}</span>
      </CardText>
    </Container>
  );
}