import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Font Awesome for icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">Blog App</Link>
      </div>
      <div className="hidden lg:flex space-x-4">
        <Link to="/create" className="hover:bg-blue-700 px-3 py-2 rounded">Create Blog</Link>
        <Link to="/yourblogs" className="hover:bg-blue-700 px-3 py-2 rounded">Your Blogs</Link>
        <Link to="/login" className="hover:bg-blue-700 px-3 py-2 rounded">Login</Link>
        <Link to="/signin" className="hover:bg-blue-700 px-3 py-2 rounded">Sign In</Link>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
    </div>
      {
    isMenuOpen && (

      <div className="lg:hidden bg-blue-600 p-4">
        <Link to="/create" className="block hover:bg-blue-700 px-3 py-2 rounded">Create Blog</Link>
        <Link to="/yourblogs" className="block hover:bg-blue-700 px-3 py-2 rounded">Your Blogs</Link>
        <Link to="/login" className="block hover:bg-blue-700 px-3 py-2 rounded">Login</Link>
        <Link to="/signin" className="block hover:bg-blue-700 px-3 py-2 rounded">Sign Up</Link>
      </div>
    )
  }
    </nav >
  );
};

export default Navbar;
