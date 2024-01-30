import { Container, CardImg, CardText } from "./styles";
import { MdAddCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Cards({
  category,
  share,
  imgUrl,
  title,
  code,
  price,
  isAvailable,
  isNew,
}) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleCardClick() {
    if (isAvailable) {
      navigate(`/details/${code}`, {
        state: { category, share, imgUrl, title, code, price },
      });
    }
  }

  return (
    <Container
      onClick={handleCardClick}
      className={`${isAvailable ? "" : "unavailable"} ${
        isNew ? "new_item" : ""
      }`}
    >
      <MdAddCircle className="icon-new" />
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
          <p className="p-category">{category}</p>
        </div>

        <span>{price}</span>
        <p id="share">{share}</p>

        {isAvailable && <p id="in_stock">Em estoque</p>}
      </CardText>
    </Container>
  );
}
