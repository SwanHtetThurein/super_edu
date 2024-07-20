import { features } from "../constants";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="mt-16 bg-services px-4 pt-4 pb-12 relative md:py-8 lg:py-20 min-h-[1000px]">
      <div className="text-center mb-12">
        <span className="text-black-500 text-3xl sm:text-4xl lg:text-5xl font-medium uppercase">
          What
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            {" "}We Do
          </span>
        </span>
        <p className = "leading-7 text-gray-600 text-sm md:text-lg md:leading-loose px-4 py-4 md:px-8 md:py-8 lg:px-16">
        မိမိရဲ့ပညာရေးနောက်ခံနဲ့ ပန်းတိုင်ပေါ် မူတည်ပြီး အမေရိကန်တက္ကသိုလ်များသို့ ဝင်ခွင့်၊ စကော်လားရှစ်/ပညာသင်ထောက်ပံ့ကြေး( financial aid) မှစ၍ ဗီဇာပြင်ဆင်ပေးခြင်းအဆုံး ဝန်ဆောင်မှုပေးလျှက်ရှိပါတယ်
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-4 md:gap-x-12  md:gap-y-12">
        {features.map((feature, index) => (
          <div key={index} className="w-full md:w-3/4 lg:w-2/5 px-2">
            <div className="flex items-start bg-white shadow-lg rounded-lg p-6 mb-4 transition-transform duration-500 transform hover:scale-105">
              <div className="flex-shrink-0 h-8 w-10 md:h-12 md:w-12 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-l md:text-xl font-semibold mb-2 text-gray-700">{feature.text}</h5>
                <p className="pt-4 md:pt-8 md:pb-4 leading-7 text-sm md:text-lg md:leading-loose text-gray-600 ">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
