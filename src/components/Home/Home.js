import Recipes from "../API/Recipes/Recipes";

function Home() {
  const recipes = Recipes();
  return (
    <div>
      <h1>Home</h1>
      <br />
      {recipes.map((data) => (
        <div key={data.recipe_id}>{data.nom}</div>
      ))}
    </div>
  );
}

export default Home;
