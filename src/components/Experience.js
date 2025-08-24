import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Web Developer',
            company: 'Freelance Projects',
            location: 'Remote',
            period: '2024 - Present',
            type: 'Freelance',
            description: 'Developing responsive web applications using modern technologies. Creating user-friendly interfaces and implementing best practices for web development.',
            achievements: [
                'Built professional portfolio website with React.js',
                'Developed responsive layouts using Tailwind CSS',
                'Implemented smooth animations with Framer Motion',
                'Optimized websites for performance and SEO',
                'Integrated contact forms and user interactions'
            ],
            technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Git', 'GitHub Pages']
        },
        {
            id: 2,
            title: 'Computer Science Student',
            company: 'University',
            location: 'India',
            period: '2022 - Present',
            type: 'Academic',
            description: 'Pursuing Computer Science Engineering degree with focus on web development, AI/ML, and cybersecurity. Actively learning modern technologies and building practical projects.',
            achievements: [
                'Completed 13+ professional certification courses',
                'Mastered React.js and modern web development',
                'Studied AI/ML fundamentals and prompt engineering',
                'Learned cybersecurity principles and best practices',
                'Maintained excellent academic performance'
            ],
            technologies: ['Java', 'Python', 'Data Structures', 'Algorithms', 'Database Management', 'Software Engineering']
        },
        {
            id: 3,
            title: 'Digital Marketing Trainee',
            company: 'Online Learning',
            location: 'Remote',
            period: '2023 - 2024',
            type: 'Training',
            description: 'Completed comprehensive digital marketing training covering SEO, content marketing, and AI-powered advertising strategies.',
            achievements: [
                'Earned SEO certification from Semrush Academy',
                'Learned Google Ads and AI-powered advertising',
                'Studied content marketing and social media strategies',
                'Completed Google Analytics training',
                'Applied marketing principles to personal projects'
            ],
            technologies: ['SEO', 'Google Analytics', 'Google Ads', 'Content Marketing', 'Social Media Marketing']
        },
        {
            id: 4,
            title: 'Cybersecurity Trainee',
            company: 'Tech Mahindra Foundation',
            location: 'Online Program',
            period: '2024',
            type: 'Training',
            description: 'Completed cybersecurity fundamentals training program covering network security, threat analysis, and risk management principles.',
            achievements: [
                'Earned cybersecurity fundamentals certification',
                'Learned network security principles',
                'Studied threat detection and analysis methods',
                'Understood risk management frameworks',
                'Applied security best practices in projects'
            ],
            technologies: ['Network Security', 'Risk Assessment', 'Threat Analysis', 'Security Protocols', 'Cybersecurity Tools']
        }
    ];

    const getTypeColor = (type) => {
        const colors = {
            'Freelance': 'bg-green-500',
            'Academic': 'bg-blue-500',
            'Training': 'bg-purple-500',
            'Full-time': 'bg-orange-500'
        };
        return colors[type] || 'bg-gray-500';
    };

    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Experience & Journey</h2>
                    <p className="section-subtitle">
                        My professional journey through technology, learning, and continuous growth
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 transform md:-translate-x-0.5"></div>

                    {experiences.map((experience, index) => (
                        <motion.div
                            key={experience.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                            {/* Content Card */}
                            <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="card"
                                >
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                                                {experience.title}
                                            </h3>
                                            <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                                                <Building className="w-4 h-4 mr-2" />
                                                <span className="font-medium">{experience.company}</span>
                                            </div>
                                        </div>
                                        <span className={`${getTypeColor(experience.type)} text-white text-xs px-2 py-1 rounded-full`}>
                                            {experience.type}
                                        </span>
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300 mb-4">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            <span>{experience.period}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            <span>{experience.location}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {experience.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                                        <ul className="space-y-1">
                                            {experience.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-2 py-1 rounded text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Current Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="card max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                            Open to Opportunities
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            As a Computer Science Engineering student with hands-on experience in web development, 
                            I'm seeking internship or entry-level opportunities in frontend development, full-stack development, 
                            or web development roles where I can apply my skills and continue learning.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                                className="btn-primary"
                            >
                                Get In Touch
                            </button>
                            <a
                                href="/abhireact-portfolio/abhi.pdf"
                                download="Abhishek_Singh_Resume.pdf"
                                className="btn-secondary"
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

export default Experience;
