import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Pictures() {
  const navigate = useNavigate();
  const [pictures, setPictures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [updateCategory, setUpdateCategory] = useState();
  const [updateName, setUpdateName] = useState();
  const [updateImg, setUpdateImg] = useState();
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

  const HandleSubmit = (e) => {
    e.preventDefault();
    const id = pictures.length;
    const name = e.target.itemName.value;
    const img = e.target.fileName.value;
    const user_id = 0;
    const like = 0;
    const newData = { id, name, img, user_id, like };
    name && setPictures([...pictures, newData]);
  };

  const handleDelete = (data) => {
    const newDatas = pictures.filter((item) => item.id !== data.id);
    setPictures(newDatas);
  };

  const handleUpdate = (data) => { 
    const updateData = {};
    if (updateCategory) {updateData.category = updateCategory;}
    if (updateName) {updateData.name = updateName;}
    if (updateImg) {updateData.img = updateImg;}
    const newDatas = pictures.map((item) =>
      item.id === data.id
        ? { ...item, ...updateData }
        : item
    );
    setPictures(newDatas);
  }

const handleToggle = () => {
  const toggleElements = document.querySelectorAll(".toggle");

  toggleElements.forEach((element) => {
    element.style.display =
      element.style.display === "block" ? "none" : "block";
  });
};

  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl mt-2">Toutes Les Photos</h1>
      <br />
      <select
        className="border rounded p-2 mb-2 bg-red-light w200 text-center"
        onChange={(e) => navigate(`/categories/${e.target.value}`)}
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
        className="btn btn-blue bg-blue-light mb-2 "
        onClick={handleToggle}
      >
        Modifier
      </button>

      <div>
        <div className="flex flex-wrap justify-center ">
          {pictures.map((data) => (
            <div key={data.id} className="m-1 w-img flex flex-col">
              <div className={"toggle "}>
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
                <button
                  onClick={() => {
                    handleDelete(data);
                  }}
                  className="flex w-img btn btn-red bg-red mb-2 "
                >
                  Effacer
                </button>
              </div>
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
      <h1 className="hc-blue pacifico text-xl my-3">Publiez une photo !</h1>
      <form onSubmit={HandleSubmit} className="flex justify-center">
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
          <select className="border rounded p-2">
            {categories.map((data) => (
              <option key={data.id} value={data.name}>
                {data.name}
              </option>
            ))}
          </select>
          <button type="submit" className="btn btn-green bg-green ">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pictures;
