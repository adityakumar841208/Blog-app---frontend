import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Blog App</h2>
          <p>Welcome to our blog app. Stay updated with our latest news and articles.</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul>
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/create" className="hover:underline">Create Blog</Link></li>
            <li><Link to="/yourblogs" className="hover:underline">Your Blogs</Link></li>
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signin" className="hover:underline">Sign In</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} Blog App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
