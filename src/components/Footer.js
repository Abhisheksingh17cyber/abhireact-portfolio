import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certifications', href: '#certifications' },
        { name: 'Contact', href: '#contact' }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github className="w-5 h-5" />,
            url: 'https://github.com/Abhisheksingh17cyber',
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-5 h-5" />,
            url: 'https://linkedin.com/in/abhishek-singh0717',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            icon: <Mail className="w-5 h-5" />,
            url: 'mailto:abhiisingh240@gmail.com',
            color: 'hover:text-red-500'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <h3 className="text-2xl font-bold text-primary-400 mb-4">
                            Abhishek Singh
                        </h3>
                        <p className="text-gray-300 mb-6 max-w-md">
                            Computer Science Engineering Student passionate about creating innovative
                            web solutions, exploring AI/ML technologies, and building impactful
                            digital experiences.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 bg-gray-800 dark:bg-gray-700 rounded-lg transition-all duration-200 text-gray-400 ${social.color} hover:transform hover:scale-110`}
                                    title={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                        <div className="space-y-3">
                            <a
                                href="mailto:abhiisingh240@gmail.com"
                                className="block text-gray-300 hover:text-primary-400 transition-colors duration-200"
                            >
                                abhiisingh240@gmail.com
                            </a>
                            <p className="text-gray-300">India</p>
                            <a
                                href="/abhireact-portfolio/abhi.pdf"
                                download="Abhishek_Singh_Resume.pdf"
                                className="inline-block bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Copyright */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-gray-400 text-sm mb-4 md:mb-0"
                        >
                            © {currentYear} Abhishek Singh. Built with{' '}
                            <Heart className="w-4 h-4 inline text-red-500" /> using React.js & Tailwind CSS
                        </motion.p>

                        {/* Back to Top */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors duration-200 group"
                        >
                            <span className="text-sm">Back to top</span>
                            <ArrowUp className="w-4 h-4 group-hover:transform group-hover:-translate-y-1 transition-transform duration-200" />
                        </motion.button>
                    </div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-6 pt-6 border-t border-gray-800 dark:border-gray-700"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <p>This portfolio is open source and available on GitHub</p>
                        <div className="flex items-center space-x-4 mt-2 md:mt-0">
                            <span>Made in India 🇮🇳</span>
                            <span>•</span>
                            <span>Powered by React</span>
                            <span>•</span>
                            <span>Deployed on GitHub Pages</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
