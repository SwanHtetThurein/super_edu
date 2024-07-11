import { TypeAnimation } from 'react-type-animation';
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-hero">
      <div id="#" className="flex flex-col items-center mt-0 py-16">
        <h1 className="mt-8 lg:mt-15 font-medium text-3xl px-10 sm:text-4xl lg:text-5xl text-center tracking-wide">
          College Applications for
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            {" "}
            Underprivileged Students
          </span>
        </h1>
        <TypeAnimation
          sequence={[
            "Choose schools",
            1000,
            "Ace prep",
            1000,
            "Get admitted",
            1000
          ]}
          wrapper="h1"
          speed={20}
          className="mt-8 text-3xl sm:text-4xl lg:text-5xl text-center tracking-wide"
          repeat={Infinity}
        />
        <p className="mt-10 text-sm px-10 md:text-lg md:max-w-6xl text-center text-slate-800">
          We will be your complete guide to your educational destination.
          Through college admission, scholarships and visa application, we will deliver the results.
        </p>
        <div className="flex mt-10 justify-center">
          <video 
            src='./src/assets/nyflag.mp4'
            loop autoPlay muted
            className="w-5/6 sm:w-3/4 border border-blue-700 shadow-blue-400 my-3">
            Your Browser does not support the video tag
          </video>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
