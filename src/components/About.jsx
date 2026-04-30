import React from 'react';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const About = () => {
  const [text] = useTypewriter({
    words: ['Aspiring Software Engineer', 'Web Developer', 'AI & ML Enthusiast'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <section id="about" className="min-h-screen flex items-center md:items-end bg-gray-50 dark:bg-gray-900 pt-20 md:pt-56 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-10 md:gap-16 lg:gap-20 h-full">

        {/* Left Column: All Text Content */}
        <motion.div
          className="md:w-1/2 lg:w-3/5 text-center md:text-left relative md:bottom-20 lg:bottom-28 pb-10 md:pb-0"



          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >




          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
              <span className="block text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-400 mb-2">Hello, I'm</span>
              Ritik Parihar
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 h-10 md:h-12">
              <span className="text-black dark:text-gray-300">I'm a </span>
              <span className="text-blue-600 dark:text-blue-400">{text}</span>
              <Cursor cursorColor="#3B82F6" />
            </p>
          </div>


          <div className="text-left mt-8">
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I am a passionate and driven computer science student with a strong foundation in software development and a keen interest in artificial intelligence and machine learning. I thrive on solving complex problems and am dedicated to building efficient, scalable, and user-friendly applications.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="https://drive.google.com/file/d/1J1-gnjn5wkKntV1NMaTEf0MkSYiPTThE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-xl text-lg">
              Check Resume
            </a>
            <a href="https://github.com/RitikParihar09" target="_blank" rel="noopener noreferrer" className="bg-gray-800 dark:bg-gray-700 text-white font-bold py-3 px-8 rounded-xl hover:bg-black dark:hover:bg-gray-600 transition-transform transform hover:scale-105 shadow-xl text-lg flex items-center gap-2">
              <img src="https://img.icons8.com/?size=100&id=62856&format=png&color=ffffff" alt="GitHub" className="w-6 h-6" />
              GitHub
            </a>
          </div>

        </motion.div>

        {/* Right Column: Image with Flowing Code Background */}
        <motion.div
          className="md:w-1/2 lg:w-[55%] relative top-10 md:top-[10px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          {/* Glowing Background Blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-[400px] h-64 md:h-[400px] bg-blue-500/20 dark:bg-blue-600/30 rounded-full blur-[80px] md:blur-[100px] -z-10 animate-pulse"></div>
          <div className="absolute top-1/4 right-0 w-48 md:w-64 h-48 md:h-64 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[40px] md:blur-[60px] -z-10"></div>

          
          {/* Floating Code Snippets (Now correctly layered behind image) */}
          <motion.div 
            className="absolute -top-6 md:-top-16 -right-2 md:right-4 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-2 md:p-4 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-2xl z-0 scale-[0.7] md:scale-[0.95] origin-right overflow-hidden"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex gap-1.5 mb-2 md:mb-3">
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
            </div>
            <pre className="text-[8px] md:text-xs text-blue-500 font-mono overflow-hidden">
              {`function Dev() {
  return "🚀";
}`}
            </pre>
          </motion.div>


          <motion.div 
            className="absolute top-[10%] md:top-[20%] -left-4 md:-left-8 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-2 md:p-4 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-2xl z-0 scale-[0.7] md:scale-[0.95] origin-left overflow-hidden"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <div className="flex gap-1.5 mb-2 md:mb-3">
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-red-400"></div>
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full bg-green-400"></div>
            </div>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">1</span>
              <span className="text-purple-500">{`const goals = {`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">2</span>
              <span className="text-purple-500">{`  impact: 100,`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">3</span>
              <span className="text-purple-500">{`  vision: "Global",`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">4</span>
              <span className="text-purple-500">{`  status: "Building",`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">5</span>
              <span className="text-purple-500">{`  growth: "Rapid",`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">6</span>
              <span className="text-purple-500">{`  passion: true`}</span>
            </pre>
            <pre className="text-[8px] md:text-xs font-mono flex overflow-hidden">
              <span className="text-gray-500 pr-1 md:pr-2 select-none">7</span>
              <span className="text-purple-500">{`};`}</span>
            </pre>


          </motion.div>


          <motion.div 
            className="absolute bottom-40 md:bottom-60 right-0 md:-right-8 bg-white/10 dark:bg-gray-800/40 backdrop-blur-md p-2 md:p-3 rounded-xl border border-white/20 dark:border-gray-700/50 shadow-2xl z-0 scale-[0.7] md:scale-[0.95] origin-right overflow-hidden"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3" />
              </svg>
              <span className="text-[8px] md:text-[10px] text-gray-400 font-mono">bash</span>
            </div>
            <pre className="text-[7px] md:text-[11px] text-green-500 font-mono overflow-hidden">
              {`npm install passion`}
            </pre>
          </motion.div>







          <img 
            src="https://res.cloudinary.com/dmllknkkp/image/upload/v1777208386/homedp_ixjrcy.png" 
            alt="Portrait of Ritik Parihar" 
            className="w-full max-w-[280px] sm:max-w-xs md:max-w-xl lg:max-w-2xl object-cover mx-auto relative z-10 drop-shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:drop-shadow-[0_0_90px_rgba(37,99,235,0.5)]"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x800/E2E8F0/4A5568?text=Image+Error'; }}
          />



        </motion.div>
      </div>
    </section>



  );
};

export default About;
