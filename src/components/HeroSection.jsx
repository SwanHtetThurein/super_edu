import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden ">
     <div className="absolute inset-0 z-[-1]">
  <svg
    width="1440"
    height="886"
    viewBox="0 0 1440 886"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <path
      opacity="0.5"
      d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
      fill="url(#paint0_linear)"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1308.65"
        y1="1142.58"
        x2="602.827"
        y2="-418.681"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2299ff" stopOpacity="0.36" />
        <stop offset="0.7" stopColor="#F5F2FD" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
</div>
      <div className=" relative flex flex-col lg:flex-row lg:pt-8 px-4 lg:px-24 min-h-screen text-center">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black  mb-4"
            repeat={Infinity}
          />
          <p className="sm:text-lg md:text-xl text-gray-500">
            Through college admission, scholarships, and visa application,
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
              {" "} we deliver the results.
            </span>
          </p>
        </div>

        {/* Video with grid */}
        <div className="lg:w-3/5 bg-black  grid grid-cols-12 grid-rows-6 justify-center lg:justify-end lg:mt-0">
          <video
            src='./src/assets/nyflag.mp4'
            loop autoPlay muted
            className="col-start-3 row-start-1 col-span-2 row-span-2 border-2 border-gray-800 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
          <video
            src='./src/assets/nybridge.mp4'
            loop autoPlay muted
            className="row-start-3 col-start-4 row-span-2 col-span-2 border-gray-300 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
          <video
            src='./src/assets/usflag.mp4'
            loop autoPlay muted
            className="row-start-4 col-start-2 col-span-3  border-gray-300 rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
          >
            Your Browser does not support the video tag
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;