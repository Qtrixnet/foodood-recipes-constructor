import './recipes-list.scss';
import RecipeCard from "../recipe-card/recipe-card";
import {useSelector} from "react-redux";

const RecipesList = () => {
  const recipes = useSelector(state => state.recipesInfo.recipes);

  return (
    <ul className="recipes-list">
      {
        recipes.map((recipe, idx) => (
          <RecipeCard
            key={idx}
            data={recipe}
          />
        ))
      }
    </ul>
  );
};

export default RecipesList;
