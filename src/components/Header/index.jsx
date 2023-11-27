import { useState } from "react"
import { FiSearch } from 'react-icons/fi'
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
      <h1>{title}</h1>

      <Input
        icon={FiSearch}
        placeholder="Buscar itens"
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  )
}