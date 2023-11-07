import { Container } from './styles'

import { Header } from '../../components/Header'
import { useState } from 'react'

export function AddCard() {
  const [title, setTitle] = useState("")
  const [code, setCode] = useState("")
  const [price, setPrice] = useState("")

  async function handleNewCard(){

  }

  return (
    <Container>
      <Header title="Adicionar novo produto" />

      <form>

        <div className='container_input'>
          <label htmlFor="image">Imagem:</label>
          <input
            type="file"
            id='image'
          />
        </div>

        <div className='container_input'>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id='title'
            placeholder='Descrição do produto'
            onChange={e => setTitle(e.target.value)} />
        </div>

        <div className='container_input'>
          <label htmlFor="code">Código:</label>
          <input
            type="text"
            id='code'
            placeholder='Cód: 00000'
            onChange={e => setCode(e.target.value)} />
        </div>

        <div className='container_input'>
          <label htmlFor="price">Preço:</label>
          <input
            type="text"
            id='price'
            placeholder='R$: 00,00' 
            onChange={e => setPrice(e.target.value)}/>
        </div>

        <button>Enviar</button>
      </form>

    </Container>
  )
} 