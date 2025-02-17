import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

import { Input } from '../Input';
import SideBar from '../sideBar';

export function Header({ title, onSearch, categorySelected }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <Container>
      <div className="container_header">
        <div className="container-title">
          <h1>{title}</h1>
        </div>

        <p className="filter-text filter-mobile">
          Filtrando por: <span>{categorySelected}</span>
        </p>

        <SideBar />
      </div>

      <Input
        icon={FiSearch}
        placeholder="Buscar produto"
        value={searchTerm}
        onChange={handleChange}
      />

      <p className="filter-text filter-desktop">
        Filtrando por: <span>{categorySelected}</span>
      </p>

     
    </Container>
  );
}
