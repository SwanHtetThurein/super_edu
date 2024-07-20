import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const HeroTest = () => {
    return (
        <div className="relative pt-48 pb-12 overflow-hidden hero-bg xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
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
                            <stop stopColor="#117fff" stopOpacity="0.36" />
                            <stop offset="0.7" stopColor="#F5F2FD" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        {/* Uncomment if needed */}
                        {/* <div className="flex flex-shrink-0">
                            <a href="#" title="BakerStreet" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="BakerStreet" />
                            </a>
                        </div> */}
                        {/* Uncomment if needed */}
                        {/* <div className="md:hidden">
                            <button type="button" className="p-2 -m-2 transition-all duration-200 rounded-full text-black focus:outline-none focus:ring-offset-secondary focus:ring-2 focus:ring-offset-1 focus:ring-primary">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div> */}
                        {/* Uncomment if needed */}
                        {/* <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> About </a>
                            <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Services </a>
                            <a href="#" title="" className="font-sans text-base font-normal transition-all duration-200 rounded text-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary"> Contacts </a>
                        </div> */}
                    </div>
                </div>
            </header>

            <div className="absolute inset-y-0 right-0 transform md:-translate-x-8 lg:-translate-x-12 xl:-translate-x-16">
                <img className="object-cover w-full h-full max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110" src="./src/assets/collage.png" alt="" />
                {/* If using the URL */}
                {/* <img className="object-cover w-full h-full max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/hero/5/background.png" alt="" /> */}
            </div>

            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full text-right lg:w-2/3 xl:w-1/2 md:text-left">
                        {/* Uncomment if needed */}
                        {/* <p className="font-sans text-base font-normal tracking-tight uppercase text-white">STARTING AT $9.99/MONTH</p> */}
                        {/* <h1 className="mt-6 tracking-tighter text-black">
                            <span className="font-sans font-normal text-7xl">Master</span><br />
                            <span className="font-serif italic font-normal text-8xl">Bread making</span>
                        </h1> */}
                        <div className="lg:text-center lg:pr-8">
                            <TypeAnimation
                                sequence={[
                                    "Win Scholarships",
                                    1000,
                                    "Obtain Visas",
                                    1000,
                                    "Get Admitted",
                                    1000
                                ]}
                                wrapper="h1"
                                speed={30}
                                className="font-semibold text-4xl md:text-6xl"
                                repeat={Infinity}
                            />
                        </div>
                        <p className="mt-12 font-sans text-lg font-normal leading-7 md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-800 text-center">
                            Through college admission, scholarships, and visa application, we deliver the results.
                        </p>

                        <div className="flex items-center justify-center mt-8 space-x-3 md:justify-center sm:space-x-4">
                            <a
                                href="#"
                                title=""
                                className="
                                    btn-grad
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
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
                                    transition-transform duration-500 transform hover:scale-110
                                "
                                role="button"
                            >
                                Talk with us
                            </a>

                            {/* Uncomment if needed */}
                            {/* <a
                                href="#"
                                title=""
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-semibold
                                    transition-all
                                    duration-200
                                    bg-transparent
                                    border-2
                                    rounded-full
                                    sm:leading-8
                                    text-white
                                    border-primary
                                    hover:bg-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
                                    hover:text-black
                                    sm:text-lg
                                    focus:ring-offset-secondary
                                "
                                role="button"
                            >
                                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                                </svg>
                                Watch trailer
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroTest;