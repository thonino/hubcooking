import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="roboto ">
      <footer className="bg-red text-white p-1 sm:fixed sm:inset-x-0 sm:bottom-0">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="text-white text-lg font-bold ml-2">
              HubCooking.fr
            </p>
          </div>
          <Link to="/" className="hover:underline italic">Contact</Link>
          <Link to="/" className="hover:underline italic">Politique de confidentialité</Link>
          <div className="flex flex-row mr-2">
              &copy; {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
