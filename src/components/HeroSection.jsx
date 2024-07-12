import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
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
              <stop stopColor="#3056D3" stopOpacity="0.2" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-4">
          College Applications for
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            {" "}Underprivileged Students
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Your complete education consultant to the United States
          </p>
        <TypeAnimation
          sequence={[
            "Get Scholarships",
            1000,
            "Obtain Visas",
            1000,
            "Get Admitted",
            1000
          ]}
          wrapper="h2"
          speed={30}
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-medium mb-8"
          repeat={Infinity}
        />
        
        <div className="flex justify-center">
          <video 
            src='./src/assets/nyflag.mp4'
            loop autoPlay muted
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 border-2 border-gray-300 shadow-lg rounded-lg"
          >
            Your Browser does not support the video tag
          </video>
        </div>

      </div>
    </div>
  );
}

export default HeroSection;
