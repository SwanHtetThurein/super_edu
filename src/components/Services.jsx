import {features} from "../constants"
import React from 'react'

const Services = () => {
  return (
    <div id="services" className= "text-center bg-services relative pt-16 min-h-[800px]">
        <span className = "font-noto text-black-500  h-6 text-3xl sm:text-4xl lg:text-5xl font-medium px-2 py-1 uppercase">
          What 
          <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
            {" "}
            We Do
          </span>
        </span>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-slate-100 text-black-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className = "mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-md p-2 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>

          ))}
        </div>
    </div>


    /* 
      Services
      1.Scholarship  2. Common App
      3. 4.  

      FAQs(in Burmese)
      [] Education က ဘာလုပ်လဲ ဘယ်လိုဝန်ဆောင်မှုတွေ ပေးလဲ
      
      အမေရိကားမှာ စကောလာရှစ်နဲ့ ပညာသင်ယူချင်တယ်ဆိုရင်

      CROWN ကို ဘယ်လို ဝန်ဆောင်ခ အခကြေးငွေတွေပေးဖို့လိုသလဲ
      */
  )
}

export default Services