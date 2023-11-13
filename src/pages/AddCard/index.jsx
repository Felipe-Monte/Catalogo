import React, { useState } from 'react';
import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

export function AddCard() {
  const [imgUrl, setImgUrl] = useState(null)

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [price, setPrice] = useState('')

  const navigate = useNavigate()

  async function handleNewCard(e) {
    e.preventDefault();

    if (!imgUrl || !title || !code || !price) {
      return alert('Preencha todos os campos');
    }

    try {
      await api.post('/cards', {
        imgUrl,
        title,
        code,
        price,
      });

      alert('Produto cadastrado!');
      // navigate('/');

    } catch (error) {
      console.error('Erro ao adicionar um novo produto:', error);
    }
  }

  return (
    <Container>
      <Header title="Adicionar novo produto" />

      <form>
        <div className="container_input">
          <input
            type="file"
            name='image'
            className="input_img"
            onChange={(e) => setImgUrl(e.target.files[0])}
          />
        </div>

        <div className="container_input">
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="container_input">
          <Input
            placeholder="Código do produto"
            onChange={(e) => setCode(e.target.value)}
          />
        </div>

        <div className="container_input">
          <Input
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="container_button">
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <button type="submit" onClick={handleNewCard}>
            Enviar
          </button>
        </div>
      </form>
    </Container>
  );
}
