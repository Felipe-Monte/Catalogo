import React, { useState } from "react";
import { Header } from "../../components/Header";
import FilterCategory from "../../components/FilterCategory";
import { Container, Section } from "./styles";
import Cards from "../../components/Cards";
import  ButtonBackToTop  from "../../components/ButtonBackToTop"
import jsonData from "../../products.json";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Organize os produtos do último ao primeiro
  const organizedProducts = [...jsonData].reverse();

  // Filtre os produtos com base no termo de busca e categoria selecionada
  const filteredProducts = organizedProducts.filter(
    (product) =>
      (selectedCategory === "Todos" || product.category === selectedCategory) &&
      (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Container>
      <Header title="Catálogo" onSearch={handleSearch} categorySelected={selectedCategory}/>

      <FilterCategory onSelectCategory={handleCategorySelect} />

      <main>
        <Section>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((card) => (
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
              O produto "{searchTerm.toUpperCase()}" não está cadastrado em
              nosso catálogo.
            </p>
          )}

          <ButtonBackToTop/>
        </Section>
      </main>
    </Container>
  );
}

export default Home;
