import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="roboto  ">
      <nav className="bg-red text-white p-1 fixed inset-x-0 top-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="font-semibold text-lg">HubCooking</Link>
          <div className="flex">
            <Link to="/pictures" className="px-2">Photos</Link>
            <Link to="/recipes" className="px-2">Recettes</Link>
            <Link to="/profils" className="px-2">Profiles</Link>
            <Link to="/login" className="px-2">Login</Link>
          </div>
        </div>
      </nav>
      <nav className="flex gap-4 justify-center mt-2 top-fix">
        <Link to="/"><i className="bi bi-facebook text-blue-500 text-3xl"></i></Link>
        <Link to="/"><i className="bi bi-instagram text-pink-500 text-3xl" ></i></Link>
        <Link to="/"><i className="bi bi-pinterest text-red-500 text-3xl"></i></Link>
        <Link to="/"><i className="bi bi-youtube text-red-600 text-3xl"></i></Link>
      </nav>
    </div>
  );
}

export default Nav;
