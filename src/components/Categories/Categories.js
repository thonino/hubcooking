import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


function Categories() {
  const [pictures, setPictures] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const { name } = useParams(); 
  
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

  const catFilter = pictures.filter((data) => data.category === name);
  
    const handleDelete = (data) => {
      const newDatas = pictures.filter((item) => item.id !== data.id);
      setPictures(newDatas);
    };
  
  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl">Trier categorie</h1>
      <br />
      <select
        className="border rounded p-2 mb-2 bg-red-light w100 text-center"
        onChange={(e) => navigate(`/categories/${e.target.value}`)}
      >
        <option value="">Catégorie</option>
        {categories.map((data) => (
          <option key={data.id} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>

      <div className=" ">
        <div className="flex flex-wrap justify-center ">
          {catFilter.map((data) => (
            <div key={data.id} className="m-1 w-img">
              <button
                onClick={() => {
                  handleDelete(data);
                }}
                className="btn btn-red bg-red mb-2"
              >
                Effacer
              </button>
              <img
                className="rounded"
                src={"/img/" + data.img}
                alt={data.name}
              />
              <p className="pacifico hc-red">{data.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
