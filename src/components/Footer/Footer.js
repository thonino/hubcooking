import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="roboto footer-fix">
      <footer className="bg-red text-white p-1 fixed inset-x-0 bottom-0">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div>
            <p className="text-white text-lg font-bold ml-2">
              HubCooking.fr
            <Link to="/contact" className="hover:underline italic font-light mx-2">Contact</Link>
            </p>
          </div>
          <div className="flex flex-row mr-2">
            <Link to="/" className="hover:underline italic font-light mx-2">Confidentialité</Link>
              &copy; {new Date().getFullYear()} Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
