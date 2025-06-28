import AboutRecipe from "./AboutRecipe";
import GeneralInfoRecipe from "./GeneralInfoRecipe";
import RecipeIngredientsList from "./ResipeIngredientsList";
import PreparationRecipe from "./PreparationRecipe";

export default function RecipeDetails({ mockRecipe: { title, thumb } }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={thumb} alt={`Photo of ${title}`} />
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
