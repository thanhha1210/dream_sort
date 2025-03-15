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
    <div className="min-h-screen via-black to-purple-900 flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      

      <div className="z-10 text-center">
        <h1 className="text-5xl font-extrabold text-white mb-8 tracking-widest">Array Randomizer</h1>


        <div className="flex justify-center items-end space-x-4 h-96 mb-12">
          {arr.map((value, index) => (
            <div
              key={index}
              className="bg-blue-400 text-white text-center rounded-lg shadow-lg transition-all duration-500 ease-in-out"
              style={{ width: '60px', height: `${value * 50}px` }}
            >
              {value}
            </div>
          ))}
        </div>

        {/* Array display with fancy brackets */}
        <div className="text-white text-2xl mb-8">
          Array: <span className="text-green-400">&#123;{arr.join(', ')}&#125;</span>
        </div>

        {/* Randomize button */}
        <button
          onClick={randomizeArray}
          className="px-10 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 shadow-lg hover:shadow-green-300 transition-transform duration-300 transform hover:scale-105"
        >
          Randomize Array
        </button>
      </div>
    </div>
  );
};

export default Page1;