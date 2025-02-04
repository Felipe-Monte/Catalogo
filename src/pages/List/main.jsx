import React from 'react';
import { Container } from './styles';

const Test = () => {
  const [list, setList] = React.useState('');

  function handleSearch() {
    // Se não tiver nada no list. trim() = remover espaços vazios
    if (!list.trim()) {
      alert('Insira códigos na listagem');
      return;
    }

    // Remove todos os espaços, tabs, quebras de linha dos caracteres list
    const cleanedList = list.replace(/\s+/g, '');
    
    // Testa se não contém apenas dígitos.
    if (!/^\d+$/.test(cleanedList)) {
      alert('Digite apenas números para listagem');
      return;
    }

    console.log('ok');
  }

  return (
    <Container>
      <h1>Listagem de mercadorias</h1>

      <textarea
        placeholder="Digite os códigos dos produtos (um por linha), Insira apenas valores numéricos !"
        value={list}
        onChange={(e) => setList(e.target.value)}
      ></textarea>

      <button onClick={handleSearch}>Gerar PDF</button>
    </Container>
  );
};

export default Test;
