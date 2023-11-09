import { Container } from "./styles";

export function SidebarItem({ Icon, text }) {
  return (
    <Container>
      <Icon/>
      {text}
    </Container>  
  )
}