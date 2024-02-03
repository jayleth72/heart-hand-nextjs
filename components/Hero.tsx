import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="/images/feet.png"
            alt="Blog Image"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Blog
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover insightful articles on various topics.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
