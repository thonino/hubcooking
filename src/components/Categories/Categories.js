import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Categories() {
  const [pictures, setPictures] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams();
  const [updateName, setUpdateName] = useState();
  const [updateImg, setUpdateImg] = useState();
  const [updateCategory, setUpdateCategory] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((json) => setCategories(json.categories));
  }, []);

  useEffect(() => {
    fetch("/api/pictures")
      .then((response) => response.json())
      .then((json) => setPictures(json.pictures));
  }, []);

  useEffect(() => {
    if (name) {
      const filteredPictures = pictures.filter(
        (data) => data.category === name
      );
      setFilter(filteredPictures);
    } else {
      setFilter(pictures); // Affiche toutes les images si aucun paramètre de catégorie n'est spécifié
    }
  }, [name, pictures]);

  const handleDelete = (data) => {
    const newDatas = filter.filter((item) => item.id !== data.id);
    setFilter(newDatas);
  };

  const handleUpdate = (data) => {
    const updateData = {};
    if (updateCategory) {
      updateData.category = updateCategory;
    }
    if (updateName) {
      updateData.name = updateName;
    }
    if (updateImg) {
      updateData.img = updateImg;
    }
    const newDatas = filter.map((item) =>
      item.id === data.id ? { ...item, ...updateData } : item
    );
    setFilter(newDatas);
  };

  const handleToggle = (retrieve) => {
    const toggleElements = document.querySelectorAll("." + retrieve);
    toggleElements.forEach((element) => {
      element.style.display =
        element.style.display === "block" ? "none" : "block";
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = filter.length;
    const name = e.target.itemName.value;
    const img = e.target.fileName.value;
    const user_id = 0;
    const like = 0;
    const newData = { id, name, img, user_id, like };
    if (name) {
      setFilter([...filter, newData]);
    }
  };

  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl mt-2">
        Trier par catégorie : {name}
      </h1>
      <br />
      <select
        className="border rounded p-2 mb-2 bg-red-light w200 text-center"
        onChange={(e) => navigate(`/categories/${e.target.value}`)}
        value={name}
      >
        <option value="">Catégorie</option>
        {categories.map((data) => (
          <option key={data.id} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>
      <br />
      <button
        className="btn btn-green bg-green mb-2 mr-2"
        onClick={() => handleToggle("toggleAdd")}
      >
        Ajouter
      </button>
      <button
        className="btn btn-blue bg-blue-light mb-2 mr-2"
        onClick={() => handleToggle("toggleEdit")}
      >
        Modifier
      </button>
      <button
        className="btn btn-red bg-red-light mb-2 "
        onClick={() => handleToggle("toggleDelete")}
      >
        Supprimer
      </button>

      <div className="flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="toggleAdd">
          <h1 className="hc-blue pacifico text-xl my-3">Publiez une photo !</h1>
          <div className="flex flex-col gap-y-2">
            <input
              name="itemName"
              type="text"
              className="border rounded p-2"
              placeholder="Entrer le nom"
            />
            <input
              name="fileName"
              type="text"
              className="border rounded p-2"
              placeholder="nom fichier (.png)"
            />
            <select
              className="border rounded p-2"
              value={updateCategory}
              onChange={(e) => setUpdateCategory(e.target.value)}
            >
              {categories.map((data) => (
                <option key={data.id} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
            <button type="submit" className="btn btn-green bg-green mb-2">
              Ajouter
            </button>
          </div>
        </form>
      </div>

      <div>
        <div className="flex flex-wrap justify-center">
          {filter.map((data) => (
            <div key={data.id} className="m-1 w-img flex flex-col">
              <div className={"toggleEdit"}>
                <input
                  defaultValue={updateImg ? updateImg : data.img}
                  onChange={(e) => setUpdateImg(e.target.value)}
                  className="flex w-img border rounded p-2 mb-2"
                />
                <input
                  defaultValue={updateCategory ? updateCategory : data.category}
                  onChange={(e) => setUpdateCategory(e.target.value)}
                  className="flex w-img border  rounded p-2 mb-2"
                />
                <input
                  defaultValue={updateName ? updateName : data.name}
                  onChange={(e) => setUpdateName(e.target.value)}
                  className="flex w-img border  rounded p-2 mb-2"
                />
                <button
                  onClick={() => handleUpdate(data)}
                  className="flex w-img btn btn-yellow bg-yellow mb-2 mr-2"
                >
                  Appliquer
                </button>
              </div>
              <button
                onClick={() => {
                  handleDelete(data);
                }}
                className="flex w-img btn btn-red bg-red mb-2 toggleDelete"
              >
                Supprimer
              </button>
              <img
                className="rounded"
                src={"/img/" + data.img}
                alt={data.name}
              />
              <p className="pacifico hc-red capitalize">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
