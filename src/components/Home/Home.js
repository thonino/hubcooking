// Home.js
import React, { useEffect, useState } from 'react';

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [users, setUsers] = useState([]);
  const [pictures, setPictures] = useState([]);

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

  return (
    <div>
      <h1>Home</h1>
      <br/>
      {recipes.map((recipe) => (
        <div key={recipe.recipe_id}>{recipe.nom}</div>
      ))}
      <br/>
      {users.map((data) => (
        <div key={data.user_id}>{data.nom}</div>
      ))}
      <br/>
      {pictures.map((data) => (
        <div key={data.picture_id}>{data.nom}</div>
      ))}
    </div>
  );
}

export default Home;
