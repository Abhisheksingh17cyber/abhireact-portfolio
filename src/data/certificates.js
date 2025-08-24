// Certificate data organized by category
export const certificatesData = [
    {
        id: 1,
        title: 'ReactJS Foundations Course',
        issuer: 'ScholarHat',
        category: 'Web Development',
        date: '2024',
        image: require('../assets/certificates/react js.jpg'),
        description: 'Comprehensive course covering React fundamentals, components, hooks, and modern development practices.',
        skills: ['React.js', 'JavaScript', 'Component Architecture', 'Hooks']
    },
    {
        id: 2,
        title: 'AI for Beginners',
        issuer: 'HP LIFE Foundation',
        category: 'Artificial Intelligence',
        date: '2024',
        image: require('../assets/certificates/ai for begainers.jpg'),
        description: 'Introduction to artificial intelligence concepts, applications, and future implications.',
        skills: ['AI Fundamentals', 'Machine Learning Basics', 'AI Applications']
    },
    {
        id: 3,
        title: 'Introduction to Generative AI',
        issuer: 'Google Cloud',
        category: 'Artificial Intelligence',
        date: '2024',
        image: require('../assets/certificates/introduction to generative ai.jpg'),
        description: 'Deep dive into generative AI technologies, models, and practical applications.',
        skills: ['Generative AI', 'Large Language Models', 'AI Ethics']
    },
    {
        id: 4,
        title: 'AI-Powered Shopping Ads',
        issuer: 'Google',
        category: 'Digital Marketing',
        date: '2024',
        image: require('../assets/certificates/ai power shopping ads.jpg'),
        description: 'Advanced techniques for creating and optimizing AI-powered advertising campaigns.',
        skills: ['Digital Advertising', 'AI Marketing', 'Campaign Optimization']
    },
    {
        id: 5,
        title: 'AI Power Market',
        issuer: 'Industry Certification',
        category: 'Digital Marketing',
        date: '2024',
        image: require('../assets/certificates/ai power market.jpg'),
        description: 'Understanding AI applications in market analysis and business intelligence.',
        skills: ['Market Analysis', 'AI in Business', 'Data Analytics']
    },
    {
        id: 6,
        title: 'Cybersecurity Fundamentals',
        issuer: 'Tech Mahindra',
        category: 'Cybersecurity',
        date: '2024',
        image: require('../assets/certificates/cybersecurity.jpg'),
        description: 'Comprehensive cybersecurity training covering threats, protection, and best practices.',
        skills: ['Network Security', 'Threat Analysis', 'Security Protocols']
    },
    {
        id: 7,
        title: 'SEO Crash Course',
        issuer: 'Semrush Academy',
        category: 'Digital Marketing',
        date: '2024',
        image: require('../assets/certificates/seo.jpg'),
        description: 'Complete SEO optimization strategies for improved search engine rankings.',
        skills: ['SEO Optimization', 'Keyword Research', 'Content Strategy']
    },
    {
        id: 8,
        title: 'Advanced SEO Techniques',
        issuer: 'Digital Marketing Institute',
        category: 'Digital Marketing',
        date: '2024',
        image: require('../assets/certificates/seo (2).jpg'),
        description: 'Advanced SEO strategies and technical optimization techniques.',
        skills: ['Technical SEO', 'Link Building', 'Analytics']
    },
    {
        id: 9,
        title: 'Excel Fundamentals',
        issuer: 'Microsoft',
        category: 'Data Analysis',
        date: '2024',
        image: require('../assets/certificates/excel.jpg'),
        description: 'Mastering Excel for data analysis, visualization, and business applications.',
        skills: ['Data Analysis', 'Excel Functions', 'Data Visualization']
    },
    {
        id: 10,
        title: 'Excel in an Hour',
        issuer: 'Quick Learning Institute',
        category: 'Data Analysis',
        date: '2024',
        image: require('../assets/certificates/excel in an hour.jpg'),
        description: 'Intensive Excel training for rapid skill development and productivity.',
        skills: ['Excel Proficiency', 'Quick Analysis', 'Productivity Tools']
    },
    {
        id: 11,
        title: 'Prompt Engineering',
        issuer: 'AI Education Institute',
        category: 'Artificial Intelligence',
        date: '2024',
        image: require('../assets/certificates/prompt engineering.jpg'),
        description: 'Advanced techniques for crafting effective prompts for AI language models.',
        skills: ['Prompt Design', 'AI Communication', 'Model Optimization']
    },
    {
        id: 12,
        title: 'Web Development Fundamentals',
        issuer: 'Coding Academy',
        category: 'Web Development',
        date: '2024',
        image: require('../assets/certificates/web.jpg'),
        description: 'Complete web development foundation covering HTML, CSS, and JavaScript.',
        skills: ['HTML/CSS', 'JavaScript', 'Web Standards', 'Responsive Design']
    },
    {
        id: 13,
        title: 'Canva 50 Design Mastery',
        issuer: 'Canva',
        category: 'Design',
        date: '2024',
        image: require('../assets/certificates/canva 50 design.jpg'),
        description: 'Comprehensive design course covering 50 different design principles and techniques.',
        skills: ['Graphic Design', 'Visual Communication', 'Brand Design', 'Creative Tools']
    }
];

// Categories for filtering
export const categories = [
    'All',
    'Web Development',
    'Artificial Intelligence',
    'Digital Marketing',
    'Cybersecurity',
    'Data Analysis',
    'Design'
];

// Skills extracted from certificates
export const skillsFromCertificates = [
    'React.js',
    'JavaScript',
    'HTML/CSS',
    'AI/ML',
    'Generative AI',
    'Prompt Engineering',
    'Cybersecurity',
    'SEO',
    'Digital Marketing',
    'Data Analysis',
    'Excel',
    'Graphic Design'
];
