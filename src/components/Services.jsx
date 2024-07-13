import { features } from "../constants";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="py-4 relative lg:py-16 px-4 min-h-[600px]">
      <div className="text-center mb-12">
        <span className="text-black-500 text-3xl sm:text-4xl lg:text-5xl font-medium uppercase">
          What
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            {" "}We Do
          </span>
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-3/4 lg:w-1/3 px-2">
            <div className="flex items-start bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform duration-500 transform hover:scale-105">
              <div className="flex-shrink-0 h-8 w-10 md:h-12 md:w-12 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-xl font-semibold mb-2 text-gray-800">{feature.text}</h5>
                <p className=" text-md text-gray-600">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
