import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"

import jsonData from "../../images/products.json"

export function Home() {
  console.log(jsonData)

  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
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
      </main>

      <Footer />
    </Container>
  )
}


