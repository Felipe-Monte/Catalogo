import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CardImg, CardText, Container } from './styles';

import { UserContext } from '../../CartContext';

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
  const { addToCart } = React.useContext(UserContext);

  function handleCardClick() {
    if (isAvailable) {
      navigate(`/details/${code}`, {
        state: { category, share, imgUrl, title, code, price, type },
      });
    }
  }

  function handleCartClick(e) {
    e.stopPropagation();
    addToCart({ code, title, price });
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
          <button className="btnAddCart" onClick={handleCartClick}>
            <FaCartPlus size={18} />
          </button>
          <span>{price}</span>
        </div>
      </CardText>
    </Container>
  );
};

export default Cards;
