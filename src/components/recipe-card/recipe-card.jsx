import './recipe-card.scss';
import {Link} from "react-router-dom";

const RecipeCard = ({data}) => {
  const {title, text, image, category} = data;

  return (
    <li className="recipe-card">
      <Link
        className="recipe-card__link"
        to="about"
      >
        <img
          className="recipe-card__image"
          src={image}
          alt={title}
        />
        <div className="recipe-card__container">
          <h3 className="recipe-card__title">{title}</h3>
          <p className="recipe-card__text">{text}</p>
          <div className="recipe-card__wrapper">
            <span className="recipe-card__category">{category}</span>
            <span className="recipe-card__details">
              Подробнее
              <span className="recipe-card__details-icon"/>
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default RecipeCard;
