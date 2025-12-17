import { FaCode, FaDesktop, FaShieldAlt, FaServer } from 'react-icons/fa';

export const skillsData = [
    {
        id: 'web',
        title: 'Web Development',
        titleAr: 'تطوير المواقع',
        icon: FaCode,
        color: 'from-blue-500 to-cyan-500',
        skills: [
            'HTML5 & Semantic Markup',
            'CSS3 & Modern Layouts',
            'JavaScript',
            'React',
            'Next.js',
            'TailwindCSS',
            'Responsive Design'
        ]
    },
    {
        id: 'app',
        title: 'Desktop Applications',
        titleAr: 'تطبيقات سطح المكتب',
        icon: FaDesktop,
        color: 'from-purple-500 to-pink-500',
        skills: [
            'C# & .NET Framework',
            'Windows Forms',
            'WPF Applications',
            'Database Integration',
            'UI/UX Design',
            'Performance Optimization'
        ]
    },
    {
        id: 'security',
        title: 'Cyber Security',
        titleAr: 'الأمن السيبراني',
        icon: FaShieldAlt,
        color: 'from-green-500 to-emerald-500',
        skills: [
            'Network Security',
            'Access Control',
            'Cryptography',
            'Secure Authentication',
            'Vulnerability Assessment',
            'Security Best Practices',
            'Secure Coding'
        ]
    },
    {
        id: 'it',
        title: 'IT & Systems',
        titleAr: 'تقنية المعلومات',
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
