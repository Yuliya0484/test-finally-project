import { Routes, Route } from "react-router-dom";
import RecipeViewPage from "./pages/RecipeViewPage";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/recipes/:id" element={<RecipeViewPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
