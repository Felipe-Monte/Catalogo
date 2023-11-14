import React, { useState } from 'react';

import { Container } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { api } from '../../services/api';

export function AddCard() {
  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');

  const handleAddImg = (event) => {
    const file = event.target.files[0];
    setAvatarFile(file);
    setAvatar(URL.createObjectURL(file));
  };

  const handleNewCard = async (e) => {
    e.preventDefault();

    if (!avatarFile || !title || !code || !price) {
      return alert('Preencha todos os campos');
    }

    const formData = new FormData();
    formData.append('upload', avatarFile);
    formData.append('title', title);
    formData.append('code', code);
    formData.append('price', price);


    try {
      const response = await api.post("/cards/upload", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(response.data);
      alert('Imagem enviada com sucesso!');

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar o formulário');
    }
  };

  return (
    <Container>
      <Header title="Adicionar novo produto" />

      <form encType="multipart/form-data">

        <div className="container_input">
          <input
            type="file"
            name='upload'
            className="input_img"
            onChange={handleAddImg} />

          <img
            src={avatar}
            alt="Preview"
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

          <button
            type="submit"
            onClick={handleNewCard}
          >
            Enviar
          </button>
        </div>
      </form>

    </Container>
  );
}
