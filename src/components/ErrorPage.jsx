import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col justify-center items-center text-center p-6">
      {/* Error Icon/Illustration */}
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-32 h-32 mx-auto text-[#FF4D4F]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 6L6 18M6 6l12 12"
          />
        </svg>
      </div>

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-[#0057D9] mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-lg text-[#333333] mb-4">
        We’re fixing it! Please bear with us.
      </p>

      {/* Call-to-Action Button */}
      <div className="flex space-x-4">
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-[#FEC900] text-[#333333] rounded-lg hover:bg-[#1890FF] transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/"
          className="px-6 py-3 bg-[#1890FF] text-white rounded-lg hover:bg-[#0057D9] transition-colors"
        >
          Return to Homepage
        </Link>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-sm text-[#333333]">
        <p className="mb-2">
          <Link to="/privacy-policy" className="hover:text-[#0057D9]">
            Privacy Policy
          </Link>
        </p>
        <p className="mb-2">
          <Link to="/terms-conditions" className="hover:text-[#0057D9]">
            Terms & Conditions
          </Link>
        </p>
        <p>
          <Link to="/contact" className="hover:text-[#0057D9]">
            Contact
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default ErrorPage;
