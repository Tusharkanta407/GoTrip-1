import React from 'react';
import { Link } from 'react-router-dom';
import { User, MessageCircle } from 'lucide-react';
import logo from "../assets/logo-dark2.svg";

function Headerr() {
  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="tinder-logo" className="h-16 w-auto" />
            </Link>
          </div>

          {/* Right Section: About Button + Icons */}
          <div className="flex items-center space-x-6 ml-auto">
            {/* About Button */}
            <Link 
              to="/about" 
              className="px-4 py-2 bg-white text-black-800 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-pink-500 hover:text-white shadow-md"
            >
              About
            </Link>

            {/* BOOK Button */}
            <a 
              href="https://gotrip-appdir.vercel.app/tour-list-v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-black-800 border border-gray-300 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-pink-500 hover:text-white shadow-md"
            >
              BOOK
            </a>

            {/* Icons */}
            <Link to="/chat/:id" className="text-black hover:text-gray-700 p-2 rounded-full">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="text-black hover:text-gray-700 p-2 rounded-full">
              <User className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headerr;






