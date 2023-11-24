import React, { useState } from 'react'

import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { api } from '../../services/api'

export function AddCard() {
  const [avatar, setAvatar] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [price, setPrice] = useState('')

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAddImg = (event) => {
    const file = event.target.files[0]
    setAvatarFile(file)
    setAvatar(URL.createObjectURL(file))
  }

  const handleNewCard = async (e) => {
    e.preventDefault()

    if (!avatarFile || !title || !code || !price || isSubmitting) {
      return alert('Preencha todos os campos e aguarde o cadastro terminar')
    }

    setIsSubmitting(true)

    const formData = new FormData()
    formData.append('upload', avatarFile)
    formData.append('title', title)
    formData.append('code', code)
    formData.append('price', price)

    try {
      const response = await api.post("/cards/upload", formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      console.log(response.data)
      alert('Produto cadastrado com sucesso!')

      setAvatar(null)
      setAvatarFile(null)
      setTitle('')
      setCode('')
      setPrice('')

    } catch (error) {
      console.error('Erro ao enviar o formulário:', error)
      alert('Erro ao enviar')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <Header title="Adicionar novo produto" />

      <form encType="multipart/form-data">

        <div className="container_input">
          <input
            type="file"
            id="upload"
            name='upload'
            className="input_img"
            onChange={handleAddImg} />

          <label htmlFor="upload" className='label_img'>
            <img
              src={avatar}
              alt="Preview"
            />
          </label>

        </div>

        <div className="container_input_text">
          <Input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Código do produto"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <Input
            placeholder="Preço"
            value={price}
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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </div>

      </form>

    </Container>
  )
}
