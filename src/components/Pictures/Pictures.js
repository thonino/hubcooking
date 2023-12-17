import { useEffect, useState } from 'react';

function Pictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((response) => response.json())
      .then((json) => setPictures(json.pictures));
  }, []);

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
    </div>
  );
}

export default Pictures
