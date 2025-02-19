import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://yourapi.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccess('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSuccess('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mt-2">
          We’d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered w-full mb-4"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full mb-4"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="input input-bordered w-full mb-4"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full mb-4"
                rows="4"
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {success && (
              <p className="text-center mt-3 text-green-600">{success}</p>
            )}
          </div>

          {/* Contact Details */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-secondary text-xl mr-3" />
              <p className="text-gray-700">support@scholarshipms.com</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-secondary text-xl mr-3" />
              <p className="text-gray-700">+880 1704 557 558</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-secondary text-xl mr-3" />
              <p className="text-gray-700">Rajshahi, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Google Maps Integration (Optional) */}
        <div className="mt-10">
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.848434494548!2d90.37410911498212!3d23.75088679468247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8947a47f9d1%3A0x10b5f3df573be2b3!2sRajshahi!5e0!3m2!1sen!2sbd!4v1641466348342!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
