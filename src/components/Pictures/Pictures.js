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
      <h1>Les Photos</h1><br/>
      {pictures.map((data) => (
      <div key={data.id}>{data.nom}</div>
      ))}
    </div>
  );
}

export default Pictures
