// Home.js
import React, { useEffect, useState } from 'react';

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
      <h1>Home</h1>
      <br/>
      {recipes.map((data) => (
        <div key={data.id}>{data.nom}</div>
      ))}
      <br/>
      {users.map((data) => (
        <div key={data.id}>{data.nom}</div>
      ))}
      <br/>
      {pictures.map((data) => (
        <div key={data.id}>{data.nom}</div>
      ))}
      <br/>
      {comments.map((data) => (
        <div key={data.id}>{data.text}</div>
      ))}
    </div>
  );
}

export default Home;
