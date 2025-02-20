import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Headerr from "../components/Headerr";
import Footer from "../components/Footer";
import bg from "../assets/just.png"
import { MapPin, Users, MessageSquare } from 'lucide-react';

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", stagger: 0.3 }
    );
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Headerr />

      {/* Hero Section with Background Image */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen text-white px-4"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div> {/* Dark overlay */}
        
        <div className="relative text-center z-10">
          <h1 className="hero-text text-5xl font-bold mb-6">Find Your Perfect Travel Partner</h1>
          <p className="hero-text text-xl mb-8 max-w-2xl mx-auto">
            Connect with like-minded travelers, share experiences, and explore the world together.
          </p>
          <button
            onClick={() => navigate("/swipe")}
            className="hero-text px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Matching
          </button>
        </div>
      </div>

      {/* Features Section */}
     {/* Features Section */}
<div className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Box 1 */}
      <div className="text-center p-8 bg-gradient-to-r from-[#2e7498] to-[#6ca7c6] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Discover Places</h3>
        <p className="text-gray-200">Find amazing destinations and create unforgettable memories</p>
      </div>

      {/* Box 2 */}
      <div className="text-center p-8 bg-gradient-to-r from-[#2e7498] to-[#6ca7c6] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Users className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Match Travelers</h3>
        <p className="text-gray-200">Connect with travelers who share your interests and style</p>
      </div>

      {/* Box 3 */}
      <div className="text-center p-8 bg-gradient-to-r from-[#2e7498] to-[#6ca7c6] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <MessageSquare className="h-12 w-12 text-white mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white">Plan Together</h3>
        <p className="text-gray-200">Chat and plan your perfect trip with your matches</p>
      </div>
    </div>
  </div>
</div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3" alt="Bali" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Bali, Indonesia</h3>
                <p className="text-gray-600">Tropical paradise with rich culture</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="Paris" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Paris, France</h3>
                <p className="text-gray-600">City of lights and romance</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963" alt="Italy" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-xl mb-2">Tuscany, Italy</h3>
                <p className="text-gray-600">Rolling hills and historic cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;



