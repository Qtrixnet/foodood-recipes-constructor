import './recipes-list.scss';
import {Link} from "react-router-dom";
import RecipeCard from "../recipe-card/recipe-card";

const recipes = [
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
  {
    title: 'Домашняя шарлотка',
    text: 'Donec nec metus varius, sodales leo a, auctor sem. Aenean quis metus eu erat mollis euismod. Donec est leo, pretium eu dolor at, scelerisque efficitur libero. Proin  nisi purus, gravida ac sapien sit amet, ',
    category: 'Сладкое',
    image: 'https://attuale.ru/wp-content/uploads/2017/09/HWiEaw4A1PJeNp7wtsKTM9Pe.jpeg'
  },
]

const RecipesList = () => {
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
