export const RecipeThumbnail = ({ recipe, clickFn }) => {
  const renderHealthLabels = () => {
    return recipe.healthLabels.map((healthLabels, index) => (
      <p key={index} className={`${healthLabels.toLowerCase()}`}>
        {healthLabels}
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

  return (
    <button className="recipe-thumbnail" onClick={() => clickFn(recipe)}>
      <img src={recipe.image} alt={recipe.label} />
      <p className="mealtype">{recipe.mealType}</p>
      <h3>{recipe.label}</h3>
      <p className="dish">Dish: {recipe.dishType}</p>
      <div className="labels">
        {renderHealthLabels()}
        {renderCautions()}
      </div>
    </button>
  );
};
