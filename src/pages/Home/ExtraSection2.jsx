import { motion } from 'framer-motion';

const ExtraSection2 = () => {
  const scholars = [
    {
      name: 'John Doe',
      university: 'University of Oxford',
      testimonial:
        'Thanks to this platform, I was able to pursue my dream degree with full financial support!',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Jane Smith',
      university: 'Harvard University',
      testimonial:
        "This scholarship changed my life, and I'm so grateful for the opportunities it opened up!",
      img: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Michael Johnson',
      university: 'Stanford University',
      testimonial:
        "I couldn't have achieved my goals without the guidance and support from this platform.",
      img: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Emily Davis',
      university: 'MIT',
      testimonial:
        'Receiving this scholarship allowed me to focus entirely on my studies and excel in my field.',
      img: 'https://randomuser.me/api/portraits/women/36.jpg',
    },
    {
      name: 'Chris Brown',
      university: 'University of Cambridge',
      testimonial:
        'This platform made the process simple and stress-free. I highly recommend it to everyone!',
      img: 'https://randomuser.me/api/portraits/men/27.jpg',
    },
    {
      name: 'Sophia Wilson',
      university: 'Yale University',
      testimonial:
        'The scholarship I received through this platform gave me the confidence to dream bigger.',
      img: 'https://randomuser.me/api/portraits/women/41.jpg',
    },
    {
      name: 'Daniel Martinez',
      university: 'Princeton University',
      testimonial:
        'I am forever grateful to this platform for helping me achieve my academic aspirations.',
      img: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      name: 'Olivia Taylor',
      university: 'Columbia University',
      testimonial:
        "Without this scholarship, I wouldn't have been able to pursue my passion for science.",
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-12 overflow-hidden relative">
      {/* Heading */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center text-[#017F4E] mb-6">
          Our Scholars, Our Pride
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Meet the talented individuals who have turned their dreams into
          reality through the scholarships on our platform.
        </p>
      </div>

      {/* Infinite Scroll */}
      <motion.div
        className="flex overflow-hidden whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {scholars.concat(scholars).map((scholar, index) => (
          <div
            key={index}
            className="w-64 mx-4 shrink-0 bg-white rounded-lg shadow-lg p-4 text-center"
          >
            <img
              src={scholar.img}
              alt={scholar.name}
              className="w-20 h-20 mx-auto rounded-full border-4 border-[#017F4E]"
            />
            <h3 className="text-lg font-semibold mt-4">{scholar.name}</h3>
            <p className="text-sm text-gray-500">{scholar.university}</p>
            <p className="text-xs text-gray-600 mt-2">{scholar.testimonial}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExtraSection2;
