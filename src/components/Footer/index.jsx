import { useState } from "react";
import { Container } from "./styles";

export function Footer({ title }) {
  const [date, setdate] = useState(new Date().toLocaleDateString())
  const [hour, setHour] = useState(new Date().toLocaleTimeString())

  return (
    <Container>
      <p>
        <i>Felipe</i> -
        Atualizado dia {date} as {hour}
      </p>
    </Container>
  );
}
