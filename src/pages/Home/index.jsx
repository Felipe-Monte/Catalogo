import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"

export function Home() {
  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>  
      </main>

    </Container>
  )
}


