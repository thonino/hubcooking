import { useEffect, useState } from 'react';

function TopRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((json) => {
        const sortedRecipes = json.recipes.sort((a, b) => b.like - a.like);
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
      <p className="hc-gray pacifico text-3xl">Top Recettes !</p>
      <div className="flex flex-col justify-center items-center mt-3">
        <div className="w-top-rcp bg-gray p-3 rounded-t">
          <p className="roboto text-xl font-bold text-white">
            Recettes les plus populaires
          </p>
        </div>
        <div className="w-top-rcp roboto">
          {recipes.map((data, index) => (
            <div
              key={data.id}
              className={`flex top-light${index + 1}
                ${index === recipes.length - 1 ? "rounded-b" : ""} `}
            >
              <img
                className={`w60 ${
                  index === (recipes.length - 1) ? "rounded-bl" : ""
                }`}
                src={"/img/" + data.img}
                alt={data.name}
              />
              <p
                className={`top${
                  index + 1
                } px-2 flex justify-center items-center text-white`}
              >
                {index + 1}
              </p>
              <div className="flex justify-center items-center ">
                <p className="ml-2 text-red-600 font-bold">{data.like}</p>
                <button className="mt-2 ml-1 text-2xl">
                  <i className="bi bi-heart-fill text-red-600"></i>
                </button>
              </div>
              <p
                className={`px-2 flex justify-center items-center font-bold mt-2 pb-2`}
              >
                {data.name}
              </p>
              <button className="flex items-center  mr-3 ">
                <i
                  class={`bi bi-book btn btn-white top${
                    index + 1
                  }  rounded  text-white `}
                ></i>
              </button>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
}
  
  export default TopRecipes;
  