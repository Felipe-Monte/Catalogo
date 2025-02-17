import React from 'react';
import { Container, Button, SideBarContainer } from './styles';
import { BsCartCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

function SideBar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    console.log('clicou');
  }

  return (
    <Container className="sideBar" onClick={handleClick}>
      <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes size={25} /> : <BsCartCheck size={25} />}
      </Button>

      <SideBarContainer $isOpen={isOpen}>
        <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={25} /> : <BsCartCheck size={25} />}
        </Button>
        <div className='cart-text'>
          <h2>Carrinho</h2>
          <p>Carrinho indisponivel no momento, estamos trabalhando nisso!</p>
        </div>
      </SideBarContainer>
    </Container>
  );
}

export default SideBar;
