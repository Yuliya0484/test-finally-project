export default function PreparationRecipe({ recipe: { instructions } }) {
  return (
    <div>
      <h3>Preparation Steps:</h3>
      <p>{instructions}</p>
    </div>
  );
}
