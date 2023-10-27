import { Container } from "./styles"

import { HamburgerMenu } from '../HamburgerMenu'

export function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>

      <HamburgerMenu />
    </Container>
  )
}