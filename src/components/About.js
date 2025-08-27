import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Shield, TrendingUp, Download } from 'lucide-react';
import SkillRadarChart from './SkillRadarChart';

const About = () => {
    const skills = [
        {
            category: 'Frontend Development',
            icon: <Code className="w-6 h-6" />,
            skills: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design'],
            color: 'bg-blue-500'
        },
        {
            category: 'AI/ML Technologies',
            icon: <Brain className="w-6 h-6" />,
            skills: ['Generative AI', 'Prompt Engineering', 'Machine Learning', 'AI Applications'],
            color: 'bg-purple-500'
        },
        {
            category: 'Cybersecurity',
            icon: <Shield className="w-6 h-6" />,
            skills: ['Network Security', 'Risk Management', 'Security Fundamentals', 'Threat Analysis'],
            color: 'bg-green-500'
        },
        {
            category: 'Digital Marketing',
            icon: <TrendingUp className="w-6 h-6" />,
            skills: ['SEO Optimization', 'Content Marketing', 'AI-Powered Ads', 'Analytics'],
            color: 'bg-orange-500'
        }
    ];

    const stats = [
        { number: '15+', label: 'Certifications', description: 'Professional certificates earned' },
        { number: '3+', label: 'Years Learning', description: 'Continuous skill development' },
        { number: '10+', label: 'Projects', description: 'Completed web projects' },
        { number: '100%', label: 'Passionate', description: 'About technology and innovation' }
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Passionate about technology, innovation, and creating meaningful digital experiences
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Computer Science Engineering Student & Full-Stack Developer
                        </h3>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <p>
                                I'm a dedicated Computer Science Engineering student with a passion for full-stack
                                web development and emerging technologies. My journey in tech has been driven by
                                curiosity and a desire to create innovative solutions that make a difference.
                            </p>
                            <p>
                                With hands-on experience in React.js, JavaScript, and modern web technologies,
                                I enjoy building responsive, user-friendly applications. I'm also fascinated by
                                AI/ML technologies and their potential to transform how we interact with digital systems.
                            </p>
                            <p>
                                Beyond coding, I've developed expertise in cybersecurity and digital marketing,
                                giving me a well-rounded perspective on technology's role in business and security.
                            </p>
                        </div>
                        <motion.a
                            href="/abhireact-portfolio/abhi.pdf"
                            download="Abhishek_Singh_Resume.pdf"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center mt-6 btn-primary"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            Download Resume
                        </motion.a>
                    </motion.div>

                    {/* Skills Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={skillGroup.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`${skillGroup.color} text-white p-2 rounded-lg mr-3`}>
                                        {skillGroup.icon}
                                    </div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white">
                                        {skillGroup.category}
                                    </h4>
                                </div>
                                <ul className="space-y-2">
                                    {skillGroup.skills.map((skill, skillIndex) => (
                                        <li
                                            key={skillIndex}
                                            className="text-sm text-gray-600 dark:text-gray-300 flex items-center"
                                        >
                                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                                    {stat.number}
                                </h4>
                                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                                    {stat.label}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {stat.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Interactive Skills Radar Chart */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <SkillRadarChart />
                </motion.div>
            </div>
        </section>
    );
};

export default About;
