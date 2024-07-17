import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800">
      {/* Section 1 */}
      <section id="about" className="py-16 lg:py-24 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex justify-center lg:justify-start">
              <img
                src="./src/assets/swan.jpg"
                alt="About Us"
                className="w-full max-w-md h-auto rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                Swan Htet Thurein
              </h2>

              <ul className="text-lg leading-7 text-gray-600 dark:text-gray-300 list-disc">
                <li>
                Former medical student, University of Medicine 1 - Yangon
                </li>
                <li>
                Former IELTS Trainer at Tr.MOE 
                </li>
                <li>
                Computer Science, University of South Florida
                </li>
                <li>
                Outreach Director, Society of Asian Scientists and Engineers 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <p className="text-start px-4 py-4 md:px-6 lg:px-28  text-gray-900 dark:text-gray-300">
              With our collective experience of having checked thousands of IELTS essays and college admission/scholarship essays/applications, we offer experienced and expert help to help reach your goals.
      </p>

      {/* Section 2 */}
      <section className="py-16 lg:py-24 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col">
              <img
                src="./src/assets/ak.jpeg"
                alt="Aung Khant"
                className="w-full max-w-md h-auto rounded-xl shadow-xl mb-8 lg:mb-0 transition-transform duration-500 transform hover:scale-105 lg:hidden"
              />
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                Aung Khant
              </h2>
              <ul className="text-lg leading-7 text-gray-600 dark:text-gray-300 list-disc">
                <li>
                Former medical student, University of Medicine 1 - Yangon
                </li>
                <li>
                Former IGCSE Teacher at []
                </li>
                <li>
                Former IELTS Trainer and Writing Coach at Tr.MOE
                </li>
                <li>
                Biomedical Engineering, City College of San Francisco
                </li>
                <li>
                Vice President of Administration - ASC 
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:flex hidden">
              <img
                src="./src/assets/ak.jpeg"
                alt="Aung Khant"
                className="w-full max-w-md h-auto rounded-xl shadow-xl transition-transform duration-500 transform hover:scale-105"
              />
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
