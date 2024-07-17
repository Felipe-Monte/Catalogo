import React, { useState, useEffect } from "react";
import { Container, Section } from "./styles";
import { Header } from "../../components/Header";
import Cards from "../../components/Cards";
import { Footer } from "../../components/Footer"
import jsonData from "../../products.json";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([]);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    const sortData = () => {
      const sorted = [...jsonData]
        .filter(
          (card) =>
            card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.code.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => a.title.localeCompare(b.title));

      setSortedData(sorted);
    };

    sortData();
  }, [searchTerm]);


  return (
    <Container>
      <Header title="Catálogo" onSearch={handleSearch} />

      <main>
        <Section>
          {sortedData.length > 0 ? (
            sortedData.map((card) => (
              <Cards
                key={card.id}
                category={card.category}
                share={card.share}
                imgUrl={card.imgUrl}
                title={card.title}
                code={card.code}
                price={`R$: ${card.price}`}
                isAvailable={card.isAvailable}
                isNew={card.isNew}
                loading="lazy"
              />
            ))
          ) : (
            <p className="alert_not_found">
              O produto "{searchTerm.toUpperCase()}" não está cadastrado em nosso catálogo.
            </p>
          )}
        </Section>
      </main>
      {/* <Footer/> */}
    </Container>
  );
}
