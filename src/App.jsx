import { useState } from "react";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipeItem } from "./components/RecipeItem";

export const App = () => {
  const [userRecipe, setUserRecipe] = useState();

  return (
    <div className="App">
      {userRecipe ? (
        <RecipeItem recipe={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <>
          <RecipeSearch clickFn={setUserRecipe} />
        </>
      )}
    </div>
  );
};
