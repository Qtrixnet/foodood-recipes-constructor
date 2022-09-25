import './prime.scss';
import banner from '../../assets/images/banner.jpg';
import RecipeTypes from "../../components/recipe-types/recipe-types";

const Prime = () => {
  return (
    <div className="prime">
      <img
        src={banner}
        alt="Баннер со слоганом и корзиной фруктов"
        className="prime__banner"
      />
      <RecipeTypes/>
    </div>
  );
};

export default Prime;
