export const projectsData = [
    {
        id: 1,
        title: 'Inventory Management System',
        titleAr: 'نظام إدارة المخزون',
        description: 'Desktop application for managing inventory, stock tracking, product management, and generating reports with real-time updates.',
        descriptionAr: 'تطبيق سطح مكتب لإدارة المخزون وتتبع المنتجات وإنشاء التقارير مع تحديثات فورية.',
        domain: 'App',
        domainAr: 'تطبيق',
        technologies: ['C#', '.NET', 'SQL Server', 'WinForms'],
        github: '#',
        live: '#'
    },
    {
        id: 2,
        title: 'OpenLand - Real Estate Platform',
        titleAr: 'OpenLand - منصة العقارات',
        description: 'Full-stack web application for real estate listings, property management, user authentication, and admin dashboard with multi-language support.',
        descriptionAr: 'تطبيق ويب متكامل لقوائم العقارات وإدارة الممتلكات ومصادقة المستخدمين ولوحة تحكم المسؤول مع دعم متعدد اللغات.',
        domain: 'Web',
        domainAr: 'ويب',
        technologies: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
        github: '#',
        live: '#'
    },
    {
        id: 3,
        title: 'Fiche de Paie - Payroll System',
        titleAr: 'نظام كشوف المرتبات',
        description: 'Comprehensive payroll management system for generating payslips, managing employee data, calculating salaries, taxes, and deductions.',
        descriptionAr: 'نظام شامل لإدارة الرواتب لإنشاء كشوف المرتبات وإدارة بيانات الموظفين وحساب الرواتب والضرائب والخصومات.',
        domain: 'Web',
        domainAr: 'ويب',
        technologies: ['PHP', 'MySQL', 'HTML/CSS', 'JavaScript'],
        github: '#',
        live: '#'
    },
    {
        id: 4,
        title: 'Developer Portfolio',
        titleAr: 'الموقع الشخصي للمطور',
        description: 'Modern, responsive portfolio website with Black & Red theme, animated backgrounds, scroll reveal effects, and multi-language support (EN/AR).',
        descriptionAr: 'موقع شخصي حديث ومتجاوب بتصميم أسود وأحمر مع خلفيات متحركة وتأثيرات التمرير ودعم متعدد اللغات.',
        domain: 'Web',
        domainAr: 'ويب',
        technologies: ['React', 'Vite', 'TailwindCSS', 'Framer Motion'],
        github: '#',
        live: '#'
    },
    {
        id: 5,
        title: 'Typing Speed Test',
        titleAr: 'اختبار سرعة الكتابة',
        description: 'Interactive typing speed test application that measures WPM, accuracy, and provides real-time feedback with dynamic text highlighting and comprehensive statistics.',
        descriptionAr: 'تطبيق تفاعلي لاختبار سرعة الكتابة يقيس عدد الكلمات في الدقيقة والدقة ويوفر ردود فعل فورية مع إحصائيات شاملة.',
        domain: 'Web',
        domainAr: 'ويب',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/HachemDEV/typing-test',
        live: '#'
    }
];

export const getDomainColor = (domain) => {
    const colors = {
        Web: 'bg-red-600/20 text-red-400 border-red-500/30',
        App: 'bg-red-500/20 text-red-400 border-red-500/30',
        Security: 'bg-red-700/20 text-red-400 border-red-500/30',
        IT: 'bg-red-600/20 text-red-400 border-red-500/30',
        // Arabic domains
        'ويب': 'bg-red-600/20 text-red-400 border-red-500/30',
        'تطبيق': 'bg-red-500/20 text-red-400 border-red-500/30',
        'أمان': 'bg-red-700/20 text-red-400 border-red-500/30',
        'تقنية': 'bg-red-600/20 text-red-400 border-red-500/30'
    };
    return colors[domain] || colors.Web;
};
