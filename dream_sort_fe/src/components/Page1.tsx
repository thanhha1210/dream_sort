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
      

      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-8">Array Randomizer</h1>

        {/* Bar graph centered */}
        <div className="flex justify-center items-end space-x-2 h-96 mb-8">
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

        {/* Below the bar graph: Array and Button sections */}
        <div className="flex justify-between w-full mt-8">
          {/* Array Section with Brackets */}
          <div className="flex items-center space-x-2">
            <h2 className="text-white text-xl">Array:</h2>
            <div className="text-white">
              {/* Adding curly brackets around the array values */}
              {{ ...arr } && `{${arr.join(', ')}}`}
            </div>
          </div>

          {/* Button Section */}
          <div className="flex justify-end">
            <button
              onClick={randomizeArray}
              className="px-8 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 shadow-lg hover:shadow-green-300 transition-shadow duration-300"
            >
              Randomize Array
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
