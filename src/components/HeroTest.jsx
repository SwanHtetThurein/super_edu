import { TypeAnimation } from 'react-type-animation';
import collage from '../assets/collage.png'

const HeroTest = () => {
    return (
        <div className="relative pt-48 pb-20 overflow-hidden hero-bg xl:pt-60 sm:pb-24 lg:pb-40 xl:pb-56 2xl:pb-64">
              <div className="absolute bottom-0 right-0 z-[-1]">
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
              <stop stopColor="#4eb3b3" stopOpacity="0.36" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
            <div className=" absolute inset-y-0 right-0 transform md:translate-x-[-30px] lg:translate-x-[-40px] xl:translate-x-[-50px]">
                <img className="object-contain w-full h-full max-w-4xl origin-left opacity-50 xl:opacity-100 lg:scale-110  transition-transform duration-500 transform hover:scale-110" src={collage} alt="" />
            </div> 

            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full text-right lg:w-2/3 xl:w-1/2 md:text-left">
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
                        <p className="sm:bg-white-500/10 sm:backdrop-blur-[2px] sm:rounded-xl sm:p-3 lg:bg-transparent mt-12 text-lg font-normal leading-7 md:max-w-md lg:max-w-lg xl:max-w-xl text-gray-800 text-center">
                            Through college admission, scholarships, and visa application, we deliver the results.
                        </p>

                        <div className="flex items-center justify-center mt-8 space-x-3 md:justify-center sm:space-x-4">
                            <a
                                href="#services"
                                title=""
                                className="
                                transition-transform duration-500 transform hover:scale-110
                                    btn-grad
                                    inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-semibold
                                    border-2 border-transparent
                                    rounded-full
                                    sm:leading-8
                                    text-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                                    
                                "
                                role="button"
                            >
                                Learn More 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroTest;