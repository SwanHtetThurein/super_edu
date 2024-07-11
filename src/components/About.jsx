import React from 'react'

const About = () => {
  return (
    <div className="bg-about">
      <section id="about" className="py-14 lg:py-24 relative ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-9">
            <div className="col-span-2 img-box">
              <img src="./src/assets/swan.jpg" alt="About Us tailwind page" className="max-lg:mx-auto rounded-lg"></img>
            </div>
            <div className="col-span-3 lg:pl-[50px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Driven by a passion for seamless user experiences, we've meticulously curated pagedone
                  to empower creators, designers, and developers alike. Our mission is to provide a
                  comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every
                  interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-9">
            <div className="col-span-3 lg:pr-24 flex items-center">
              <div className="data w-full">
                <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page" className="block lg:hidden mb-9 mx-auto rounded-lg"/> 
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                  We are Creative Since 2005
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Pagedone isn't just a collection of components and guidelines; it's a philosophy. We go
                  beyond aesthetics, prioritizing accessibility, scalability, and usability. Every element,
                  from the tiniest detail to the grandest layout, is meticulously crafted to enhance functionality and elevate
                  user satisfaction.
                </p>
              </div>
            </div>
            <div className="col-span-2 img-box">
              <img src="https://pagedone.io/asset/uploads/1702034785.png" alt="About Us tailwind page" className="hidden lg:block rounded-lg"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
