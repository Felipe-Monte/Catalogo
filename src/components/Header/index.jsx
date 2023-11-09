import { useState } from "react"
import { Container } from "./styles"

import { FiAlignJustify } from 'react-icons/fi'

import { Sidebar } from "../Sidebar"

export function Header({ title }) {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <Container>
      <h1>{title}</h1>

      <FiAlignJustify onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}