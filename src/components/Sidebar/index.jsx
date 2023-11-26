import { Container, Content} from "./styles"
import { FaTimes,FaFileUpload } from "react-icons/fa"

import { SidebarItem } from "../SidebarItem"

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container>
      <FaTimes onClick={closeSidebar}/>
      <Content>
        {/* <SidebarItem Icon={FaFileUpload} text="Adicionar produto"/> */}
      </Content>
    </Container>
  )
}