import React, { useState } from "react";
import { featuresEn, featuresMy } from "../constants";

const Services = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "my" : "en"));
  };

  const features = language === "en" ? featuresEn : featuresMy;

  return (
    <section id="services" className="mt-16 bg-services px-4 pt-4 pb-12 relative md:py-8 lg:py-18 min-h-[1000px]">
      <div className="text-center mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center mb-4">
          <span className="text-black-500 text-3xl sm:text-4xl lg:text-5xl font-medium uppercase">
            What
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
              {" "}We Do
            </span>
          </span>
          <button
            onClick={toggleLanguage}
            className="btn-grad m-4 md:mb-0 md:ml-4 px-4 py-2 text-white rounded-xl"
          >
            {language === "en" ? "To Burmese 🇲🇲" : "To English 🇺🇸"}
          </button>
        </div>
        <p className="leading-7 text-gray-600 text-sm md:text-lg md:leading-loose px-4 py-4 md:px-8 md:py-8 lg:px-16">
          {language === "en"
            ? "Based on your educational background and goals, we provide personalized services that include admission to public and private universities in the USA, scholarships/financial aid applications, and visa preparation"
            : "မိမိရဲ့ပညာရေးနောက်ခံနဲ့ ပန်းတိုင်ပေါ် မူတည်ပြီး အမေရိကန်ပြည်ထောင်စုရှိ public, private university များသို့ ဝင်ခွင့်၊ စကော်လားရှစ်/ပညာသင်ထောက်ပံ့ကြေး (financial aid) မှစ ဗီဇာပြင်ဆင်ပေးခြင်းအဆုံး ဝန်ဆောင်မှုပေးလျှက်ရှိပါတယ်"}
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

                <ul className="pt-4 md:pt-8 md:pb-4 leading-7 text-sm md:text-lg md:leading-loose text-gray-600 list-disc ml-5">
                  {feature.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      

    </section>
  );
};

export default Services;