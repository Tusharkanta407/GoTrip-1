import React from 'react';
import Headerr from '../components/Headerr';
import Footer from '../components/Footer';
import { Globe,  Shield,  Heart } from 'lucide-react';
import nishant from "../assets/nishanta.jpg";
import tushar from '../assets/tushar.jpg';
import sandeep from '../assets/sandeep.png';

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Headerr />

      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-[#2e7498] to-[#6ca7c6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About GoTrip</h1>
            <p className="text-xl max-w-2xl mx-auto">Connecting travelers worldwide to create unforgettable journeys and lasting friendships.</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that travel is better when shared. Our mission is to connect like-minded travelers, 
              foster meaningful relationships, and make exploring the world more accessible and enjoyable for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-gray-600">Connect with travelers from over 190 countries worldwide</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified profiles and secure messaging for peace of mind</p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Shared Passions</h3>
              <p className="text-gray-600">Find travelers who share your interests and travel style</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={sandeep} alt="Sarah Johnson" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Sandeep Swain</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-gray-500">Passionate about connecting people through travel experiences.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={tushar} alt="Mike Chen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Tusharkanta Behera</h3>
                <p className="text-gray-600 mb-2">Head of Product</p>
                <p className="text-gray-500">Building innovative solutions for the travel community.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={nishant} alt="Emma Davis" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2">Nishanta Kumar</h3>
                <p className="text-gray-600 mb-2">Community Manager</p>
                <p className="text-gray-500">Ensuring the best experience for our global community.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">190+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">100K+</div>
              <div className="text-gray-600">Connections Made</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-500 mb-2">4.8/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;

