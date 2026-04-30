import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import interviewBuddyImg from '../assets/projects/InterviewBuddy.png';
import studentManagementImg from '../assets/projects/StudentManagement.png';
import resumeAnalyzerImg from '../assets/projects/resumeaipowered.png';

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

const ProjectModal = ({ project, onClose }) => {
    const [imgError, setImgError] = React.useState(false);
    if (!project) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        >
            <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={onClose} />
            <motion.div 
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden max-w-7xl w-full shadow-2xl relative z-10 flex flex-col md:flex-row h-fit max-h-[90vh]"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>

                <div className="md:w-[70%] relative group bg-[#020617] overflow-hidden flex items-center justify-center min-h-[300px]">
                    {!imgError ? (
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-auto block" 
                            onError={() => setImgError(true)}
                        />
                    ) : (
                        <div className="p-12 text-center">
                            <h3 className="text-2xl font-bold text-gray-500 uppercase tracking-widest">{project.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm">Preview Unavailable</p>
                        </div>
                    )}
                </div>

                <div className="md:w-[30%] p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                    <div className="flex-grow">
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
                                {project.category}
                            </span>
                            <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white mb-2 leading-tight">{project.title}</h2>
                        </div>
                        
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">The Project</h4>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-100 dark:border-gray-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-10 pt-6 border-t border-gray-100 dark:border-gray-700/50">
                        {project.codeLink && (
                            <a 
                                href={project.codeLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 text-white font-bold py-3.5 rounded-2xl hover:bg-gray-900 dark:hover:bg-gray-600 transition-all shadow-lg"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                GitHub
                            </a>
                        )}
                        {project.hasDemo && (
                            <a 
                                href={project.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white font-bold py-3.5 rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                Live
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};
const ProjectCard = ({ title, category, description, imageUrl, tech, hasDemo, demoLink, codeLink, onClick }) => {
    const [imgError, setImgError] = React.useState(false);
    return (
        <motion.div
            layout
            onClick={onClick}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 dark:hover:shadow-blue-900/20 flex flex-col group cursor-pointer border border-gray-100 dark:border-gray-700"
            whileHover={{ scale: 1.02 }}
        >
            <div className="relative overflow-hidden aspect-[4/3] bg-gray-50 dark:bg-gray-900/50 flex items-center justify-center">
                {!imgError ? (
                    <img 
                        src={imageUrl} 
                        alt={title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        onError={() => setImgError(true)} 
                    />
                ) : (
                    <div className="p-6 text-center">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{title}</h3>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-widest border border-white/30">
                        {category}
                    </span>
                </div>
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <div className="mb-3">
                    <span className="text-[9px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">{category}</span>
                    <h3 className="text-lg font-extrabold text-gray-800 dark:text-white group-hover:text-blue-600 transition-colors leading-tight line-clamp-2 mt-1">{title}</h3>
                </div>

                <div className="flex flex-wrap gap-1 mb-5">
                {tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-[8px] font-bold uppercase">
                        {t}
                    </span>
                ))}
            </div>

            <div className="flex gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                {codeLink && (
                    <a 
                        href={codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-[10px] font-bold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                        GitHub
                    </a>
                )}
                {hasDemo && (
                    <a 
                        href={demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 text-white text-[10px] font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-500/20"
                    >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        Live
                    </a>
                )}
            </div>
        </div>
    </motion.div>
  );
};

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectData = [
        {
            title: 'AI-Powered Interview Simulator',
            category: 'Full Stack / AI',
            description: 'Developed a full-stack AI-powered interview simulator using React.js, Tailwind CSS and Firebase for authentication and interview sessions. Integrated LLMs via OpenRouter (Gemini 2.0) for dynamic questions, difficulty adjustment, performance reports, and voice interaction via Deepgram STT/TTS.',
            imageUrl: interviewBuddyImg,
            tech: ['React.js', 'Tailwind CSS', 'Firebase', 'OpenRouter', 'Gemini 2.0', 'Deepgram'],
            hasDemo: true,
            demoLink: 'https://ai-powered-interview-simulator-two.vercel.app/'
        },
        {
            title: 'Student Management System',
            category: 'Full Stack',
            description: 'Built a full-stack CRUD web application using Spring Boot MVC with a clean layered architecture. Integrated Thymeleaf UI with Spring Data JPA and MySQL, and resolved request-mapping issues during form submission.',
            imageUrl: studentManagementImg,
            tech: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'Spring Data JPA'],
            hasDemo: false,
            demoLink: '#',
            codeLink: 'https://github.com/RitikParihar09/StudentsManagementSystem'
        },
        {
            title: 'AI-Powered Resume Analyzer',
            category: 'AI / ML',
            description: 'Built an AI tool to analyze resumes against job descriptions, providing match percentages, summaries, and skill suggestions. Integrated Google Gemini for smart recommendations and Streamlit for an interactive UI.',
            imageUrl: resumeAnalyzerImg,
            tech: ['Python', 'Streamlit', 'Google Gemini', 'NLP', 'PyPDF2'],
            hasDemo: false,
            demoLink: '#',
            codeLink: 'https://github.com/RitikParihar09/AI-Powered-Resume-Analyzer'
        },
        {
            title: 'Smart Attendance System',
            category: 'Computer Vision',
            description: 'Developed a real-time facial recognition-based attendance system with 95% accuracy. Automated attendance logging into structured Excel sheets for scalable classroom use.',
            imageUrl: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1470&auto=format&fit=crop',
            tech: ['Python', 'OpenCV', 'Face Recognition', 'NumPy', 'Pandas'],
            hasDemo: false,
            demoLink: '#',
            codeLink: 'https://github.com/RitikParihar09/Smart-attendance-system'
        },
        {
            title: 'Stock Price Prediction Platform',
            category: 'Data Science',
            description: 'Created a machine learning model for stock price forecasting, aiding data-driven investment decisions. Developed a Streamlit-based app for financial data visualization and model insights.',
            imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1470&auto=format&fit=crop',
            tech: ['Python', 'Scikit-learn', 'Streamlit', 'YFinance', 'Matplotlib'],
            hasDemo: false,
            demoLink: '#',
            codeLink: 'https://github.com/RitikParihar09/Stock-Prediction'
        },
        {
            title: 'Anuvaadak: TTS & STT',
            category: 'NLP',
            description: 'Designed a bidirectional Text-to-Speech and Speech-to-Text system supporting multiple Indian languages. Built an open-source voice interface for real-time audio processing.',
            imageUrl: 'https://images.unsplash.com/photo-1451187534958-538405364811?q=80&w=1473&auto=format&fit=crop',
            tech: ['SpeechRecognition', 'gTTS', 'PyAudio', 'Flask'],
            hasDemo: false,
            demoLink: '#',
            codeLink: 'https://github.com/RitikParihar09/Anuvaadak-T2V-and-V2T'
        },
    ];

    const categories = ['All', ...new Set(projectData.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(p => p.category === filter);

    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

    return (
        <AnimatedSection id="projects" className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-800 dark:text-white">Projects</h2>
                <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto mb-10 rounded-full"></div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilter(cat);
                                setShowAll(false);
                            }}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${filter === cat
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-400/30'
                                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {displayedProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.title}
                                    {...project}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length > 4 && (
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setShowAll(!showAll)}
                            className="mt-12 px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold rounded-2xl shadow-md hover:shadow-lg transition-all border border-blue-100 dark:border-gray-700"
                        >
                            {showAll ? 'Show Less' : `View All Projects (${filteredProjects.length})`}
                        </motion.button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </AnimatedSection>
    );
};

export default Projects;
