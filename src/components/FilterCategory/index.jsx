import React from 'react'
import { Container } from './styles'

import jsonData from "../../products.json";

const FilterCategory = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const uniqueCategories = [...new Set(jsonData.map(product => product.category))].sort()

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <Container>
      <ul>
        <li
          onClick={() => handleCategoryClick("Todos")}
          className={activeCategory === "Todos" ? "active" : ""}
        >
          Todos
        </li>
        {uniqueCategories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(category)}
            className={activeCategory === category ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default FilterCategory
