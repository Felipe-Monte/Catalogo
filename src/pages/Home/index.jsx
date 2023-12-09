import React from "react";
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
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedData = [...filteredData].sort((a, b) => a.title.localeCompare(b.title));

  const MemoizedCards = React.memo(Cards);

  return (
    <Container>
      <Header
        title="Catálogo de produtos"  
        onSearch={handleSearch}
      />

      <main>
        <Section>
          {sortedData.map((card) => (
            <MemoizedCards
              key={card.id}
              share={card.share}
              imgUrl={card.imgUrl}
              title={card.title}
              code={card.code}
              price={`R$: ${card.price}`}
              isAvaliable={card.isAvaliable}
              loading="lazy"
            />
          ))}
        </Section>
      </main>
    </Container>
  )
}
