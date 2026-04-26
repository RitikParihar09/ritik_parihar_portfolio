import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vercelLogo from '../assets/vercel.svg';
import netlifyLogo from '../assets/netlify.svg';
import postmanLogo from '../assets/postman.svg';
import vscodeLogo from '../assets/vscode.png';
import langchainLogo from '../assets/langchain.png';



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

const Skills = () => {
    const [activeTab, setActiveTab] = useState('Languages');

    const skillsData = {
        'Languages': [
            { name: 'Java', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
            { name: 'Python', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000' },
            { name: 'SQL', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000' },
            { name: 'JavaScript', level: 'Intermediate', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
            { name: 'C++', level: 'Beginner', icon: 'https://img.icons8.com/?size=100&id=40669&format=png&color=000000' },
            { name: 'C', level: 'Beginner', icon: 'https://img.icons8.com/?size=100&id=40670&format=png&color=000000' },

        ],
        'AI / ML': [
            { name: 'TensorFlow', level: 'Intermediate', icon: 'https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000' },
            { name: 'Pandas', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000' },
            { name: 'NumPy', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000' },
            { name: 'OpenCV', level: 'Advanced', icon: 'https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg' },

            { name: 'LangChain', level: 'Intermediate', icon: langchainLogo },

        ],

        'Web Dev': [
            { name: 'HTML5', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
            { name: 'CSS3', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
            { name: 'React', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000' },
            { name: 'Spring Boot', level: 'Intermediate', icon: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000' },
            { name: 'Tailwind CSS', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
            { name: 'MongoDB', level: 'Advanced', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
        ],


        'Tools': [
            { name: 'Git', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
            { name: 'GitHub', level: 'Expert', icon: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000' },
            { name: 'Vercel', level: 'Advanced', icon: vercelLogo },


            { name: 'Netlify', level: 'Advanced', icon: netlifyLogo },

            { name: 'Docker', level: 'Learning', icon: 'https://img.icons8.com/?size=100&id=22813&format=png&color=000000' },
            { name: 'Postman', level: 'Advanced', icon: postmanLogo },

            { name: 'VS Code', level: 'Expert', icon: vscodeLogo },

        ],
        'Core': [
            { name: 'Data Structures & Algorithms', level: 'Advanced', shortName: 'DSA' },
            { name: 'Database Management', level: 'Advanced', shortName: 'DBMS' },
            { name: 'Operating System', level: 'Intermediate', shortName: 'OS' },
            { name: 'Computer Networks', level: 'Intermediate', shortName: 'CN' },
            { name: 'Object Oriented Programming', level: 'Advanced', shortName: 'OOPs' },
        ],

        'Soft Skills': [
            { name: 'Problem Solving', level: 'Expert', shortName: 'PS' },
            { name: 'Leadership', level: 'Advanced', shortName: 'LD' },
            { name: 'Communication', level: 'Advanced', shortName: 'CM' },
            { name: 'Agile', level: 'Intermediate', shortName: 'AG' },
        ]

    };


    const categories = Object.keys(skillsData);

    return (
        <AnimatedSection id="skills" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 !pt-20 md:!pt-32 !pb-12 md:!pb-16">

            <div className="max-w-7xl mx-auto text-center px-4">
                <div className="mb-6">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-2">Technical Stack</h2>
                    <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
                        My expertise spans across multiple domains, from core engineering to cutting-edge AI technologies.
                    </p>
                </div>

                {/* Modern Tab System */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 p-2 bg-gray-200/50 dark:bg-gray-800/50 rounded-2xl w-fit mx-auto backdrop-blur-sm">


                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-8 py-3 rounded-xl text-sm md:text-base font-bold transition-all duration-500 ${activeTab === cat
                                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-xl scale-105'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Skill Bento Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    <AnimatePresence mode="wait">
                        {skillsData[activeTab].map((skill, index) => (
                            <motion.div
                                key={`${activeTab}-${skill.name}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="group relative p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                            >
                                {/* Glowing backdrop on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />

                                <div className="flex flex-col items-center gap-3">
                                    <div className="relative p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl group-hover:scale-110 transition-transform duration-500">
                                        {skill.icon ? (
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-10 h-10 md:w-12 md:h-12 object-contain dark:brightness-110"
                                            />
                                        ) : (
                                            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                <span className="text-blue-600 dark:text-blue-400 font-black text-lg md:text-xl tracking-tighter">
                                                    {skill.shortName}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="text-center">
                                        <h3 className="font-bold text-gray-800 dark:text-white text-base md:text-lg mb-1 line-clamp-1">{skill.name}</h3>


                                        <span className={`text-[9px] inline-block uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-full ${skill.level === 'Expert' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                            skill.level === 'Advanced' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                                                skill.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                                                    'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                                            }`}>

                                            {skill.level}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


            </div>
        </AnimatedSection>
    );
};

export default Skills;
