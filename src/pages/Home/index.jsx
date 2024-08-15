import React from "react";
import { Header } from "../../components/Header";
import { Container, Section } from "./styles";
import Cards from "../../components/Cards";
import jsonData from "../../products.json";

export function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Organize os produtos do último ao primeiro
  const organizedProducts = [...jsonData].reverse();

  // Filtre os produtos com base no termo de busca
  const filteredProducts = organizedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header title="Catálogo" onSearch={handleSearch} />

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
        </Section>
      </main>
    </Container>
  );
}

export default Home;
