import { useState } from "react"
import { FiSearch, FiFilter } from 'react-icons/fi'
import { Container } from "./styles"

import { Input } from "../Input"

export function Header({ title, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleChange = (event) => {
    const term = event.target.value
    setSearchTerm(term)
    onSearch(term)
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
        <FiFilter />
      </div>
    </Container>
  )
}