import React from 'react';

const Footer = () => (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-10 transition-colors duration-300">
        <div className="container mx-auto text-center">
            <p className="text-gray-400 dark:text-gray-500">&copy; {new Date().getFullYear()} Ritik Parihar. All Rights Reserved.</p>
        </div>
    </footer>

);

export default Footer;