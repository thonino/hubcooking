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
      <h1 className="hc-blue pacifico text-3xl">
        Toutes Les Photos
      </h1>
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
    </div>
  );
}

export default Pictures
