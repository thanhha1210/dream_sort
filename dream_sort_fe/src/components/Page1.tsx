import React, { useState, useEffect } from 'react';

const Page1 = () => {
  const [arr, setArr] = useState([8, 5, 1, 2, 3]);
  const [cnt, setCnt] = useState(0);
  const [showSlide, setShowSlide] = useState(false);
  const [animating, setAnimating] = useState(false);

  // Function to randomize the array
  const randomizeArray = () => {
    setAnimating(true);
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setArr(newArr);
    setCnt(cnt + 1);
    if (cnt === 4) {
      setArr([...newArr.sort((a, b) => a - b)]);
    }
    
    setTimeout(() => setAnimating(false), 500);
  };

  // Function to handle the button click and slide animation to open the blank page
  const handleSlide = () => {
    setShowSlide(true);
  };

  // Function to handle going back to the first page
  const handleBack = () => {
    setShowSlide(false);
  };

  // Generate background stars for dreamy effect
  const stars = Array(100).fill().map((_, i) => {
    const size = Math.random() * 2 + 1;
    return (
      <div 
        key={i}
        className="absolute rounded-full bg-white opacity-70"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `twinkle ${Math.random() * 5 + 3}s infinite ease-in-out`
        }}
      />
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars}
      </div>
      
      {/* Floating orbs */}
      <div className="absolute w-64 h-64 rounded-full bg-purple-600/20 blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-blue-500/20 blur-3xl -bottom-32 -right-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-pink-500/20 blur-3xl top-40 right-20"></div>

      {/* Content */}
      {!showSlide && (
        <div className="z-10 text-center backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-2xl">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-8">
            Array Randomizer
          </h1>

          {/* Bar graph centered with glass morphism */}
          <div className="flex justify-center items-end space-x-4 h-96 mb-8 p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10">
            {arr.map((value, index) => (
              <div
                key={index}
                className={`relative group ${animating ? 'animate-bounce' : ''}`}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg blur-sm transform scale-105 opacity-70 group-hover:opacity-100 transition-all duration-300"
                  style={{ height: `${value * 50}px` }}
                ></div>
                <div
                  className="bg-gradient-to-t from-blue-600 to-blue-400 text-white text-center transition-all duration-500 ease-in-out rounded-t-lg relative flex items-center justify-center font-medium group-hover:from-blue-500 group-hover:to-purple-500 group-hover:scale-105 shadow-lg shadow-blue-500/20"
                  style={{ width: '50px', height: `${value * 50}px` }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>

          {/* Below the bar graph: Array and Button sections */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full mt-2 gap-4">
            {/* Array Section with Brackets */}
            <div className="flex items-center space-x-2 backdrop-blur-sm bg-white/5 p-3 rounded-xl border border-white/10">
              <h2 className="text-white text-xl font-light">Array:</h2>
              <div className="text-blue-300 font-mono">
                {`{${arr.join(', ')}}`}
              </div>
            </div>

            {/* Button Section */}
            <div>
              <button
                onClick={randomizeArray}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 font-medium transform hover:-translate-y-1 active:translate-y-0"
              >
                Randomize Array
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Side Button preserved with improved styling */}
      <button
        onClick={handleSlide}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 w-6 h-20 bg-gradient-to-b from-red-500 to-pink-600 text-white rounded-l-xl shadow-lg hover:from-red-600 hover:to-pink-700 hover:shadow-pink-500/50 transition-all duration-300"
      >
        <span className="sr-only">Open Slide</span>
      </button>

      {/* Sliding Overlay (Blank Page) */}
      {showSlide && (
        <div
          className={`fixed inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900 z-20 transition-transform duration-500 ease-in-out ${
            showSlide ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          {/* Blank page content */}
          <div className="h-full flex justify-center items-center text-white">
            <div className="backdrop-blur-sm bg-white/5 p-10 rounded-2xl border border-white/10 shadow-xl">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
                This is a new blank page
              </h1>
            </div>

            {/* Button to go back to the first page */}
            <button
              onClick={handleBack}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-20 bg-gradient-to-b from-red-500 to-pink-600 text-white rounded-r-xl shadow-lg hover:from-red-600 hover:to-pink-700 hover:shadow-pink-500/50 transition-all duration-300"
            >
              <span className="sr-only">Back to First Page</span>
            </button>
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Page1;