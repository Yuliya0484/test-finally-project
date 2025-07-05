import AboutRecipe from "./AboutRecipe";
import GeneralInfoRecipe from "./GeneralInfoRecipe";
import RecipeIngredientsList from "./ResipeIngredientsList";
import PreparationRecipe from "./PreparationRecipe";

export default function RecipeDetails({ recipe }) {
  if (!recipe) return <Loader />;

  const { title, photo } = recipe;
  return (
    <div>
      <h2>{title}</h2>
      <img src={photo} alt={`Photo of ${title}`} />
      <div>
        <div>
          <AboutRecipe />
          <RecipeIngredientsList />
          <PreparationRecipe />
          <GeneralInfoRecipe />
        </div>
      </div>
    </div>
  );
}
