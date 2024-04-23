import React, { useState, useEffect, useRef } from "react";
import { Container, Section } from "./styles";
import { Header } from "../../components/Header";
import { Cards } from "../../components/Cards";
import { Footer } from "../../components/Footer";
import jsonData from "../../products.json";
import { useLocation } from "react-router-dom";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const listRef = useRef(null);
  const location = useLocation();

  const handleScroll = () => {
    if (listRef.current) {
      setScrollPosition(listRef.current.scrollTop);
    }
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

  useEffect(() => {
    if (listRef.current && location.state && location.state.fromDetails) {
      listRef.current.scrollTop = scrollPosition;
    }
  }, [location, scrollPosition]);

  return (
    <Container>
      <Header title="Catálogo AM Monte" onSearch={handleSearch} />

      <main>
        <Section ref={listRef} onScroll={handleScroll}>
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
              Nenhum produto encontrado para "{searchTerm}"
            </p>
          )}
        </Section>
      </main>
      <Footer/>
    </Container>
  );
}
