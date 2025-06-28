export default function AboutRecipe({ mockRecipe: { description } }) {
  return (
    <div>
      <h3>About recipe</h3>
      <p>{description}</p>
    </div>
  );
}
