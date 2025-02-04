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

    const cleanedList = list.replace(/\s+/g, '');
    if (!/^\d+$/.test(cleanedList)) {
      alert('Por favor, insira apenas números.');
      return;
    }

    const codes = list
      .split('\n')
      .map((code) => code.trim())
      .filter((code) => code !== '');

    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    const lineSpacing = 9;
    let yPosition = margin + 9;

    const totalItems = codes.length;

    const notFoundCount = codes.filter((code) => {
      return !jsonData.find(
        (item) => item.code.toLowerCase() === code.toLowerCase(),
      );
    }).length;

    // Cabeçalho do PDF
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(20);
    doc.setTextColor(0, 0, 0);
    doc.text(
      `Relatório de Produtos (${totalItems} itens, ${notFoundCount} não encontrados)`,
      20,
      margin,
    );

    // Iteração sobre os códigos
    codes.forEach((code, index) => {
      const foundProduct = jsonData.find(
        (item) => item.code.toLowerCase() === code.toLowerCase(),
      );

      if (foundProduct) {
        doc.setTextColor(0, 0, 0);
        doc.setFontSize(12);
        doc.text(
          `Cód: ${foundProduct.code} | Nome: ${foundProduct.title} | R$: ${foundProduct.price}`,
          20,
          yPosition,
        );
      } else {
        doc.setTextColor(204, 0, 0);
        doc.setFontSize(12);
        doc.text(
          `Cód: ${code} - Produto não encontrado no catálogo`,
          20,
          yPosition,
        );
      }

      yPosition += lineSpacing;

      if (yPosition > pageHeight - margin) {
        doc.addPage();
        yPosition = margin;
      }
    });

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
