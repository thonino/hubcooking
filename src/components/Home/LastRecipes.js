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

  return (
    <div className="flex flex-col">
          {recipes.map((data) => (
            <div key={data.id} className="flex justify-center pb-1 ">
              <img
                className="w175"
                src={"/img/" + data.img}
                alt={data.name}
              />
              <div className="w175 bg-red-light">
                <p className="w175 bg-red p-1 text-white capitalize roboto">{data.category}</p>
                <p className="hc-red pacifico mt-3">{data.name}</p>
                <p className="hc-red pacifico mt-3"> Par : {" "}
                  {users.find(user => user.id === data.user_id)?.name || 'Inconnu'}
                </p>
                <div className="flex justify-center  mt-2">
                  <p className="mt-1 text-red-600 pacifico">{data.like}</p>
                  <p className="mt-1 ml-1 mr-2 text-2xl">
                    <i class="bi bi-heart-fill text-red-600"></i>
                  </p>
                  <p className="text-3xl">
                    <i class="bi bi-star-fill text-yellow-600"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default LastRecipes
