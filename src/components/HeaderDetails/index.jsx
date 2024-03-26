
import { Container } from "./styles";

export function HeaderDetails({ title, onSearch }) {

  return (
    <Container>
        <div className="container-title">
          <h1>{title}</h1>
        </div>
    </Container>
  );
}
