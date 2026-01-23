import { useContext, useState } from 'react';
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const { addToCart } = useContext(UserContext);

  function handleCardClick() {
    if (isAvailable) {
      navigate(`/details/${code}`, {
        state: { category, share, imgUrl, title, code, price, type },
      });
    }
  }

  function handleCartClick(e) {
    e.stopPropagation();
    const item = {
      code,
      title,
      price,
    };

    addToCart(item);
  }

  return (
    <Container className={`animeLeft ${isNew ? 'new_item' : ''}`}>
      {isNew && <p className="icon-new">NOVIDADE</p>}
      <CardImg
        onClick={handleCardClick}
        className={isAvailable ? '' : 'unavailable'}
      >
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
          onError={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
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
          <button className="btnAddCart" onClick={handleCartClick}>
            <FaCartPlus size={18} />
          </button>
          <span>{price}</span>
        </div>

        {/* <p id="share">{share}</p> */}
      </CardText>
    </Container>
  );
};

export default Cards;
