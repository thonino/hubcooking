import { useEffect, useState } from 'react';

function LastRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((json) => setRecipes(json.recipes.slice(-2)));
  }, []);
  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

  function btn(color){ return `btn bg-${color} text-white mb-3`;};


  return (
    <div className="flex flex-col">
      {recipes.map((data) => (
        <div key={data.id} className="flex justify-center pb-2">
          <img
            className="w-last-rcp-img rounded-l"
            src={"/img/" + data.img}
            alt={data.name}
          />
          <div className="w-last-rcp-info bg-blue-light roboto rounded-br">
            <p className="bg-blue p-1 text-white capitalize text-xl font-bold rounded-tr">
              {data.category}
            </p>
            <p className="hc-blue pacifico mt-3 px-2">{data.name}</p>
            <p className="hc-blue pacifico mt-3">
              {" "}
              Par :{" "}
              {users.find((user) => user.id === data.user_id)?.name ||
                "Inconnu"}
            </p>
            <div className="flex justify-center items-center mt-2">
              <button className="btn btn-green bg-green">
                <i class="bi bi-book mt-2"> Afficher</i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LastRecipes
