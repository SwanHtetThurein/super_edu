import { Facebook, Twitter, Linkedin } from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
          
          <div className="flex flex-col sm:items-center sm:mt-4 sm:space-y-4 md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Want to know more? 
            </h2>
            <form
              action="#"
              method="POST"
              className="flex flex-col sm:flex-row sm:space-x-4"
            >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email "
                required
                className="w-full p-2 mb-4 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-md hover:from-green-500 hover:to-blue-700 transition-transform duration-500 transform hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
    
          <div className="md:ml-24 md:w-1/3 md:ml-8">
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
          
          <div className="md:w-1/3 md:ml-8">
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
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
            © 2023{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
