export default function AboutRecipe({ recipe: { description } }) {
  return (
    <div>
      <h3>About recipe</h3>
      <p>{description}</p>
    </div>
  );
}
