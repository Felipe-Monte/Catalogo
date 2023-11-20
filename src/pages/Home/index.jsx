import { Container, Section } from "./styles"
import { FiSearch } from 'react-icons/fi'

import { useState, useEffect } from "react"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Input } from '../../components/Input'

import { api } from "../../services/api"
import jsonProducts from '../../products.json'

export function Home() {
  // const [cards, setCards] = useState([])
  // const [search, setSearch] = useState('')

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await api.get("/cards")
  //       setCards(response.data)
  //     } catch (error) {
  //       console.log("Error na requisição:", error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // const filteredCards = cards.filter(card =>
  //   card.title.toLowerCase().includes(search.toLowerCase()) ||
  //   card.code.toLowerCase().includes(search.toLowerCase())
  // )

  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <Input
        icon={FiSearch}
        placeholder="Pesquisar por nome ou código"
        onChange={(e) => setSearch(e.target.value)}
      />

      <main>
        <Section>

        {/* filteredCards */}

          {jsonProducts.map((card) => (
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

      {/* ${api.defaults.baseURL}/files/${card.imgUrl} */}

      {/* <Footer /> */}
    </Container>
  );
}
