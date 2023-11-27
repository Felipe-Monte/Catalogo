import { useState } from "react"
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
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleChange}
      />
    </Container>
  )
}