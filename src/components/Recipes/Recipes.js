import { useEffect, useState } from 'react';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((json) => {
        setRecipes(json.recipes);
      });
  }, []);
  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl mt-2">Toutes Les Recettes</h1>
      <br />
      <div className="flex flex-wrap justify-center ">
        {recipes.map((data) => (
          <div key={data.id} className="m-1 w-img flex flex-col">
            {data.name}
            <img className="rounded" src={"/img/" + data.img} alt={data.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recipes;
