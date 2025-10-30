import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-[#0B0E17] text-white px-8 py-3 flex items-center justify-between">
      {/* Left Section - Logo + Brand */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
        <span className="font-semibold text-lg">AI Feedback Analyzer</span>
      </div>

      {/* Middle Section - Links */}
      <div className="hidden md:flex space-x-8 text-gray-300">
        <a href="#features" className="hover:text-white transition">
          Features
        </a>
        <a href="#pricing" className="hover:text-white transition">
          Pricing
        </a>
        <a href="#about" className="hover:text-white transition">
          About
        </a>
      </div>

      {/* Right Section - Buttons */}
      <div className="flex space-x-3">
        <button className="bg-[#1f2937] hover:bg-[#374151] text-gray-200 px-4 py-2 rounded-md transition">
          Log In
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
          Sign Up Free
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
