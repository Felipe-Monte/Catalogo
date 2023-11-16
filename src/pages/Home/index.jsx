import { Container, Section } from "./styles"
import { FiSearch } from 'react-icons/fi'

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"

import jsonData from "../../products.json"
import { api } from "../../services/api"
import { useState, useEffect } from "react"

import { Input } from '../../components/Input'

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

      <Input
        icon={FiSearch}
        placeholder="Pesquisar por nome"
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
                price={`R$: ${card.price}`}
              />
            ))
          }
        </Section>
      </main>

      {/* `${api.defaults.baseURL}/files/${card.imgUrl}` */}

      {/* <Footer /> */}
    </Container>
  )
}


