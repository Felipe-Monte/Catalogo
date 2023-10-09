import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Card } from "../../components/Card"

export function Home() {
  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        <Card
          imgUrl=""
          title="Item 1"
          code="00001"
          price="59,90"
        />
        <Card
          imgUrl=""
          title="Item 1"
          code="00001"
          price="59,90"
        />
        <Card
          imgUrl=""
          title="Item 1"
          code="00001"
          price="59,90"
        />
        <Card
          imgUrl=""
          title="Item 1"
          code="00001"
          price="59,90"
        />
      </main>

    </Container>
  )
}


