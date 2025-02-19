const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">About Us</h1>
        <p className="text-lg mb-6 text-gray-700">
          Welcome to{' '}
          <span className="text-secondary font-semibold">
            Scholarship Management System
          </span>
          , your go-to platform for finding and applying to scholarships
          seamlessly. Our mission is to connect students with the best
          opportunities to achieve their academic dreams.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Our Mission
            </h2>
            <p className="text-gray-700">
              We aim to simplify the scholarship application process by
              providing a user-friendly platform that helps students access
              funding with ease.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Why Choose Us?
            </h2>
            <p className="text-gray-700">
              With advanced filtering, real-time updates, and a secure
              application process, we ensure that students find the best
              scholarships that fit their needs.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-primary">Get in Touch</h2>
          <p className="text-gray-700 mt-2">
            Have questions? Reach out to our support team anytime.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 text-left">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">
                How do I apply for scholarships?
              </summary>
              <p className="text-gray-700 mt-2">
                Simply register, search for available scholarships, and submit
                your application with the required documents.
              </p>
            </details>
            <details className="bg-white p-4 rounded-lg shadow">
              <summary className="font-semibold cursor-pointer">
                Is the platform free to use?
              </summary>
              <p className="text-gray-700 mt-2">
                Yes, our platform is completely free for students looking for
                scholarships.
              </p>
            </details>
          </div>
        </div>

        {/* Latest News & Announcements */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Latest News & Announcements
          </h2>
          <p className="text-gray-700">
            Stay updated with the latest scholarship opportunities, deadlines,
            and important news.
          </p>
        </div>

        {/* Success Stories & Testimonials */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Success Stories
          </h2>
          <p className="text-gray-700">
            Hear from students who have successfully received scholarships
            through our platform.
          </p>
          <div className="mt-4 bg-white p-6 rounded-lg shadow">
            <p className="text-gray-700 italic">
              "Thanks to this platform, I secured a full scholarship for my
              studies. Highly recommended!"
            </p>
            <p className="text-gray-900 font-semibold mt-2">
              - Sarah Ahmed, Scholarship Recipient
            </p>
          </div>
        </div>

        {/* Custom Features Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Custom Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 12 }, (_, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-secondary">
                  Feature {index + 1}
                </h3>
                <p className="text-gray-700 mt-2">
                  Description of feature {index + 1} explaining its benefits and
                  functionality.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
