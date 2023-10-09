import { Container, CardImg, CardText } from './styles';
import products from '../../products.json'; 

export function Cards() {
  return (
    <div>
      {products.map((card, index) => (
        <Card key={index} data={card} />
      ))}
    </div>
  );
}

function Card({ data }) {
  const { imgUrl, title, code, price } = data;

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
  );
}