import { Container, CardImg, CardText } from './styles';


export function Cards() {
  return (
    <Container>
      <CardImg>
        <img src="#" alt="imagem do card" />
      </CardImg>

      <CardText>
        <h2>titulo</h2>
        <p>codigo</p>
        <span>preço</span>
      </CardText>
    </Container>
  );
}