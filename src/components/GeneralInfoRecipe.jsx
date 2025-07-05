import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/recipes/operations";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export default function GeneralInfoRecipe({
  category,
  time,
  calories,
  id,
  isFavourite,
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleToggle = async () => {
    if (!isLoggedIn) {
      toast.info("Please log in to save recipes");
      navigate("/login");
      return;
    }
    setLoading(true);

    try {
      if (isFavourite) {
        await dispatch(removeFromFavorites(id)).unwrap();
        toast.success("Recipe added to favorites");
      } else {
        await dispatch(addToFavorites(id)).unwrap();
        toast.success("Recipe added to favorites");
      }
    } catch (err) {
      toast.error(err?.message || "Something went wrong");
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
