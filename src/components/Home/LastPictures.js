import { useEffect, useState } from 'react';

function LastPictures() {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        fetch("/api/pictures")
        .then((response) => response.json())
        .then((json) => setPictures(json.pictures.slice(-4)));
      }, []);

  return (
    <div className="flex justify-center">
          <div className="flex flex-wrap w350 ">
            {pictures.map((data) => (
              <div key={data.id} >
                <img
                  className="flex w175 pl-1 pb-1"
                  src={"/img/" + data.img}
                  alt={data.name}
                />
              </div>
            ))}
          </div>
        </div>
  )
}

export default LastPictures
