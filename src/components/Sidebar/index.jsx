import { Container, Content} from "./styles"
import { FaTimes } from "react-icons/fa"

export function Sidebar({ active }) {
  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container>
      <FaTimes onClick={closeSidebar}/>
      <Content>

      </Content>
    </Container>
  )
}