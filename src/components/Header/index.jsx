import { useState } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";
import { Container } from "./styles";

import { Input } from "../Input";

export function Header({ title, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleDownload = () => {
    const pdfUrl = "../../../public/lista de mercadoria.pdf"

    const link = document.createElement("a")
    link.href = pdfUrl

    link.download = "lista de mercadoria"
    link.click()
  }

  return (
    <Container>
      <div className="container-title">
        <h1>{title}</h1>
      </div>

      <Input
        icon={FiSearch}
        placeholder="Buscador"
        value={searchTerm}
        onChange={handleChange}
      />

      <div className="container-icon-filter">
        <FaFileDownload onClick={handleDownload}/>
      </div>
    </Container>
  );
}
