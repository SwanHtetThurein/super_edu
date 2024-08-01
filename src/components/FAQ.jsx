import React, { useState } from "react";

const FAQ = () => {

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "my" : "en"));
  };

  const faqs = {
    en: [
      { header: "How do I get started with your services?", text: "To get started, simply contact us through telegram or our social media. We will schedule a free 1-to-1 consultation to understand your needs and outline a plan tailored to your goals." },
      { header: "What is the duration of your service?", text: "Our service does not have a fixed duration. We are committed to assisting you throughout the entire process until you no longer require our support." },
      { header: "Can I work with you if I am applying to multiple universities?", text: "Absolutely. We provide support for applications to multiple universities and ensure each application is tailored to meet the specific requirements and expectations of each institution." },
    ],
    my: [
      { header: "သင် Visa လက်ခံရရှိမည်ကိုအာမခံနိုင်ပါသလား?", text: "ကျွန်ုပ်တို့သည်အာမခံချက်မပေးနိုင်ပါ၊ သို့သော် သင်၏ Visa လက်ခံရရှိမည့်အခွင့်အလမ်းများကို အများဆုံးတိုးမြှင့်ပေးနိုင်ပါသည်။" },
      { header: "ဝန်ဆောင်မှုကာလဘယ်လောက်လဲ?", text: "ကျွန်ုပ်တို့၏ဝန်ဆောင်မှုအတွက်အချိန်ကန့်သတ်မရှိပါ၊ သင်ဦးတည်ချက်မရောက်မချင်း ကျွန်ုပ်တို့ကူညီပေးနေမည်ဖြစ်သည်။" },
      { header: "ကျောင်းသားအတွက်အတိအကျဘာများဆောင်ရွက်ပေးမည်လဲ?", text: "ကျွန်ုပ်တို့သည် Common App စာမူများနှင့် ပညာသင်ဆုလျှောက်လွှာများကို အရင်ဆောင်ရွက်ပေးပါမည်။ ထို့နောက် Visa မေးမြန်းစစ်ဆေးမှုအတွက် သင်လုံလောက်သောပြင်ဆင်မှုရှိစေရန် သေချာအောင်ဆောင်ရွက်ပါမည်။" },
    ]
  };

  return (
    <section id="faq" className="mb:12 relative z-20 overflow-hidden bg-white pb-24 pt-20 lg:pb-[120px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                {language === "en" ? "FAQs" : "မေးခွန်းများနှင့်အဖြေများ"}
              </h2>
              {/* <button onClick={toggleLanguage} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-xl transition-transform duration-500 transform hover:scale-110
                                    btn-grad
                                    inline-flex
                                    items-center
                                    justify-center
                                    font-sans
                                    text-base
                                    font-semibold
                                    transition-all
                                    duration-200
                                    border-2 border-transparent
                                    rounded-full
                                    sm:leading-8
                                    text-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                    ">
                {language === "en" ? "မြန်မာ 🇲🇲 " : "English 🇺🇸"}
              </button> */}
            </div>
          </div>
        </div>

        <div className="mx-4 flex flex-wrap justify-center">
          <div className="w-full px-3 lg:w-2/3">
            {faqs[language].map((faq, index) => (
              <AccordionItem key={index} header={faq.header} text={faq.text} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-20 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
              <stop stopColor="#0f6aae" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className= "flex flex-col items-center mt-16 md:mt-24 ">
        <span span className="mb-4 text-black-500 text-3xl sm:text-4xl lg:text-5xl font-medium uppercase">
              Our 
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
                {" "}Mission
              </span>
        </span>

        <p className="leading-7 text-gray-600 text-sm md:text-lg md:leading-loose px-12 py-4 md:px-40">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        We started SuperEdu because we saw how expensive and inaccessible college applications can be if you&#39;re from Myanmar. Many of our friends didn&#39;t get into the schools they deserved simply because they couldn&#39;t afford the help they needed. We don’t want that to happen to anyone else. 
        </p>

        <p className="leading-7 text-gray-600 text-sm md:text-lg md:leading-loose px-12 md:px-40">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Our mission is to make college applications more accessible and affordable for everyone in Myanmar. As international students ourselves, we&#39;re here to offer support and guidance without the high costs, helping you get into the school you rightfully deserve.
        </p>
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-6 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-6 lg:px-4">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary ">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg  text-dark ">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-4 duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-dark">
          {text}
        </p>
      </div>
    </div>
  );
};