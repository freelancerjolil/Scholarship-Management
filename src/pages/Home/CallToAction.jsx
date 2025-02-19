import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="bg-[#F5F7FA] py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#134479] mb-4">
          Start Your Scholarship Journey Today!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Apply for exclusive scholarships or create an account to gain access
          to personalized opportunities.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <button className="btn bg-[#0057D9] text-white hover:bg-[#0e62bb] py-3 px-8 rounded-lg transition duration-300 w-full sm:w-auto">
              Sign Up
            </button>
          </Link>

          <Link to="/apply-scholarship">
            <button className="btn bg-secondary text-[#333333] hover:bg-[#fdb500] py-3 px-8 rounded-lg transition duration-300 w-full sm:w-auto">
              Apply Now
            </button>
          </Link>
        </div>

        {/* Optional urgency message */}
        <p className="text-sm text-[#FF4D4F] mt-6">
          Hurry, limited spots available! Don't miss out on this opportunity.
        </p>
      </div>
    </div>
  );
};

export default CallToAction;
