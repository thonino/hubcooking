// Home.js
import { useEffect, useState } from 'react';

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
        <img  className="w-1/4 "src="logo-hc.png" alt="placeholder" />
      </div>
      <div className="">
        <p className="hc-red pacifico text-3xl">Qui somme nous ?</p>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className="bg-red text-white w350  p-3">
            <p className="">Description</p>
          </div>
          <div className="bg-red-light w350 p-3">
            <p>
              HubCooking est une plateforme entièrement gratuite, 
              dédiée au partage de photos et de recettes culinaires. 
            </p>
            <p>
            Nous offrons aux passionnés de cuisine la possibilité 
            de consulter où de proposer des recettes. 
            </p>
            <p>
            Lancée début 2024, notre équipe de 3 membres donne tout 
            pour vous garantir une expérience utilisateur optimale.
            </p>
          </div>
        </div>
      </div>
      <br/>
      {pictures.map((data) => (
        <div key={data.id}>{data.nom}</div>
      ))}
      <br/>
      {recipes.map((data) => (
        <div key={data.id}>{data.nom}</div>
      ))}
    </div>
  );
}

export default Home;
