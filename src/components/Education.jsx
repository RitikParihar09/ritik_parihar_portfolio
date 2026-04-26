import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Graduation Cap Icon
const GraduationCapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-500 dark:text-blue-400"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5" />
  </svg>
);

// School Icon
const SchoolIcon = () => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 20H2" />
    <path d="M18 20V8l-6-4-6 4v12" />
    <path d="M18 12h-4" />
    <path d="M14 8h-4" />
    <path d="M10 12H6" />
    <path d="M10 16H6" />
    <path d="M18 16h-4" />
  </svg>
);



const timelineData = [
  {
    year: '2022 - 2026',
    title: 'Bachelor of Technology, CSE',
    institute: 'Graphic Era Hill University, Dehradun',
    details: 'Currently pursuing my B.Tech with a focus on software development and machine learning. Maintaining a CGPA of 8.42/10.0.',
  },
  {
    year: '2021 - 2022',
    title: 'Senior Secondary (XII)',
    institute: 'Vivakanand Vidhya Mandir Inter College, Bageshwar',
    details: 'Completed my 12th grade in the Science stream (PCM with Computer Science), securing 83.6%.',
  },
  {
    year: '2019 - 2020',
    title: 'Secondary School (X)',
    institute: 'Vivakanand Vidhya Mandir Inter College, Bageshwar',
    details: 'Passed my 10th-grade examinations with a score of 87.6%.',
  },

];

const TimelineItem = ({ item, index, activeIndex, onInView, direction }) => {
  const { ref, inView } = useInView({
    rootMargin: "-45% 0px -55% 0px", // Adjusted to align better with the scroll line
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onInView(index);
    }
  }, [inView, index, onInView]);

  const isFilled = index <= activeIndex;
  
  const cardVariants = {
    hidden: { opacity: 0, x: direction === 'right' ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };
  
  const CardContent = () => (
    <div className="relative group">
      <div className={`p-8 rounded-2xl transition-all duration-500 border ${isFilled ? 'bg-white dark:bg-gray-800 shadow-2xl border-blue-100 dark:border-blue-900/30' : 'bg-white/40 dark:bg-gray-900/40 border-gray-100 dark:border-gray-800'}`}>

        <div className="flex flex-col">
          <div className="flex-1">
            <h3 className={`text-xl font-extrabold flex items-center gap-3 transition-colors duration-500 ${isFilled ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600'}`}>
              <span className={`${isFilled ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
                {index === 0 ? <GraduationCapIcon /> : <SchoolIcon />}
              </span>

              {item.title}
            </h3>

            <p className={`font-semibold mt-1 transition-colors duration-500 ${isFilled ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-700'}`}>
              {item.institute}
            </p>
            <p className={`mt-4 text-sm leading-relaxed transition-colors duration-500 ${isFilled ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-700'}`}>
              {item.details}
            </p>
          </div>
        </div>
      </div>

    </div>
  );

  return (
    <div ref={ref} className="flex justify-center md:justify-between md:items-center w-full">
      {/* Left Card */}
      <div className="hidden md:block w-5/12">
        {direction === 'left' && (
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <CardContent />
          </motion.div>
        )}
      </div>

      {/* Timeline Dot & Year */}
      <div className="z-10 flex items-center justify-center relative">
        {/* The Year Label (Now next to the dot) */}
        <div className={`absolute whitespace-nowrap px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-tighter transition-all duration-500 shadow-sm ${
          direction === 'left' 
            ? '-top-10 md:top-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[calc(100%+1.5rem)] text-center md:text-left' 
            : '-top-10 md:top-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:right-[calc(100%+1.5rem)] md:left-auto text-center md:text-right'
        } ${isFilled ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-gray-200 text-gray-500 dark:bg-gray-800'}`}>
          {item.year}
        </div>





        <div className={`w-6 h-6 rounded-full border-4 shadow-lg transition-all duration-500 transform ${isFilled ? 'bg-blue-600 border-blue-200 dark:border-blue-900 scale-125' : 'bg-gray-300 border-gray-100 dark:border-gray-800 scale-100'}`}>
          <div className={`w-full h-full rounded-full transition-opacity duration-500 ${isFilled ? 'opacity-100' : 'opacity-0'} bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]`} />
        </div>
      </div>

      
      {/* Right Card */}
      <div className="w-full md:w-5/12">
         <motion.div
            className={`ml-8 md:ml-0 ${direction === 'left' ? 'md:hidden' : ''}`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <CardContent />
          </motion.div>
      </div>
    </div>
  );
};


const Education = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 60%', 'end center'],
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="education" className="min-h-screen w-full py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">My Education</h2>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* The timeline vertical line */}
          <div className="absolute left-2 md:left-1/2 top-0 w-1.5 h-full bg-gray-200 dark:bg-gray-800 rounded-full origin-top -translate-x-1/2 shadow-inner" />
          <motion.div
            className="absolute left-2 md:left-1/2 top-0 w-1.5 h-full bg-blue-600 dark:bg-blue-500 rounded-full origin-top -translate-x-1/2 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            style={{ scaleY }}
          />

          <div className="space-y-24 py-10">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.year}
                item={item}
                index={index}
                activeIndex={activeIndex}
                direction={index === 1 ? 'right' : 'left'}
                onInView={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default Education;

