// import { recipe } from "../../../mockRecipe.json";
// import s from "./RecipeDetails.css";
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { addToFavorites, removeFromFavorites } from '../../redux/operations';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

// export default function RecipeDetails({recipe}) {
//   const {
//     title,
//     photo,
//     description,
//     ingredients,
//     instructions,
//     category,
//     time,
//     calories,
//     isFavorite,
//     id,
//   } = recipe;

//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleFavoriteClick = () => {
//     if (!isLoggedIn) {
//       navigate('/login');
//       return;
//     }
//     if (isFavorite) {
//       dispatch(removeFromFavorites(id));
//     } else {
//       dispatch(addToFavorites(id));
//     }
//   };

//   return (
//     <div className={s.recipeContainer}>
//       <h2 className={s.recipeTitle}>{title}</h2>
//       <img className={s.recipePicture} src={photo} alt={`Photo of ${title}`} />
//       <div className={s.descriptionContainer}>
//         <div className={s.aboutRecipeBox}>
//           <div>
//             <h3 className={s.aboutRecipeTitle}>About recipe</h3>
//             <p>{description}</p>
//           </div>
//           <div>
//             <h3 className={s.aboutRecipeTitle}>Ingredients:</h3>
//             <ul>
//               {ingredients.map(({name, amount}) => (
//                 <li key={name}>
//                   {name} - {amount}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div>
//             <h3 className={s.aboutRecipeTitle}>Preparation Steps:</h3>
//             <p>{instructions}</p>
//           </div>
//         </div>
//         <div className={s.informationsBox}>
//           <h4 className={s.informationsTitle}>General informations</h4>
//           <p className={s.informationsText}>
//             Category: <span>{category}</span>
//           </p>
//           <p className={s.informationsText}>
//             Cooking time: <span>{time} min</span>
//           </p>
//           <p className={s.informationsText}>
//             Caloric content: <span>{calories} kcal</span>
//           </p>
//           <button onClick={handleFavoriteClick}>
//             {isFavorite ? 'Remove : 'Add'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
/////////////////////////////////////////
import mockRecipe from "../../../mockRecipe.json";

export default function RecipeDetails() {
  const {
    id,
    title,
    photo,
    describe,
    ingredients,
    instructions,
    category,
    time,
    calories,
    isFavourite,
  } = mockRecipe;

  return (
    <div>
      <h2>{title}</h2>
      <img src={photo} alt={`Photo of ${title}`} />
      <div>
        <div>
          <div>
            <h3>About recipe</h3>
            <p>{describe}</p>
          </div>
          <div>
            <h3>Ingredients:</h3>
            <ul>
              {ingredients.map(({ name, amount }) => (
                <li key={id}>
                  {name} - {amount}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Preparation Steps:</h3>
            <p>{instructions}</p>
          </div>
        </div>
        <div>
          <h4>General informations</h4>
          <p>
            Category: <span>{category}</span>
          </p>
          <p>
            Cooking time: <span>{time} minutes</span>
          </p>
          <p>
            Caloric content: <span>{calories} kcal</span>
          </p>
          {isFavourite ? <a href="#">Delete</a> : <a href="#">Save</a>}
        </div>
      </div>
    </div>
  );
}
