import './constructor.scss';
import IngredientsList from "../../components/ingredients-list/ingredients-list";
import IngredientsStub from "../../components/ingredients-stub/ingredients-stub";
import IngredientsConstructor from "../../components/ingredients-constructor/ingredients-constructor";

const Constructor = () => {
  return (
    <section className="constructor">
      <IngredientsList/>
      <IngredientsStub />
    </section>
  );
};

export default Constructor;
