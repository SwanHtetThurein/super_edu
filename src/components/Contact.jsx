import { Facebook, Linkedin } from 'lucide-react';
import logo from "../assets/logo.png";

const Contact = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-8 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="flex items-center justify-center">
            <a href="#" className="flex items-center flex-shrink-0 text-center md:text-left">
              {/* TODO Change logo to svg */}
              <img className="h-10 w-15 mr-2" src={logo} alt="logo" /> 
              <span className="text-lg font-semibold tracking-tight">
                Super Education<br/> Consulting
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center md:mt-6 md:items-center text-center">
            <h2 className="text-lg font-[500] text-gray-900 mb-2">
              Want to know more? 
            </h2>
            <a
              role="button"
              href="https://t.me/swanthurein"
              className="inline-flex items-center justify-center px-5 py-2 font-sans text-base font-semibold text-gray-300 btn-grad font-semibold transition-transform duration-500 transform hover:scale-110 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-black sm:text-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary">
              Talk with us
            </a>
          </div> 

          <div className="flex flex-col items-center text-center">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center">
                <p className="text-sm font-semibold text-gray-600 mb-2">Swan</p>
                <div className="flex items-center justify-center space-x-4">
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
                <div className="flex items-center justify-center space-x-4">
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
            Developed by{' '}
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