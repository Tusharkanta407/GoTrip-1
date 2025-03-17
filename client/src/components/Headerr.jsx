import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, MessageCircle, Menu, X, Bot } from "lucide-react";
import logo from "../assets/logo-dark2.svg";

function Headerr() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Use useNavigate hook

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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Right Section: About Button + Icons */}
          <div className={`md:flex items-center space-x-6 ml-auto ${isOpen ? "block" : "hidden"} md:block absolute md:static top-20 left-0 right-0 bg-white md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none`}>
            <Link 
              to="/about" 
              className="block md:inline px-4 py-2 bg-white text-black border border-gray-300 rounded-md text-sm font-medium transition duration-300 hover:bg-pink-500 hover:text-white shadow-md"
            >
              About
            </Link>

            <a 
              href="https://gotrip-appdir.vercel.app/tour-list-v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block md:inline px-4 py-2 bg-white text-black border border-gray-300 rounded-md text-sm font-medium transition duration-300 hover:bg-pink-500 hover:text-white shadow-md"
            >
              Plan Trip
            </a>

            {/* AI Chatbot Button */}
            <button 
              onClick={() => navigate("/ai-chat")} 
              className="flex items-center px-4 py-2 bg-white text-black border border-gray-300 rounded-md text-sm font-medium transition duration-300 hover:bg-blue-500 hover:text-white shadow-md"
            >
              <Bot className="h-5 w-5 mr-2" /> AI Chat
            </button>

            <Link to="/chat/:id" className="block md:inline text-black hover:text-gray-700 p-2 rounded-full">
              <MessageCircle className="h-6 w-6" />
            </Link>
            <Link to="/profile" className="block md:inline text-black hover:text-gray-700 p-2 rounded-full">
              <User className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headerr;









