import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchRecipeById } from "../redux/recipes/recipeSlice";
import {
  selectRecipe,
  selectIsLoading,
  selectError,
} from "../redux/recipes/selectors";

import RecipeDetails from "../components/RecipeDetails";
import NotFound from "../components/NotFound";
import Loader from "../components/Loader";

export default function RecipeViewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const recipe = useSelector(selectRecipe);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;
  if (error || !recipe) return <NotFound />;

  return <RecipeDetails recipe={recipe} />;
}
