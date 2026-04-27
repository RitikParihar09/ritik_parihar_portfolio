import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

const AnimatedSection = ({ children, id, className }) => (
  <motion.section
    id={id}
    className={`min-h-screen p-8 md:p-16 lg:p-24 flex flex-col justify-center ${className || ''}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);

const certificationData = [
  {
    title: 'Microsoft AI & ML Engineering',
    issuer: 'Microsoft on Coursera',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1470&auto=format&fit=crop',
    link: 'https://coursera.org/verify/professional-cert/Q0FMUVJ2ZWXS',
  },
  {
    title: 'Deep Learning & Neural Networks',
    issuer: 'IBM on Coursera',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=1470&auto=format&fit=crop',
    link: 'https://coursera.org/verify/4JL9OKVITF73',
  },
  {
    title: 'Artificial Intelligence (AI)',
    issuer: 'IBM on Coursera',
    imageUrl: 'https://images.unsplash.com/photo-1593349480506-8433634cdcbe?q=80&w=1470&auto=format&fit=crop',
    link: 'https://coursera.org/verify/4HNVWZ0G0ESH',
  },
];

const CertificationCard = ({ title, issuer, imageUrl, link }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col h-full border border-gray-100 dark:border-gray-700 group hover:shadow-2xl transition-all duration-500">
      <div className="relative overflow-hidden h-48 md:h-60 bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
        {!imgError ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            onError={() => setImgError(true)} 
          />
        ) : (
          <div className="p-8 text-center">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Certificate</h3>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow text-left">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold rounded-full uppercase tracking-widest mb-2">
            Verified Professional
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-800 dark:text-white leading-tight mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Issued by: <span className="text-gray-700 dark:text-gray-300">{issuer}</span></p>
        </div>

      <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-700">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gray-900 dark:bg-gray-700 text-white font-bold py-3.5 rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all shadow-lg group/btn"
        >
          Verify Credential
          <svg className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </a>
      </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const prevRef = React.useRef(null);
  const nextRef = React.useRef(null);

  return (
    <AnimatedSection id="certifications" className="bg-gray-50 dark:bg-gray-900/50 !pt-20 md:!pt-32 !pb-12 md:!pb-16 transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-4 w-full">
        {/* Left Side Text */}
        <div className="w-full lg:w-2/5 text-center lg:text-left space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 dark:text-white leading-tight">
              My <br className="hidden lg:block" />
              <span className="text-blue-600 dark:text-blue-500">Certifications</span>
            </h2>
            <div className="w-16 md:w-24 h-1.5 md:h-2 bg-blue-600 dark:bg-blue-500 mx-auto lg:mx-0 mt-4 md:mt-6 rounded-full shadow-lg shadow-blue-500/20"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            I'm committed to staying at the forefront of technology through industry-leading certifications from top tech giants and universities.
          </p>

          <div className="pt-2 md:pt-4">
            <h3 className="text-[10px] md:text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4 md:mb-6">Expertise Domains</h3>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-full">
              {['AI Engineering', 'Deep Learning', 'Neural Networks', 'Microsoft Azure', 'Computer Vision'].map((domain, i) => (
                <span key={i} className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-1.5 md:py-2 rounded-xl text-[10px] sm:text-xs md:text-sm font-bold shadow-sm hover:border-blue-500 transition-all cursor-default whitespace-nowrap">
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Slider */}
        <div className="w-full lg:w-3/5 relative group/swiper mt-6 sm:mt-10 lg:mt-0">
          <div className="relative px-4 lg:px-0">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1.1, spaceBetween: 15 },
                480: { slidesPerView: 1.2, spaceBetween: 20 },
                768: { slidesPerView: 'auto', spaceBetween: 30 },
                1024: { slidesPerView: 'auto', spaceBetween: 40 }
              }}
              pagination={{ clickable: true }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="certification-swiper w-full !py-8 md:!py-12"
            >
              {certificationData.map((cert, i) => (
                <SwiperSlide key={i} className="max-w-[260px] sm:max-w-[340px] md:max-w-[440px] !h-auto">
                  <CertificationCard {...cert} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons - Strictly Desktop Only - Floating over side slides */}
            <div className="hidden lg:block">
              <button
                ref={prevRef}
                className="swiper-button-prev-custom absolute left-[1%] xl:left-[2%] top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border border-white/20 dark:border-gray-700/50 group/nav"
              >
                <svg className="w-8 h-8 transition-transform group-hover/nav:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                ref={nextRef}
                className="swiper-button-next-custom absolute right-[1%] xl:right-[2%] top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full shadow-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all border border-white/20 dark:border-gray-700/50 group/nav"
              >
                <svg className="w-8 h-8 transition-transform group-hover/nav:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>







      <style dangerouslySetInnerHTML={{
        __html: `
        .certification-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #3B82F6;
          opacity: 0.2;
          transition: all 0.3s ease;
        }
        @media (min-width: 768px) {
          .certification-swiper .swiper-pagination-bullet { width: 12px; height: 12px; }
        }
        .certification-swiper .swiper-pagination-bullet-active {
          width: 24px;
          md:width: 32px;
          border-radius: 6px;
          opacity: 1;
        }
        .swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        /* Blur effect for non-active slides */
        .certification-swiper .swiper-slide {
          transition: all 0.5s ease;
          filter: blur(4px) grayscale(0.5);
          opacity: 0.5;
          transform: scale(0.9);
        }
        .certification-swiper .swiper-slide-active {
          filter: blur(0) grayscale(0);
          opacity: 1;
          transform: scale(1);
        }
      `}} />


    </AnimatedSection>
  );
};

export default Certifications;