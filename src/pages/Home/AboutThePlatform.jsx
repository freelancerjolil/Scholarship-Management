const AboutThePlatform = () => {
  return (
    <div className="bg-[#F5F7FA] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-[#134479] text-center mb-8">
          About the Platform
        </h2>

        {/* Introduction */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#0057D9] mb-4">
            What is SMS?
          </h3>
          <p className="text-gray-600">
            Our Scholarship Management System (SMS) helps students search and
            apply for scholarships from a wide range of universities and
            organizations. With an easy-to-use interface, students can manage
            their applications, track their progress, and access detailed
            scholarship information all in one place.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-[#008D54]">
              Search Scholarships
            </h4>
            <p className="text-gray-500 mt-2">
              Easily search for scholarships by criteria such as university,
              location, or amount.
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-[#FF6B35]">
              Apply for Scholarships
            </h4>
            <p className="text-gray-500 mt-2">
              Quickly apply for multiple scholarships with a single click
              through your dashboard.
            </p>
          </div>
          <div className="card bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-xl font-semibold text-[#1890FF]">
              Track Your Application
            </h4>
            <p className="text-gray-500 mt-2">
              Track the status of your scholarship applications in real-time.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white shadow-xl rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#FEC900] mb-4">
            How It Works
          </h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <span className="text-xl font-semibold text-[#36CFC9] mr-4">
                1.
              </span>
              <p className="text-gray-600">
                Search scholarships based on your preferences like university,
                location, or scholarship amount.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-xl font-semibold text-[#36CFC9] mr-4">
                2.
              </span>
              <p className="text-gray-600">
                Apply to the scholarships you're interested in with just a few
                clicks.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-xl font-semibold text-[#36CFC9] mr-4">
                3.
              </span>
              <p className="text-gray-600">
                Track the status of your applications through your personalized
                dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="btn bg-[#0057D9] text-white hover:bg-[#0e62bb] py-3 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutThePlatform;
