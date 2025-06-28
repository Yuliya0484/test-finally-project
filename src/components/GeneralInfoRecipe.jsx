import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/recipes/operations";

export default function GeneralInfoRecipe({
  mockRecipe: { category, time, calories, id, isFavourite },
}) {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = async () => {
    setLoading(true);

    // if (!isLoggedIn) {
    //   navigate("/login");
    //   return;
    // } коли буде авторизація

    try {
      if (isFavourite) {
        await dispatch(removeFromFavorites(id)).unwrap();
      } else {
        await dispatch(addToFavorites(id)).unwpap();
      }
    } catch (err) {
      alert(err || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
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
      <button onClick={handleToggle} disabled={loading}>
        {loading ? "Loading..." : isFavourite ? "Remove" : "Save"}
      </button>
    </div>
  );
}
