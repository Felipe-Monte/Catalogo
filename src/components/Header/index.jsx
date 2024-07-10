import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { Container } from "./styles";

import { Input } from "../Input";

export function Header({ title, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

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
      </div>

      <Input
        icon={FiSearch}
        placeholder="Pesquise por código ou descrição"
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  );
}
