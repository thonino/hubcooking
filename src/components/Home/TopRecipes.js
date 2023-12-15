import { useEffect, useState } from 'react';

function TopRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((json) => {
        const sortedRecipes = json.recipes.sort(
          (a, b) => b.like - a.like
        );
        setRecipes(sortedRecipes.slice(0, 4));
      });
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

    return (
      <div>
        <div className="">
          <p className="text-green-600 pacifico text-3xl">
            Top Recettes ?
          </p>
          <div className="flex flex-col justify-center items-center mt-3">
            <div className="bg-green-600 w350  p-3">
              <p className="roboto text-xl font-bold text-white">
                Recettes Les Plus Populaires
                </p>
            </div>
            <div className="  roboto">
              {recipes.map((data, index)=> (
                <div key={data.id} className={`flex w350 top-light${index+1}`}>
                  <img
                    className="w60"
                    src={"/img/" + data.img}
                    alt={data.name}
                  />
                  <p className={`top${index+1} px-4 flex justify-center items-center`}>
                    {index+1}
                  </p>
                </div>
              ))

              }
              <p>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TopRecipes;
  