import './navigation.scss';
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <NavLink
            to="/"
            className="navigation__link"
          >
            Рецепты
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            to="recipes-constructor"
            className="navigation__link"
          >
            Конструктор
          </NavLink>
        </li>
        <li className="navigation__list-item">
          <NavLink
            to="about"
            className="navigation__link"
          >
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
