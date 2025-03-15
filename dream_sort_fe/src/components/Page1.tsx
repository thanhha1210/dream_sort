import React, { useState } from 'react';

const Page1 = () => {
  const [arr, setArr] = useState([8, 5, 1, 2, 3]);
  const [cnt, setCnt] = useState(0);

  // Function to randomize the array
  const randomizeArray = () => {
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
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Moving Planet Animation */}
      <div className="absolute w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-float">
        <div className="absolute w-16 h-16 bg-gray-300 rounded-full top-1/4 left-1/4 animate-orbit"></div>
      </div>

      {/* Content */}
      <div className="z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Array Randomizer</h1>
        <div className="flex items-end space-x-2 h-96">
          {arr.map((value, index) => (
            <div
              key={index}
              className="bg-blue-500 text-white text-center transition-all duration-300 ease-in-out"
              style={{ width: '50px', height: `${value * 50}px` }}
            >
              {value}
            </div>
          ))}
        </div>
        <button
          onClick={randomizeArray}
          className="mt-8 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Randomize Array
        </button>
      </div>
    </div>
  );
};

export default Page1;