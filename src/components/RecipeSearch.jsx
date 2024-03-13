import { useState } from "react";
import { data } from "../utils/data";
import { RecipeList } from "./RecipeList";
import { TextInput } from "./ui/TextInput";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((hits) => {
    return hits.recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label className="labelsearch">Search for recipes</label>
      <TextInput onChange={handleChange} />
      <RecipeList clickFn={clickFn} recipes={matchedRecipes} />
    </>
  );
};
