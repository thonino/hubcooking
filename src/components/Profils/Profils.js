import { useEffect, useState } from 'react';

function Profils() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((json) => setUsers(json.users));
  }, []);

  return (
    <div>
      <h1 className="hc-blue pacifico text-3xl mt-2">Tous Les Profiles</h1>
      <br />
      {users.map((data) => (
        <div key={data.id}className="roboto">
          <p>Nom : {data.name} </p>
          <p>Email : {data.email} </p>
          <p>Email : {data.password} </p>
          <br />

        </div>
      ))}
    </div>
  );
}

export default Profils;