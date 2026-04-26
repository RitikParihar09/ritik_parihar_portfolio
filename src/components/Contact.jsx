import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Contact = () => {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        
        try {
            const response = await fetch("https://formspree.io/ritikparihar2171@gmail.com", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    return (
        <AnimatedSection id="contact" className="bg-gray-50 dark:bg-gray-800 transition-colors duration-300 !pt-[100px] !pb-20">

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
                    <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <a href="mailto:ritikparihar2171@gmail.com" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email Me</p>
                                        <p className="font-bold text-gray-800 dark:text-white">ritikparihar2171@gmail.com</p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                        <p className="font-bold text-gray-800 dark:text-white">India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 p-1 px-1 md:p-8 rounded-3xl"
                    >
                        <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                            {/* Replace YOUR_ACCESS_KEY_HERE with the key from web3forms.com */}
                            <input type="hidden" name="access_key" value="f5945596-8017-4616-901a-0f9c6c45a5c7" />

                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Your Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        required
                                        placeholder="john@example.com"
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message"
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all dark:text-white resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-blue-600 dark:bg-blue-500 text-white font-bold py-4 rounded-2xl hover:bg-blue-700 dark:hover:bg-blue-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                            >
                                Send Message
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </AnimatedSection>
    );
};



export default Contact;