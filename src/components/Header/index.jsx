import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFilterCircleXmark } from "react-icons/fa6";
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
        <div className="container-icon-filter">
          <RxHamburgerMenu />
        </div>

        <div className="container-title">
          <h1>{title}</h1>
        </div>

        <div className="container-icon-filter">
          <FaFilterCircleXmark />
        </div>
      </div>

      <Input
        icon={FiSearch}
        placeholder="Buscador"
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  );
}
