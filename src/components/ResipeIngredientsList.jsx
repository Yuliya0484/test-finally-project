import { useSelector } from "react-redux";
import { selectIngredientsList } from "../redux/ingredients/selectors";

export default function RecipeIngredientsList({ ingredients }) {
  const allIngredients = useSelector(selectIngredientsList);

  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map(({ id, measure }) => {
          const found = allIngredients.find(
            (ingredient) => ingredient._id === id
          );
          return (
            <li key={id}>
              {found?.name || "Unknown"} - {measure}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
