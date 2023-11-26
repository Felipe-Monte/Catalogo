import { Container, Section } from "./styles"
import { FiSearch } from 'react-icons/fi'

import { useState } from "react"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Input } from '../../components/Input'

import jsonData from '../../products.json'

export function Home() {
  const [cards, setCards] = useState(jsonData)
  const [search, setSearch] = useState('')

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.code.toLowerCase().includes(search.toLowerCase())
  )

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
          {filteredCards.map((card) => (
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
