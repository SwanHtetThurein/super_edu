import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-800">
      <div className="relative flex flex-col lg:flex-row lg:pt-8 px-4 lg:px-24 min-h-screen text-center">
        
        {/* Headline with flex */}
        <div className="lg:w-2/5 lg:text-left lg:pr-8">
          <TypeAnimation
            sequence={[
              "Win Scholarships",
              1000,
              "Obtain Visas",
              1000,
              "Get Admitted",
              1000
            ]}
            wrapper="h2"
            speed={35}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 dark:text-white mb-4"
            repeat={Infinity}
          />
          <p className="sm:text-lg md:text-xl text-gray-300">
            Through college admission, scholarships, and visa application,
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
              {" "} we deliver the results.
            </span>
          </p>
        </div>

        {/* Video with grid */}
        <div className="lg:w-3/5 grid grid-cols-4 grid-rows-3 justify-center lg:justify-end lg:mt-0">
          <video
            src='./src/assets/nyflag.mp4'
            loop autoPlay muted
            className="col-start-2 col-span-2 border-2 border-gray-800 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
          <video
            src='./src/assets/nybridge.mp4'
            loop autoPlay muted
            className="row-start-2 col-start-1 col-span-2 border-gray-300 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
          <video
            src='./src/assets/usflag.mp4'
            loop autoPlay muted
            className="row-start-3 grid-cols-subgrid col-start-3 col-span-3 border-2 border-gray-300 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;