import { useEffect, useState } from 'react';
import About from './About';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("/api/recipes")
      .then((response) => response.json())
      .then((json) => setRecipes(json.recipes));
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

  useEffect(() => {
    fetch("/api/pictures")
      .then((response) => response.json())
      .then((json) => setPictures(json.pictures));
  }, []);

  useEffect(() => {
    fetch("/api/comments")
      .then((response) => response.json())
      .then((json) => setComments(json.comments));
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center m-2 ">
        <img className="w-1/4 " src="logo-hc.png" alt="placeholder" />
      </div>
      <About />
      <br />
      <div>
        <h1 className="hc-blue pacifico text-3xl">Dernières Photos !</h1>
        <br />
        <div className="flex justify-center">
          <div className="flex flex-wrap w350">
            {pictures.map((data) => (
              <div key={data.id} className="">
                <img
                  className="flex w175"
                  src={"/img/" + data.img}
                  alt={data.name}
                />
              </div>
            ))}
          </div>
        </div>
        <br />
        {recipes.map((data) => (
          <div key={data.id}>{data.name}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
