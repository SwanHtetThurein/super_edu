import { Facebook, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-8 md:space-y-0">
          
          {/* <div className="flex flex-col sm:items-center sm:mt-4 sm:space-y-4 md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Want to know more? 
            </h2>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Feel free to talk to us!
            </h2>
            
          </div> */}
    
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
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Our Socials
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium flex space-x-4">
              <li className="mb-4">
                <a href="https://www.facebook.com" className="hover:underline">
                  <Facebook className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="hover:underline">
                  <Twitter className="h-6 w-6" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="hover:underline">
                  <Linkedin className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
    
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
    
        <div className="text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
             Developed by {' '}
            <a href="www.linkedin.com/in/swan-thurein-7058b1191" className="hover:underline">
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
