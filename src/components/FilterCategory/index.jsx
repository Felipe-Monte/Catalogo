import React, { useEffect, useRef, useState } from 'react';
import { Container } from './styles';
import CategoryIcon from '../CategoryIcon';
import jsonData from '../../products.json';

const FilterCategory = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const listRef = useRef(null); // 🔹 Criando referência para o <ul>

  // Obtém categorias únicas e ordenadas
  const uniqueCategories = [
    ...new Set(jsonData.map((product) => product.category)),
  ].sort();

  // Mapeia categorias para os ícones correspondentes
  const categoryIcons = {
    "todos": "todos",
    "acessórios": "acessorios",
    "alimentício": "alimenticio",
    "alumínio": "aluminio",
    "banheiro": "banheiro",
    "banho": "banho",
    "blusa": "blusa",
    "calcinha": "calcinha",
    "calça": "calca",
    "cama": "cama",
    "camisa": "camisa",
    "conjunto": "conjunto",
    "cosméticos": "cosmeticos",
    "cozinha": "cozinha",
    "cueca": "cueca",
    "dormir": "dormir",
    "infantil": "infantil",
    "perfumaria": "perfumaria",
    "rede": "rede",
    "saia": "saia",
    "short": "short",
    "sutiã": "sutia",
    "vestido": "vestido",
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      if (listRef.current) {
        // Ajustando a velocidade de rolagem horizontal
        const scrollAmount = event.deltaY * 5 // 🔹 Aumente o multiplicador para mais velocidade
        listRef.current.scrollLeft += scrollAmount;
        event.preventDefault(); // Evita o comportamento de scroll vertical
      }
    };

    const ulElement = listRef.current;
    if (ulElement) {
      ulElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (ulElement) {
        ulElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <Container>
      <ul ref={listRef}> {/* 🔹 Aplicando a referência ao <ul> */}
        <li
          onClick={() => handleCategoryClick('Todos')}
          className={activeCategory === 'Todos' ? 'active' : ''}
        >
          <CategoryIcon iconName="todos" />
          Todos
        </li>
        {uniqueCategories.map((category, index) => {
          const categoryKey = category.toLowerCase(); // Garante que a chave seja minúscula
          
          return (
            <li
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={activeCategory === category ? 'active' : ''}
            >
              {categoryIcons[categoryKey] && <CategoryIcon iconName={categoryIcons[categoryKey]} />}
              {category}
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default FilterCategory;
