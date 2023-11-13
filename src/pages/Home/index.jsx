import { Container, Section } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"

import jsonData from "../../products.json"
import { api } from "../../services/api"
import { useState, useEffect } from "react"

export function Home() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/cards")
        setCards(response.data)

      } catch (error) {
        console.log("Error na requisição:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        <Section>
          {
            jsonData.map((card) => (
              <Cards
                key={card.id}
                imgUrl={card.imgUrl}
                title={card.title}
                code={card.code}
                price={card.price}
              />
            ))
          }
        </Section>
      </main>

      {/* <Footer /> */}
    </Container>
  )
}


