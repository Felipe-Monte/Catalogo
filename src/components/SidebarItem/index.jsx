import { Container } from "./styles";

export function SidebarItem({ Icon, text }) {
  return (
    <Container to="/add">
      <Icon/>
      {text}
    </Container>  
  )
}