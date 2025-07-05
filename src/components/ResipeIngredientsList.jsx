export default function RecipeIngredientsList({ recipe: { ingredients } }) {
  return (
    <div>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map(({ id, measure }) => (
          <li key={id}>
            {id} - {measure}
          </li>
        ))}
      </ul>
    </div>
  );
}
