import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id, className = "" }) => (
  <motion.section
    id={id}
    className={`min-h-screen p-8 md:p-16 lg:p-24 flex flex-col justify-center ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.section>
);


export default AnimatedSection;