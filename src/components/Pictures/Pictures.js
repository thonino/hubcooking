import { useEffect, useState } from 'react';
import Category from '../Category/Category';

function Pictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((response) => response.json())
      .then((json) => setPictures(json.pictures));
  }, []);

  const HandleSubmit = (e)=> {
    e.preventDefault();
    const id = pictures.length; 
    const name = e.target.itemName.value;
    const img = e.target.fileName.value;
    const user_id = 0;
    const like = 0;
    const newData = {id, name, img, user_id, like};
    name && setPictures([...pictures, newData])

  }
  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl">Toutes Les Photos</h1>
      <br />
      <div className=" ">
        <div className="flex flex-wrap justify-center">
          {pictures.map((data) => (
            <div key={data.id} className="m-1">
              <img
                className="flex w175  "
                src={"/img/" + data.img}
                alt={data.name}
              />
            </div>
          ))}
        </div>
      </div>
      <h1 className="hc-blue pacifico text-xl my-3">Publier photo</h1>
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
          <Category className="" />
          <button type="submit" className="btn bg-green text-white">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Pictures
