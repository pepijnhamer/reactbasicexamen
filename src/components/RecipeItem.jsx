import { Button } from "./ui/Button";

export const RecipeItem = ({ recipe, clickFn }) => {
  const renderHealthLabels = () => {
    return recipe.healthLabels.map((healthLabels, index) => (
      <p key={index} className={`${healthLabels.toLowerCase()}`}>
        {healthLabels}
      </p>
    ));
  };

  const renderDiet = () => {
    return recipe.dietLabels.map((diet, index) => (
      <p key={index} className="diet">
        {diet}
      </p>
    ));
  };

  const renderCautions = () => {
    return recipe.cautions.map((caution, index) => (
      <p key={index} className="caution">
        {caution}
      </p>
    ));
  };

  const renderIngredients = () => {
    return recipe.ingredientLines.map((ingredient, index) => (
      <p key={index} className="ingredient">
        {ingredient}
      </p>
    ));
  };

  return (
    <div className="recipeitem">
      <img src={recipe.image} alt={recipe.label} />
      <div>
        <p className="mealtype">{recipe.mealType}</p>
        <p className="dish">{recipe.dishType}</p>
        <h3>{recipe.label}</h3>
        <p>
          Total cooking time: <b>{recipe.totalTime} Minutes</b>
        </p>
        <p>
          Servings: <b>{recipe.yield}</b>
        </p>
        <p>
          <b>Ingredients:</b>
        </p>
        <div className="ingedientlabels">{renderIngredients()}</div>
      </div>
      <div>
        <p>
          <b>Health Labels:</b>
        </p>
        <div className="labels">{renderHealthLabels()}</div>
        <p>
          <b>Diet:</b>
        </p>
        <div className="labels">{renderDiet()}</div>
        <p>
          <b>Cautions:</b>
        </p>
        <div className="labels">{renderCautions()}</div>
      </div>
      <Button
        className="backbutton"
        text={"Go back to recipes"}
        clickFn={() => clickFn()}
      />
    </div>
  );
};
