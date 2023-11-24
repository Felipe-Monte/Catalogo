import { Container, Section } from "./styles"
import { FiSearch } from 'react-icons/fi'
import { ColorRing } from  'react-loader-spinner'
import { useState, useEffect } from "react"
import { Header } from "../../components/Header"
import { Cards } from "../../components/Cards"
import { Input } from '../../components/Input'
import { api } from "../../services/api" 

export function Home() {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [imageLoading, setImageLoading] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/cards") 
        setCards(response.data)
        setLoading(false)
      } catch (error) {
        console.log("Error na requisição:", error)
        setLoading(false)  
      }
    }

    fetchData()
  }, [])

  const handleImageLoad = (index) => {
    const newImageLoading = [...imageLoading]
    newImageLoading[index] = false
    setImageLoading(newImageLoading)
  }

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(search.toLowerCase()) ||
    card.code.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <Container>
      <Header
        title="Catálogo de produtos"
      />

      <Input
        icon={FiSearch}
        placeholder="Pesquisar por nome ou código"
        onChange={(e) => setSearch(e.target.value)}
      />

      <main>
        <Section>
          {loading ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#483D8B', '#483D8B', '#483D8B', '#483D8B', '#483D8B']}
          />
          ) : (
            filteredCards.map((card, index) => (
              <Cards
                key={card.id}
                imgUrl={`${api.defaults.baseURL}/files/${card.imgUrl}`}
                title={card.title}
                code={card.code}
                price={`R$: ${card.price}`}
                onLoad={() => handleImageLoad(index)}
              />
            ))
          )}
        </Section>
      </main>
    </Container>
  )
}


































// MY CODE :
// import { Container, Section } from "./styles"
// import { FiSearch } from 'react-icons/fi'

// import { useState, useEffect } from "react"

// import { Header } from "../../components/Header"
// import { Cards } from "../../components/Cards"
// import { Input } from '../../components/Input'

// import { api } from "../../services/api"

// import jsonData from "../../products.json"

// export function Home() {
//   // const [cards, setCards] = useState([])
//   // const [search, setSearch] = useState('')

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     try {
//   //       const response = await api.get("/cards")
//   //       setCards(response.data)
//   //     } catch (error) {
//   //       console.log("Error na requisição:", error)
//   //     }
//   //   }

//   //   fetchData()
//   // }, [])

//   // const filteredCards = cards.filter(card =>
//   //   card.title.toLowerCase().includes(search.toLowerCase()) ||
//   //   card.code.toLowerCase().includes(search.toLowerCase())
//   // )

//   return (
//     <Container>
//       <Header
//         title="Catálogo de produtos"
//       />

//       <Input
//         icon={FiSearch}
//         placeholder="Pesquisar por nome ou código"
//         // onChange={(e) => setSearch(e.target.value)}
//       />

//       <main>
//         <Section>

//         {/* filteredCards */}

//           {jsonData.map((card) => (
//             <Cards
//               key={card.id}
//               imgUrl={card.imgUrl}
//               title={card.title}
//               code={card.code}
//               price={`R$: ${card.price}`}
//             />
//           ))}
//         </Section>
//       </main>

//       {/* ${api.defaults.baseURL}/files/${card.imgUrl} */}

//       {/* <Footer /> */}
//     </Container>
//   )
// }
