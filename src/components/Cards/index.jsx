import React, { useState, useEffect } from "react"
import { ColorRing } from  'react-loader-spinner'
import { Container, CardImg, CardText } from "./styles"
import { useNavigate } from "react-router-dom"

export function Cards({ imgUrl, title, code, price, onLoad }) {
  const navigate = useNavigate()
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = imgUrl
    image.onload = () => {
      setImageLoaded(true)
      onLoad()
    }
    image.onerror = () => {
      onLoad()
    }

    return () => {
      image.onload = null
      image.onerror = null
    }
  }, [imgUrl, onLoad])

  function handleCardClick() {
    navigate(`/details/${code}`, { state: { imgUrl, title, code, price } })
  }

  return (
    <Container onClick={handleCardClick}>
      <CardImg>
        {imageLoaded ? (
          <img src={imgUrl} alt={`Imagem de ${title}`} />
        ) : (
          <ColorRing
              visible={true}
              height="50"
              width="50"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#483D8B', '#483D8B', '#483D8B', '#483D8B', '#483D8B']}
          />
        )}
      </CardImg>

      <CardText>
        <h2>{title}</h2>
        <p>Cód: {code}</p>
        <span>{price}</span>
      </CardText>
    </Container>
  )
}


























