import React from 'react';
import { Container, Button, SideBarContainer } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </Button>

      <SideBarContainer $isOpen={isOpen}>
        <h2>Carrinho</h2>
      </SideBarContainer>
    </Container>
  );
}

export default SideBar;
