import React from 'react';
import { Container } from './styles';
import CategoryIcon from '../CategoryIcon';
import jsonData from '../../products.json';

const FilterCategory = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = React.useState('Todos');

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
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <Container>
      <ul>
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
