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
      <h1 className="hc-blue pacifico text-3xl mt-2">Les Profiles</h1>
      <br />
      {users.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))}
    </div>
  );
}

export default Profils;