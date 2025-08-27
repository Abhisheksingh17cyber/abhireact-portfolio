import React, { useState } from 'react';
import { X, Download, ExternalLink, ZoomIn } from 'lucide-react';

const CertificateViewer = ({ certificate, onClose }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
        setImageError(false);
    };

    const handleImageError = () => {
        setImageLoaded(false);
        setImageError(true);
        console.error('Failed to load certificate image:', certificate.image);
    };

    const openFullScreen = () => {
        if (imageError) {
            alert('Certificate image is not available.');
            return;
        }

        const newWindow = window.open('', '_blank');
        if (newWindow) {
            newWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>${certificate.title} - Certificate</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 20px;
                            background: #000;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            min-height: 100vh;
                            font-family: Arial, sans-serif;
                        }
                        img {
                            max-width: 100%;
                            max-height: 100%;
                            object-fit: contain;
                            border-radius: 8px;
                            box-shadow: 0 10px 30px rgba(255,255,255,0.1);
                        }
                        .error {
                            color: white;
                            text-align: center;
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <img 
                        src="${certificate.image}" 
                        alt="${certificate.title}"
                        onerror="this.style.display='none'; document.querySelector('.error').style.display='block';"
                    >
                    <div class="error" style="display: none;">
                        <h2>Certificate Not Available</h2>
                        <p>The certificate image could not be loaded.</p>
                    </div>
                </body>
                </html>
            `);
        }
    };

    const downloadCertificate = () => {
        if (imageError) {
            alert('Certificate image is not available for download.');
            return;
        }

        try {
            const link = document.createElement('a');
            link.href = certificate.image;
            link.download = `${certificate.title.replace(/[^a-z0-9]/gi, '_')}_Certificate.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Download failed. Please try viewing the certificate in full screen and save manually.');
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {certificate.title}
                        </h2>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {certificate.issuer} • {certificate.date}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                    {/* Certificate Image */}
                    <div className="mb-6">
                        {!imageError ? (
                            <div className="relative">
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    className="w-full h-auto max-h-96 object-contain rounded-lg border border-gray-200 dark:border-gray-700"
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                                {imageLoaded && (
                                    <div className="absolute top-4 right-4">
                                        <button
                                            onClick={openFullScreen}
                                            className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                                            title="View full size"
                                        >
                                            <ZoomIn className="w-4 h-4" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-gray-400 mb-2">
                                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400">Certificate image not available</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Certificate Details */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                            <p className="text-gray-600 dark:text-gray-300">{certificate.description}</p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Skills Covered</h3>
                            <div className="flex flex-wrap gap-2">
                                {certificate.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex gap-3">
                    <button
                        onClick={openFullScreen}
                        disabled={imageError}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                            imageError
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-primary-600 text-white hover:bg-primary-700'
                        }`}
                    >
                        <ExternalLink className="w-4 h-4" />
                        View Full Size
                    </button>
                    
                    <button
                        onClick={downloadCertificate}
                        disabled={imageError}
                        className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                            imageError
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-green-600 text-white hover:bg-green-700'
                        }`}
                    >
                        <Download className="w-4 h-4" />
                        Download
                    </button>
                    
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CertificateViewer;
