import { Container } from "./styles"

import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Footer } from "../../components/Footer"

// import jsonData from "../../images/products.json"

const products = [
  {
    "id": "1",
    "imgUrl": "../../../src/images/argan.jpeg",
    "title": "Doce",
    "code": "00001",
    "price": "19,90"
  },
  {
    "id": "2",
    "imgUrl": "../../src/images/bababell.jpeg",
    "title": "Capilar bababell",
    "code": "00002",
    "price": "19,90"
  },
  {
    "id": "3",
    "imgUrl": "../../src/images/blond.jpeg",
    "title": "Blond platinum",
    "code": "00003",
    "price": "19,90"
  },
  {
    "id": "4",
    "imgUrl": "../../src/images/colonia.jpeg",
    "title": "Colônia",
    "code": "00004",
    "price": "19,90"
  },
  {
    "id": "5",
    "imgUrl": "../../src/images/doce.jpeg",
    "title": "Doce",
    "code": "00005",
    "price": "19,90"
  },
  {
    "id": "6",
    "imgUrl": "../../src/images/garrafa.jpeg",
    "title": "Garrafa",
    "code": "00006",
    "price": "19,90"
  },
  {
    "id": "7",
    "imgUrl": "../../src/images/gcareca.jpeg",
    "title": "Camisa",
    "code": "00007",
    "price": "19,90"
  },
  {
    "id": "8",
    "imgUrl": "../../src/images/gel.jpeg",
    "title": "Natgel",
    "code": "00008",
    "price": "19,90"
  },
  {
    "id": "9",
    "imgUrl": "../../src/images/maquinadecorte.jpeg",
    "title": "Maquina de corte",
    "code": "00009",
    "price": "19,90"
  },
  {
    "id": "10",
    "imgUrl": "../../src/images/massageador.jpeg",
    "title": "Massageador",
    "code": "00010",
    "price": "19,90"
  },
  {
    "id": "11",
    "imgUrl": "../../src/images/redejaguarana.jpeg",
    "title": "Rede jaguarana",
    "code": "00005",
    "price": "19,90"
  },
  {
    "id": "12",
    "imgUrl": "../../src/images/tapete.jpeg",
    "title": "Tapete",
    "code": "00006",
    "price": "19,90"
  }
]

export function Home() {
  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <main>
        {
          products.map((item) => (
            <Cards
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              code={item.code}
              price={item.price}
            />
          ))
        }
      </main>

      <Footer />
    </Container>
  )
}


