import { useState } from "react"
import { Container, Section } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"

import jsonData from '../../products.json'

export function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const filteredData = jsonData.filter((card) => 
    card.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    card.code.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  )

  return (
    <Container>
      <Header
        title="Catálogo de produtos"  
        onSearch={handleSearch}
      />

      <main>
        <Section>
          {filteredData.map((card) => (
            <Cards
              key={card.id}
              share={card.share}
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
