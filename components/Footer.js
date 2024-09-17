import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-start">
        
        {/* About Section */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Foodie</h2>
          <p className="text-gray-300">
            Order your favorite meals quickly and easily with Foodie. Fresh food delivered to your doorstep!
          </p>
        </div>
        
        {/* Useful Links */}
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Useful Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="/terms" className="hover:text-orange-400">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact Us</a></li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold text-orange-500 mb-4">Contact Info</h3>
          <p className="text-gray-300 mb-2">Email: contact@foodie.com</p>
          <p className="text-gray-300 mb-4">Phone: +123 456 7890</p>
          <div className="space-x-4">
            <a href="https://facebook.com" className="text-gray-300 hover:text-orange-400">Facebook</a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-orange-400">Instagram</a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-orange-400">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Foodie | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
