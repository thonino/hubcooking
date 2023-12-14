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
      <h1>Les Recettes</h1><br/>
      {recipes.map((data) => (
      <div key={data.id}>
        {data.name}
      </div>
      ))}
    </div>
  );
}

export default Recipes;
