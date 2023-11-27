import { Container, Section } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"

import jsonData from '../../products.json'

export function Home() {
  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        <Section>
          {jsonData.map((card) => (
            <Cards
              key={card.id}
              imgUrl={card.imgUrl}
              title={card.title}
              code={card.code}
              price={`R$: ${card.price}`}
            />
          ))}
        </Section>
      </main>
    </Container>
  )
}
