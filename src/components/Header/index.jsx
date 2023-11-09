import { useState } from "react"
import { Container } from "./styles"

import { FiAlignJustify } from 'react-icons/fi'

export function Header({ title }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <h1>{title}</h1>

      <FiAlignJustify onClick={showSidebar}/>
    </Container>
  )
}