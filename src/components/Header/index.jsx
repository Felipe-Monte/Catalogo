import { Container } from "./styles"

import { Input } from "../Input"

export function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>

      <Input placeholder="Pesquisar"/>
    </Container>
  )
}