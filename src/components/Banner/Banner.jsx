import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carousel1 from '../../assets/img/banner-1.jpg';
import Carousel2 from '../../assets/img/banner-2.jpg';
import Carousel3 from '../../assets/img/banner-3.jpg';

const Banner = () => {
  return (
    <div className="w-full bg-background shadow-lg">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}
        transitionTime={600}
        showStatus={false}
      >
        {/* Slide 1 */}
        <div className="relative">
          <img
            src={Carousel1}
            alt="Top Scholarships 2025"
            className="w-full min-h-[50vh] max-h-[60vh] md:min-h-[55vh] md:max-h-[65vh] lg:min-h-[60vh] lg:max-h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                Top Scholarships for 2025
              </h2>
              <p className="mt-4 text-base md:text-lg text-secondary">
                Unlock your future with the best scholarships available.
              </p>
              <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src={Carousel2}
            alt="Global Universities"
            className="w-full min-h-[50vh] max-h-[60vh] md:min-h-[55vh] md:max-h-[65vh] lg:min-h-[60vh] lg:max-h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
                Explore Global Universities
              </h2>
              <p className="mt-4 text-base md:text-lg text-white">
                Find the perfect university for your dreams.
              </p>
              <button className="mt-6 px-6 py-3 bg-secondary text-neutral rounded-lg hover:text-white transition-all">
                Discover More
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src={Carousel3}
            alt="Apply with Ease"
            className="w-full min-h-[50vh] max-h-[60vh] md:min-h-[55vh] md:max-h-[65vh] lg:min-h-[60vh] lg:max-h-[70vh] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                Apply with Ease
              </h2>
              <p className="mt-4 text-base md:text-lg text-info">
                Simplify your scholarship application process.
              </p>
              <button className="mt-6 px-6 py-3 bg-info text-white rounded-lg hover:bg-success transition-all">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
