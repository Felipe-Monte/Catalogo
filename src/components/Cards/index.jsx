import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CardImg, CardText, Container } from './styles';

const Cards = ({
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

  function handleCardClick() {
    if (isAvailable) {
      navigate(`/details/${code}`, {
        state: { category, share, imgUrl, title, code, price, type },
      });
    }
  }

  return (
    <Container className={`animeLeft ${isNew ? 'new_item' : ''}`}>
      {isNew && <p className="icon-new">NOVIDADE</p>}

      <CardImg
        onClick={handleCardClick}
        className={isAvailable ? '' : 'unavailable'}
      >
        <img
          src={imgUrl}
          alt={`Imagem de ${title}`}
          loading="lazy"
        />

        {!isAvailable && (
          <div className="unavailable-banner">Esgotado</div>
        )}
      </CardImg>

      <CardText>
        <h2>{title}</h2>

        <div className="container-category">
          <p>Cód: {code}</p>
          <p>{type}</p>
        </div>

        <div className="container-price">
          <span>{price}</span>
        </div>
      </CardText>
    </Container>
  );
};

export default Cards;
