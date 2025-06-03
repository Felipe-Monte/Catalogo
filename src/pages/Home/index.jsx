import React from 'react';

import { Header } from '../../components/Header';
import FilterCategory from '../../components/FilterCategory';
import { Container, Section } from './styles';
import Cards from '../../components/Cards';
import ButtonBackToTop from '../../components/ButtonBackToTop';

import jsonData from '../../products.json';

export function Home() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  // Carregar categoria salva no localStorage ao montar o componente
  React.useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setSelectedCategory(savedCategory);
    }
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    localStorage.setItem('selectedCategory', category); // salvar categoria
  };

  const organizedProducts = [...jsonData].reverse();

  const filteredProducts = organizedProducts.filter(
    (product) =>
      (selectedCategory === 'Todos' || product.category === selectedCategory) &&
      (product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.code.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <Container>
      <Header
        title="Catálogo"
        onSearch={handleSearch}
        categorySelected={selectedCategory}
      />

      <FilterCategory
        onSelectCategory={handleCategorySelect}
        selectedCategory={selectedCategory}
      />

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
                type={card.type}
                loading="lazy"
              />
            ))
          ) : (
            <p className="alert_not_found">
              O produto "{searchTerm.toUpperCase()}" não está cadastrado em
              nosso catálogo.
            </p>
          )}

          <ButtonBackToTop />
        </Section>
      </main>
    </Container>
  );
}

export default Home;
