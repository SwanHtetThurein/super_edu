import { Facebook, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-white  border-t border-gray-200 ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-8 md:space-y-0">
          
           <div className="flex flex-col sm:items-center sm:mt-4 sm:space-y-4 md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-900  mb-2">
              Want to know more? 
            </h2>
            <button className="inline-flex
                                    items-center
                                    justify-center
                                    px-5
                                    py-2
                                    font-sans
                                    text-base
                                    font-semibold
                                    text-gray-300 btn-grad font-semibold transition-transform duration-500 transform hover:scale-110
                                     transition-all
                                    duration-200
                                    border-2 border-transparent
                                    rounded-full
                                    sm:leading-8
                                    bg-black
                                    sm:text-lg
                                    text-white
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary">
              Talk with us
            </button>
            
          </div> 
    
          {/* <div className="md:ml-24 md:w-1/3 md:ml-8">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
           */}

          <div className="md:w-1/3 md:ml-8">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
              Follow us
            </h2>
            <ul className="text-gray-500 font-medium flex space-x-8 ">
              <li className="mb-4">
                <a href="https://www.facebook.com" className="link--popup-text ">
                  <Facebook className="h-8 w-8" color="#3e9392" absoluteStrokeWidth={true} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="link--popup-text ">
                  <Twitter className="h-8 w-8" color="#3e9392" absoluteStrokeWidth={true} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="link--popup-text">
                  <Linkedin className="h-8 w-8" color="#3e9392" absoluteStrokeWidth={true} />
                </a>
              </li>
            </ul>
          </div>

        </div>
    
        <hr className="mt-12 my-6 border-gray-200 dark:border-gray-300" />
    
        <div className="text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
             Developed by {' '}
            <a href="www.linkedin.com/in/swan-thurein-7058b1191" className="link--popup-text">
               Swan Thurein
            </a>
            {' '}@2024
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
