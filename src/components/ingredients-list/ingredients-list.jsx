import './ingredients-list.scss';
import IngredientsSearcher from "../ingredients-searcher/ingredients-searcher";

const IngredientsList = () => {
  return (
    <section className="ingredients-list">
      <IngredientsSearcher />
      <ul className="ingredients-list__list">
        <li className="ingredients-list__list-item">
          <button className="ingredients-list__button"/>
          <span className="ingredients-list__text">Наименование ингридиента</span>
        </li>
        <li className="ingredients-list__list-item">
          <button className="ingredients-list__button"/>
          <span className="ingredients-list__text">Наименование ингридиента</span>
        </li>
        <li className="ingredients-list__list-item">
          <button className="ingredients-list__button"/>
          <span className="ingredients-list__text">Наименование ингридиента</span>
        </li>
      </ul>
    </section>
  );
};

export default IngredientsList;
