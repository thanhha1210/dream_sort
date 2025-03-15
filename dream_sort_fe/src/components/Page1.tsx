import React, { useState, useEffect } from 'react';
import Piano from "../assets/img/relaxing-piano-310597.mp3";
import Sort from "../assets/img/Pop cat original meme.mp3";

const Page1 = () => {
  const [arr1, setArr1] = useState([8, 5, 6, 4, 3]);
  const [arr2, setArr2] = useState([10, 6, 9, 2, 5]);
  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);
  const [animating1, setAnimating1] = useState(false);
  const [animating2, setAnimating2] = useState(false);

  // Audio state
  const [pianoAudio, setPianoAudio] = useState(null);
  const [sortAudio, setSortAudio] = useState(null);

  // Initialize audio on component mount
  useEffect(() => {
    const piano = new Audio(Piano);
    const sort = new Audio(Sort);
    piano.loop = true; // Loop the piano audio
    setPianoAudio(piano);
    setSortAudio(sort);

    // Play piano audio on mount
    piano.play();

    // Cleanup on unmount
    return () => {
      piano.pause();
      sort.pause();
    };
  }, []);

  // Function to handle button click
  const handleButtonClick = (callback) => {
    if (pianoAudio && sortAudio) {
      pianoAudio.pause(); // Stop piano audio
      sortAudio.currentTime = 0; // Reset sort audio to start
      sortAudio.play(); // Play sort audio

      // After 2 seconds, stop sort audio and resume piano audio
      setTimeout(() => {
        sortAudio.pause();
        pianoAudio.play();
      }, 2000);
    }

    // Execute the callback (randomizeArray1 or randomizeArray2)
    callback();
  };

  const randomizeArray1 = () => {
    setAnimating1(true);
    const newArr = [...arr1];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setArr1(newArr);
    setCnt1(cnt1 + 1);
    setTimeout(() => setAnimating1(false), 500);
  };

  const randomizeArray2 = () => {
    setAnimating2(true);
    const newArr = [...arr2];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    setArr2(newArr);
    setCnt1(cnt1 + 2);
    setTimeout(() => setAnimating2(false), 500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative w-full">
      <div className="z-10 text-center backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-4xl">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-8">
          Array Randomizer
        </h1>

        <div className="grid grid-cols-2 gap-8 w-full">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-4">
              Array 1
            </h2>
            <div className="flex justify-center items-end space-x-4 h-96 mb-8 p-6 bg-white/5 rounded-xl border border-white/10 min-w-100">
              {arr1.map((value, index) => (
                <div
                  key={index}
                  className={`relative group ${animating1 ? 'animate-bounce' : ''}`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg blur-sm transform scale-105 opacity-70 group-hover:opacity-100 transition-all duration-300"
                    style={{ height: `${value * 35}px` }}
                  ></div>
                  <div
                    className="bg-gradient-to-t from-blue-600 to-blue-400 text-white text-center transition-all duration-500 ease-in-out rounded-t-lg relative flex items-center justify-center font-medium group-hover:from-blue-500 group-hover:to-purple-500 group-hover:scale-105 shadow-lg shadow-blue-500/20"
                    style={{ width: '50px', height: `${value * 35}px` }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleButtonClick(randomizeArray1)}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 font-medium transform hover:-translate-y-1 active:translate-y-0"
            >
              Randomize Array 1
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
              Array 2
            </h2>
            <div className="flex justify-center items-end space-x-4 h-96 mb-8 p-6 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 min-w-100">
              {arr2.map((value, index) => (
                <div
                  key={index}
                  className={`relative group ${animating2 ? 'animate-bounce' : ''}`}
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-lg blur-sm transform scale-105 opacity-70 group-hover:opacity-100 transition-all duration-300"
                    style={{ height: `${value * 35}px` }}
                  ></div>
                  <div
                    className="bg-gradient-to-t from-purple-600 to-pink-400 text-white text-center transition-all duration-500 ease-in-out rounded-t-lg relative flex items-center justify-center font-medium group-hover:from-purple-500 group-hover:to-pink-500 group-hover:scale-105 shadow-lg shadow-pink-500/20"
                    style={{ width: '50px', height: `${value * 35}px` }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleButtonClick(randomizeArray2)}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl hover:from-purple-600 hover:to-pink-700 shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 font-medium transform hover:-translate-y-1 active:translate-y-0"
            >
              Randomize Array 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;