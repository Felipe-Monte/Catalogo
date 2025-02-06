import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CardImg, CardText } from './styles';
import { FaCartPlus } from 'react-icons/fa';

const Cards = React.memo(
  ({
    category,
    share,
    imgUrl,
    title,
    code,
    price,
    isAvailable,
    isNew,
    type,
  }) => {
    const navigate = useNavigate();
    const [imageLoaded, setImageLoaded] = useState(false);

    function handleCardClick() {
      if (isAvailable) {
        navigate(`/details/${code}`, {
          state: { category, share, imgUrl, title, code, price, type },
        });
      }
    }

    return (
      <Container
        onClick={handleCardClick}
        className={`${isAvailable ? '' : 'unavailable'} ${
          isNew ? 'new_item' : ''
        }`}
      >
        <p className="icon-new">NOVIDADE</p>
        <CardImg>
          {!imageLoaded && (
            <img
              id="loader"
              src="/spinner.svg"
              alt="loading spinner"
              loading="lazy"
            />
          )}
          <img
            src={imgUrl}
            alt={`Imagem de ${title}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          {!isAvailable && <div className="unavailable-banner">Esgotado</div>}
        </CardImg>

        <CardText>
          <h2>{title}</h2>

          <div className="container-category">
            <p>Cód: {code}</p>
            {/* <p className="p-category">{category}</p> */}
            <p>{type}</p>
          </div>

          <div className="container-price">
            {' '}
            <button className="btnAddCart">
              <FaCartPlus size={18}/>
            </button>
            <span>{price}</span>
          </div>

          {/* <p id="share">{share}</p> */}
        </CardText>
      </Container>
    );
  },
);

export default Cards;
