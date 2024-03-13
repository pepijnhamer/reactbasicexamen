import { RecipeThumbnail } from "./RecipeThumbnail";

export const RecipeList = ({ recipes, clickFn }) => {
  return (
    <div className="recipegrid">
      {recipes.map((hits) => (
        <RecipeThumbnail
          key={hits.recipe.label}
          recipe={hits.recipe}
          clickFn={clickFn}
        />
      ))}
    </div>
  );
};
