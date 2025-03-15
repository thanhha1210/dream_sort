<<<<<<<<< Temporary merge branch 1
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Using `loadSlim` for a smaller bundle size

const Page2 = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsParticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Callback when particles are loaded
  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded:", container);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* tsParticles Container */}
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true,
                },
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "https://cdn.matteobruni.it/images/particles/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 3,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              life: {
                duration: {
                  sync: false,
                  value: 3,
                },
                count: 0,
                delay: {
                  random: {
                    enable: true,
                    minimumValue: 0.5,
                  },
                  value: 1,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 0.8,
                },
                repulse: {
                  distance: 200,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            background: {
              color: "#000000",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
          }}
        />
      )}

      {/* Content */}
      <div className="z-10">
        <h1 className="text-4xl font-bold text-white mb-8">Particles Background</h1>
        <p className="text-white">This is a demo of tsParticles in React.</p>
      </div>
    </div>
  );
};

export default Page2;
=========
import React, { useState, useEffect } from 'react';

const Page1 = () => {

  const [arr1, setArr1] = useState([8, 5, 6, 4, 3]); 
  const [arr2, setArr2] = useState([10, 6, 9, 2, 5]);

  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);
 
  const [animating1, setAnimating1] = useState(false); 
  const [animating2, setAnimating2] = useState(false); 


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

  
  useEffect(() => {
    const audio = new Audio('/file.mp3'); 
    audio.loop = true; 
    audio.play(); 

    return () => {
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative w-full">
    <div className="z-10 text-center backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl w-full max-w-4xl">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 mb-8">
        Array Randomizer
      </h1>
  
      <div className='grid grid-cols-2 gap-8 w-full'> 
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
            onClick={randomizeArray1}
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
            onClick={randomizeArray2}
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
>>>>>>>>> Temporary merge branch 2
