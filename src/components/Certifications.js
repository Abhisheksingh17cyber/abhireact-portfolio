import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Filter } from 'lucide-react';
import { certificatesData, categories } from '../data/certificates';
import CertificateViewer from './CertificateViewer';

const Certifications = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const filteredCertificates = selectedCategory === 'All'
        ? certificatesData
        : certificatesData.filter(cert => cert.category === selectedCategory);

    const getCategoryColor = (category) => {
        const colors = {
            'Web Development': 'bg-blue-500',
            'Artificial Intelligence': 'bg-purple-500',
            'Digital Marketing': 'bg-green-500',
            'Cybersecurity': 'bg-red-500',
            'Data Analysis': 'bg-orange-500',
            'Design': 'bg-pink-500'
        };
        return colors[category] || 'bg-gray-500';
    };

    return (
        <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">Professional Certifications</h2>
                    <p className="section-subtitle">
                        Continuous learning and professional development across multiple technology domains
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
                    <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mt-2 mr-2" />
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredCertificates.map((certificate, index) => (
                        <motion.div
                            key={certificate.id}
                            layout
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="card cursor-pointer group"
                            onClick={() => {
                                console.log('Certificate clicked:', certificate.title);
                                setSelectedCertificate(certificate);
                            }}
                        >
                            {/* Certificate Image */}
                            <div className="relative mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        console.error('Image failed to load:', certificate.image);
                                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="200" y="150" font-family="Arial" font-size="16" fill="%236b7280" text-anchor="middle">Certificate Image</text></svg>';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                                        <span className="text-white text-sm font-medium">Click to view</span>
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="space-y-3">
                                <div className="flex items-start justify-between">
                                    <span className={`${getCategoryColor(certificate.category)} text-white text-xs px-2 py-1 rounded-full`}>
                                        {certificate.category}
                                    </span>
                                    <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                </div>

                                <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                                    {certificate.title}
                                </h3>

                                <p className="text-primary-600 dark:text-primary-400 font-medium">
                                    {certificate.issuer}
                                </p>

                                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                                    {certificate.description}
                                </p>

                                <div className="flex flex-wrap gap-1">
                                    {certificate.skills.slice(0, 3).map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {certificate.skills.length > 3 && (
                                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                            +{certificate.skills.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Earned in {certificate.date}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certificate Modal */}
                {selectedCertificate && (
                    <CertificateViewer
                        certificate={selectedCertificate}
                        onClose={() => setSelectedCertificate(null)}
                    />
                )}

                {/* Summary Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                                {certificatesData.length}+
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Total Certificates</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                                {categories.length - 1}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Skill Categories</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                                15+
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Unique Skills</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                                2024
                            </h4>
                            <p className="text-gray-600 dark:text-gray-300">Latest Year</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
