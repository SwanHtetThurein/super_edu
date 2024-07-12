import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
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
                About Us
              </h2>
              <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
                Driven by a passion for seamless user experiences, we've meticulously curated pagedone
                to empower creators, designers, and developers alike. Our mission is to provide a
                comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every
                interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 lg:py-24 relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="Creative Since 2005"
                className="w-full max-w-md h-auto rounded-xl shadow-xl mb-8 lg:mb-0 transition-transform duration-500 transform hover:scale-105 lg:hidden"
              />
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                We are Creative Since 2005
              </h2>
              <p className="text-lg leading-7 text-gray-600 dark:text-gray-300">
                Pagedone isn't just a collection of components and guidelines; it's a philosophy. We go
                beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element,
                from the tiniest detail to the grandest layout, is meticulously crafted to enhance functionality and elevate
                user satisfaction.
              </p>
            </div>
            <div className="flex justify-center lg:flex hidden">
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="Creative Since 2005"
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
