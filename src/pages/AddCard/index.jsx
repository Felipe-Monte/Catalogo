import { Container } from './styles'

import { Header } from '../../components/Header'

export function AddCard() {
  return (
    <Container>
      <Header title="Adicionar novo produto" />
      
      <form action="">

        <div className='container_input'>
          <label htmlFor="image">Imagem:</label>
          <input type="file" id='image'/>
        </div>

        <div className='container_input'>
          <label htmlFor="title">Título:</label>
          <input type="text" id='title' placeholder='Descrição do produto'/>
        </div>

        <div className='container_input'>
          <label htmlFor="code">Código:</label>
          <input type="text" id='code' placeholder='Cód: 00000'/>
        </div>

        <div className='container_input'>
          <label htmlFor="price">Preço:</label>
          <input type="text" id='price' placeholder='R$: 00,00'/>
        </div>

        <button>Enviar</button>
      </form>

    </Container>
  )
} 