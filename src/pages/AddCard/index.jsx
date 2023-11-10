import { Container } from './styles'
import { FiArrowLeft } from "react-icons/fi"

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import { api } from '../../services/api'

export function AddCard() {
  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")
  const [price, setPrice] = useState("")

  const navigate = useNavigate()

  async function handleNewCard(e) {
    e.preventDefault()

    if (!title || !code || !price) {
      return alert("Preencha os campos")
    }

    try {
      await api.post("/cards", {
        title,
        code,
        price
      })

      alert("Produto cadastrado !")
      navigate("/")

    } catch (error) {
      console.error("Error ao adicionar um novo produto:", error)
    }
  }

  return (
    <Container>
      <Header title="Adicionar novo produto" />

      <form>

        <div className='container_input'>
          <Input type="file" className="input_img"/>
        </div>

        <div className='container_input'>
          <Input placeholder="Título" />
          {/* <label htmlFor="title">Título:</label>
          <input
            type="text"
            id='title'
            placeholder='Descrição do produto'
            onChange={e => setTitle(e.target.value)} /> */}
        </div>

        <div className='container_input'>
          <Input placeholder="Código do produto" />
          {/* <label htmlFor="code">Código:</label>
          <input
            type="text"
            id='code'
            placeholder='Cód: 00000'
            onChange={e => setCode(e.target.value)} /> */}
        </div>

        <div className='container_input'>
          <Input placeholder="Preço"/>
          {/* <label htmlFor="price">Preço:</label>
          <input
            type="text"
            id='price'
            placeholder='R$: 00,00'
            onChange={e => setPrice(e.target.value)} /> */}
        </div>

        <div className='container_button'>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>

          <button
            type='submit'
            onClick={handleNewCard}
          >
            Enviar
          </button>
        </div>

      </form>

    </Container>
  )
} 