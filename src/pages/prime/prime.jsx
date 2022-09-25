import './prime.scss';
import banner from '../../assets/images/banner.jpg';
import RecipeTypes from "../../components/recipe-types/recipe-types";

const Prime = () => {
  return (
    <section className="prime">
      <img
        src={banner}
        alt="Баннер со слоганом и корзиной фруктов"
        className="prime__banner"
      />
      <RecipeTypes/>
    </section>
  );
};

export default Prime;
