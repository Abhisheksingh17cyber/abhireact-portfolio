import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Professional React Portfolio',
      description: 'A modern, responsive portfolio website built with React.js, featuring smooth animations, dark mode, and showcasing professional certifications and projects.',
      longDescription: 'This portfolio website represents the culmination of my web development skills, featuring a modern design with Framer Motion animations, Tailwind CSS styling, and full responsiveness. The site includes sections for about, experience, projects, certifications, and contact, with a clean and professional aesthetic.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Responsive Design'],
      category: 'Web Development',
      status: 'Completed',
      github: 'https://github.com/Abhisheksingh17cyber/abhireact-portfolio',
      live: 'https://Abhisheksingh17cyber.github.io/abhireact-portfolio',
      features: [
        'Fully responsive design',
        'Dark/Light mode toggle',
        'Smooth scroll animations',
        'Certificate gallery',
        'Contact form integration',
        'SEO optimized'
      ]
    },
    {
      id: 2,
      title: 'AI-Powered Web Application',
      description: 'An innovative web application integrating AI capabilities for enhanced user experience and intelligent content generation.',
      longDescription: 'This project explores the integration of AI technologies into web applications, featuring intelligent content generation, user interaction enhancement, and automated workflows. Built using modern web technologies with AI API integrations.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'Node.js', 'AI APIs', 'MongoDB', 'Express.js'],
      category: 'AI/ML',
      status: 'In Development',
      github: '#',
      live: '#',
      features: [
        'AI content generation',
        'Natural language processing',
        'User behavior analysis',
        'Automated workflows',
        'Real-time interactions',
        'Data visualization'
      ]
    },
    {
      id: 3,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payment processing, and comprehensive admin dashboard.',
      longDescription: 'A complete e-commerce platform featuring product catalog, shopping cart, user authentication, payment processing, and admin panel. Built with security and scalability in mind, incorporating modern web development best practices.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe API', 'JWT Authentication'],
      category: 'Full-Stack',
      status: 'Completed',
      github: '#',
      live: '#',
      features: [
        'Product catalog',
        'Shopping cart functionality',
        'Secure payment processing',
        'User authentication',
        'Admin dashboard',
        'Order management'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Dashboard',
      description: 'A comprehensive security monitoring dashboard for tracking threats, vulnerabilities, and system health metrics.',
      longDescription: 'A sophisticated cybersecurity dashboard providing real-time monitoring of security threats, vulnerability assessments, and system health metrics. Features include threat visualization, alert management, and comprehensive reporting.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'D3.js', 'Python', 'Security APIs', 'Real-time Monitoring'],
      category: 'Cybersecurity',
      status: 'Completed',
      github: '#',
      live: '#',
      features: [
        'Real-time threat monitoring',
        'Vulnerability assessment',
        'Security metrics visualization',
        'Alert management system',
        'Incident reporting',
        'Risk analysis tools'
      ]
    },
    {
      id: 5,
      title: 'Digital Marketing Analytics',
      description: 'An analytics platform for tracking digital marketing campaigns, SEO performance, and social media metrics.',
      longDescription: 'A comprehensive digital marketing analytics platform that aggregates data from multiple sources to provide insights into campaign performance, SEO rankings, social media engagement, and ROI analysis.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'Chart.js', 'Google Analytics API', 'Social Media APIs', 'Data Visualization'],
      category: 'Digital Marketing',
      status: 'In Development',
      github: '#',
      live: '#',
      features: [
        'Multi-platform data integration',
        'Real-time analytics',
        'Custom reporting',
        'ROI calculation',
        'Competitor analysis',
        'Automated insights'
      ]
    },
    {
      id: 6,
      title: 'Mobile-First Web App',
      description: 'A progressive web application optimized for mobile devices with offline capabilities and native app-like experience.',
      longDescription: 'A modern progressive web application designed with mobile-first principles, featuring offline capabilities, push notifications, and a native app-like user experience across all devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&crop=entropy&auto=format',
      technologies: ['React.js', 'PWA', 'Service Workers', 'IndexedDB', 'Push Notifications'],
      category: 'Mobile Development',
      status: 'Completed',
      github: '#',
      live: '#',
      features: [
        'Progressive Web App',
        'Offline functionality',
        'Push notifications',
        'Mobile-optimized UI',
        'Fast loading times',
        'App-like experience'
      ]
    }
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Full-Stack', 'Cybersecurity', 'Digital Marketing', 'Mobile Development'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryIcon = (category) => {
    const icons = {
      'Web Development': <Globe className="w-5 h-5" />,
      'AI/ML': <Code className="w-5 h-5" />,
      'Full-Stack': <Code className="w-5 h-5" />,
      'Cybersecurity': <Globe className="w-5 h-5" />,
      'Digital Marketing': <Globe className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />
    };
    return icons[category] || <Globe className="w-5 h-5" />;
  };

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500';
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my technical skills and creative problem-solving abilities
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <span className={`${getStatusColor(project.status)} text-white text-xs px-2 py-1 rounded-full`}>
                      {project.status}
                    </span>
                    <Play className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                  <div className="flex space-x-2">
                    {project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <span className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                      {getCategoryIcon(selectedProject.category)}
                      {selectedProject.category}
                    </span>
                    <span className={`${getStatusColor(selectedProject.status)} text-white text-sm px-3 py-1 rounded-full`}>
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    About This Project
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3">
                    {selectedProject.github !== '#' && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex items-center justify-center"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        View Source Code
                      </a>
                    )}
                    {selectedProject.live !== '#' && (
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex items-center justify-center"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
