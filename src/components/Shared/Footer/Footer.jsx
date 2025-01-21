import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for internal routing
import logo from '../../../assets/img/logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          {/* Logo and Subscribe Section */}
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <Link to="/">
                <img
                  className="w-auto h-7"
                  src={logo}
                  alt="Scholarship Management System Logo - SMS"
                />
              </Link>

              <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">
                Stay updated on the latest scholarship opportunities and
                application details.
              </p>

              <div className="flex mt-6 -mx-2">
                {/* Social Media Icons */}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>

                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About SMS
                </h3>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  About Us
                </Link>
                <Link
                  to="/faq"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  FAQ
                </Link>
                <Link
                  to="/terms"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Terms & Conditions
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Scholarships
                </h3>
                <Link
                  to="/browse-scholarships"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Browse Scholarships
                </Link>
                <Link
                  to="/categories"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Scholarship Categories
                </Link>
                <Link
                  to="/application-guide"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Application Guide
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  For Institutions
                </h3>
                <Link
                  to="/partner-with-us"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Partner With Us
                </Link>
                <Link
                  to="/post-scholarships"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Post Scholarships
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  +1 526 654 8965
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
                  support@sms.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            &copy; 2025{' '}
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-500"
            >
              Scholarship Management System
            </Link>{' '}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
