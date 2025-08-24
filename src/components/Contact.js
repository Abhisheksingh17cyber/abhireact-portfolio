import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 2000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: 'Email',
            value: 'abhiisingh240@gmail.com',
            link: 'mailto:abhiisingh240@gmail.com'
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: 'Phone',
            value: '+91 (XXX) XXX-XXXX',
            link: 'tel:+91XXXXXXXXXX'
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: 'Location',
            value: 'India',
            link: null
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <Github className="w-6 h-6" />,
            url: 'https://github.com/Abhisheksingh17cyber',
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            icon: <Linkedin className="w-6 h-6" />,
            url: 'https://linkedin.com/in/abhishek-singh0717',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            icon: <Mail className="w-6 h-6" />,
            url: 'mailto:abhiisingh240@gmail.com',
            color: 'hover:text-red-500'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to collaborate? Let's discuss your project or just say hello!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Let's Start a Conversation
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">
                            I'm always interested in new opportunities, collaborations, and
                            discussions about technology. Whether you have a project in mind
                            or just want to connect, feel free to reach out!
                        </p>

                        {/* Contact Info Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 p-3 rounded-full mr-4">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white">
                                            {info.title}
                                        </h4>
                                        {info.link ? (
                                            <a
                                                href={info.link}
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-300 ${social.color}`}
                                        title={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    Thank You!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Your message has been sent successfully. I'll get back to you soon!
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors duration-200 resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full btn-primary flex items-center justify-center ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="loading-dots mr-2">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="mb-6 opacity-90">
                            Let's work together to bring your ideas to life with modern web technologies
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:abhiisingh240@gmail.com"
                                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                            >
                                Email Me Directly
                            </a>
                            <a
                                href="/abhireact-portfolio/static/media/abhi.pdf"
                                download="Abhishek_Singh_Resume.pdf"
                                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors duration-200"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
