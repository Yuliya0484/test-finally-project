export default function PreparationRecipe({ instructions }) {
  if (!instructions) return null;

  const steps = instructions.split("\n").filter((step) => step.trim() !== "");
  return (
    <div>
      <h3>Preparation Steps:</h3>
      {steps.map((step, index) => (
        <p key={index}>{step}</p>
      ))}
    </div>
  );
}
