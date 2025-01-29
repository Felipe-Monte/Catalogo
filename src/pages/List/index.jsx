import React from 'react';
import { Container } from './styles';
import jsonData from '../../products.json';
import { jsPDF } from 'jspdf';

const List = () => {
  const [list, setList] = React.useState('');

  function handleSearch() {
    if (!list.trim()) {
      alert('Por favor, insira os códigos dos produtos.');
      return;
    }

    if (isNaN(list)) {
      alert('Apenas valores numéricos');
      setList('');
      return;
    }

    const codes = list
      .split('\n')
      .map((code) => code.trim())
      .filter((code) => code !== '');

    const doc = new jsPDF();

    // Contar a quantidade de itens
    const totalItems = codes.length;

    // Contar a quantidade de itens não encontrados
    const notFoundCount = codes.filter((code) => {
      const foundProduct = jsonData.find(
        (item) => item.code.toLowerCase() === code.toLowerCase(),
      );
      return !foundProduct;
    }).length;

    // Definir fonte 'helvetica'
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    // Título do PDF com a quantidade de itens e itens não encontrados ao lado
    doc.setTextColor(0, 0, 0); // Cor preta
    doc.setFontSize(16);
    doc.text(
      `Relatório de Produtos (${totalItems} itens, ${notFoundCount} não encontrados)`,
      20,
      20,
    );

    // Posição inicial para o conteúdo
    let yPosition = 30;

    codes.forEach((code) => {
      const foundProduct = jsonData.find(
        (item) => item.code.toLowerCase() === code.toLowerCase(),
      );

      if (foundProduct) {
        doc.setTextColor(0, 0, 0); // Cor preta para produto encontrado
        doc.setFontSize(12);
        doc.text(
          `Cód: ${foundProduct.code} | Nome: ${foundProduct.title} | R$${foundProduct.price}`,
          20,
          yPosition,
        );
      } else {
        doc.setTextColor(204, 0, 0); // Cor vermelha para produto não encontrado
        doc.setFontSize(12);
        doc.text(`Cód: ${code} - Produto não encontrado`, 20, yPosition);
      }
      yPosition += 10; // Incrementa a posição para o próximo item
    });

    // Gerar o PDF
    doc.save('relatorio_produtos.pdf');
  }

  return (
    <Container>
      <h1>Listagem de mercadoria</h1>

      <textarea
        placeholder="Digite os códigos dos produtos (um por linha), Insira apenas valores numéricos !"
        value={list}
        onChange={(e) => setList(e.target.value)}
      ></textarea>

      <button onClick={handleSearch}>Gerar PDF</button>
    </Container>
  );
};

export default List;
