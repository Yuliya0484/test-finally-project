// import { useParams } from "react-router-dom";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchRecipeById } from "../redux/operations";
// //import { selectRecipe, selectIsLoading, selectError } from '../../redux/recipes/selectors';
// import { Loader } from "../components/Loader/Loader";
// import { NotFound } from "../pages/NotFound";
// import { RecipeDetails } from "../components/RecipeDetails/RecipeDetails";

// export default function RecipeViewPage() {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   //const recipe = useSelector(selectRecipe);
//   //const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchRecipeById(id));
//   }, [dispatch, id]);
//   if (isLoading) return <Loader />;
//   if (error || !recipe) return <NotFound />;
//   return <RecipeDetails recipe={recipe} />;
// }
////////////////////////////////////////
import { RecipeDetails } from "../components/RecipeDetails/RecipeDetails";

export default function RecipeViewPage() {
  return (
    <>
      <RecipeDetails />
    </>
  );
}
