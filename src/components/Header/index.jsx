import { Container } from "./styles"

import { FiAlignJustify } from 'react-icons/fi'

export function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>

      <FiAlignJustify/>
    </Container>
  )
}