import { useEffect, useState } from 'react';

function LastPictures() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("/api/pictures")
      .then((response) => response.json())
      .then((json) => setPictures(json.pictures.slice(-4)));
  }, []);


  return (
    <div className="flex justify-center ">
      <div className="w-last-pic flex flex-wrap gap-2">
        {pictures.map((data) => (
          <div key={data.id} className="w-last-pic-img">
            <img
              className="flex rounded"
              src={"/img/" + data.img}
              alt={data.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LastPictures
