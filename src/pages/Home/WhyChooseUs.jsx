import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5F7FA] py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#333333] mb-4">
          Why Choose Our Scholarship Platform?
        </h2>

        {/* Subheading */}
        <p className="text-lg text-[#333333] mb-12">
          Access thousands of scholarships and connect with top universities
          worldwide.
        </p>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-graduation-cap text-[#0057D9] text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              Wide Range of Scholarships
            </h3>
            <p className="text-[#333333]">
              Find scholarships from various universities and regions.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-check-circle text-[#1890FF] text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              Easy Application Process
            </h3>
            <p className="text-[#333333]">
              Apply in just a few clicks with a seamless process.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-sync-alt text-[#36CFC9] text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              Real-Time Updates
            </h3>
            <p className="text-[#333333]">
              Stay updated with real-time notifications on your application
              status.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <div className="flex justify-center items-center mb-4">
              <i className="fas fa-headset text-[#52C41A] text-3xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-2">
              Dedicated Support
            </h3>
            <p className="text-[#333333]">
              Our support team is always here to assist you throughout the
              process.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/scholarships" // Corrected the comment format
            className="bg-[#0057D9] text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#1890FF] transition-all"
          >
            Explore Scholarships Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
