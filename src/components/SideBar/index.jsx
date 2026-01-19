import { useState } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { Button, Container, SideBarContainer } from './styles';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="sideBar">
      <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <BsCartCheck size={25} />}
      </Button>

      <SideBarContainer $isOpen={isOpen}>
        <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <BsCartCheck size={25} />}
        </Button>
        <div className="cart-text">
          <h2>Carrinho</h2>
          <p>Carrinho indisponível no momento, estamos trabalhando nisso!</p>
        </div>
      </SideBarContainer>
    </Container>
  );
}

export default SideBar;
