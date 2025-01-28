const ExtraSection1 = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-accent to-primary mt-10 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <h2 className="text-3xl text-white lg:text-5xl font-semibold text-center mb-6">
            Stay Informed, Stay Ahead
          </h2>
          <p className="text-center max-w-2xl mx-auto text-lg lg:text-xl mb-10">
            Track your scholarship applications in real time and ensure you
            never miss a deadline. Simplify your journey toward success.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {/* Card 1 */}
            <div className="card bg-white text-black shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">1. Submitted</h3>
              <p className="mt-2 text-sm">
                Your application has been successfully submitted.
              </p>
            </div>
            {/* Card 2 */}
            <div className="card bg-white text-black shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">2. Under Review</h3>
              <p className="mt-2 text-sm">
                The scholarship committee is reviewing your details.
              </p>
            </div>
            {/* Card 3 */}
            <div className="card bg-white text-black shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <h3 className="text-xl font-semibold">3. Approved</h3>
              <p className="mt-2 text-sm">
                Congratulations! Your scholarship has been approved.
              </p>
            </div>
          </div>

          {/* Button */}
          <div className="text-center mt-8">
            <button className="btn bg-white text-[#017F4E] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition-all duration-300">
              Track My Applications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraSection1;
