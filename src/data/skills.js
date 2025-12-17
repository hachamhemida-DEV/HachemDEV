import { FaCode, FaMobileAlt, FaShieldAlt, FaServer } from 'react-icons/fa';

export const skillsData = [
    {
        id: 'web',
        title: 'Web Development',
        icon: FaCode,
        color: 'from-blue-500 to-cyan-500',
        skills: [
            'HTML5 & Semantic Markup',
            'CSS3 & Modern Layouts',
            'JavaScript ',
            'React',
            'Next.js',
            'TailwindCSS',
            'Responsive Design'
        ]
    },
    {
        id: 'app',
        title: 'App Development',
        icon: FaMobileAlt,
        color: 'from-purple-500 to-pink-500',
        skills: [
            'Desktop Applications',
            'UI/UX Principles',
            'State Management',
            'Cross-platform Development',
            'Performance Optimization',
            'User Testing',
        ]
    },
    {
        id: 'security',
        title: 'Cyber Security',
        icon: FaShieldAlt,
        color: 'from-green-500 to-emerald-500',
        skills: [
            'Network Security Fundamentals',
            'Access Control Models',
            'Cryptography Basics',
            'Secure Authentication',
            'Authorization Systems',
            'Vulnerability Assessment',
            'Security Best Practices',
            'Secure Coding'
        ]
    },
    {
        id: 'it',
        title: 'IT & Systems',
        icon: FaServer,
        color: 'from-orange-500 to-red-500',
        skills: [
            'Linux Administration',
            'Windows Systems',
            'Networking (TCP/IP)',
            'Database Management',
            'Docker Basics',
            'System Troubleshooting'
        ]
    }
];
