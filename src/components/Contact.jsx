import { Facebook, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-8 md:space-y-0 md:space-x-8">
          
          <div className="flex flex-col items-center sm:mt-4 sm:space-y-4 md:w-1/3">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              Want to know more? 
            </h2>
            <a
              role="button"
              href="https://t.me/swanthurein"
              className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold text-gray-300 btn-grad font-semibold transition-transform duration-500 transform hover:scale-110 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-black sm:text-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary">
              Talk with us
            </a>
          </div> 

          <div className="flex flex-col items-center md:w-1/3">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold text-gray-600 mb-2">Swan</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.facebook.com/swanhtet.threin" 
                    className="link--popup-text" 
                    aria-label="Facebook profile of Swan Thurein"
                  >
                    <Facebook className="h-8 w-8" color="#3e9392" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/swan-thurein-7058b1191" 
                    className="link--popup-text" 
                    aria-label="LinkedIn profile of Swan Thurein"
                  >
                    <Linkedin className="h-8 w-8" color="#3e9392" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold text-gray-600 mb-2">AK</p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=100038362681276" 
                    className="link--popup-text" 
                    aria-label="Facebook profile of Aung Khant"
                  >
                    <Facebook className="h-8 w-8" color="#3e9392" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/aung-khant-3040b1249/" 
                    className="link--popup-text" 
                    aria-label="LinkedIn profile of Aung Khant"
                  >
                    <Linkedin className="h-8 w-8" color="#3e9392" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    
        <hr className="mt-12 my-6 border-gray-200" />
    
        <div className="text-center">
          <span className="text-sm text-gray-500">
            Developed by {' '}
            <a 
              href="https://www.linkedin.com/in/swan-thurein-7058b1191" 
              className="link--popup-text"
              aria-label="LinkedIn profile of Swan Thurein"
            >
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