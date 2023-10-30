import { Container, Section } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"

import jsonData from "../../products.json"

export function Home() {
  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        <Section>
          {
            jsonData.map((item) => (
              <Cards
                key={item.id}
                imgUrl={item.imgUrl}
                title={item.title}
                code={item.code}
                price={item.price}
              />
            ))
          }
        </Section>
      </main>

      {/* <Footer /> */}
    </Container>
  )
}


