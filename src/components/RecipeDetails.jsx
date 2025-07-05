import AboutRecipe from "./AboutRecipe";
import GeneralInfoRecipe from "./GeneralInfoRecipe";
import RecipeIngredientsList from "./ResipeIngredientsList";
import PreparationRecipe from "./PreparationRecipe";

export default function RecipeDetails({ recipe }) {
  const {
    title,
    photo,
    category,
    time,
    calories,
    description,
    ingredients,
    instructions,
  } = recipe;
  return (
    <section>
      <h2>{title}</h2>
      <img src={photo} alt={`Photo of ${title}`} />
      <div>
        <GeneralInfoRecipe
          category={category}
          time={time}
          calories={calories}
        />
        <AboutRecipe description={description} />
        <RecipeIngredientsList ingredients={ingredients} />
        <PreparationRecipe instructions={instructions} />
      </div>
    </section>
  );
}
