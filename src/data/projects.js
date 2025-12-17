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
    }
];

export const getDomainColor = (domain) => {
    const colors = {
        Web: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        App: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        Security: 'bg-green-500/20 text-green-400 border-green-500/30',
        IT: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
        // Arabic domains
        'ويب': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        'تطبيق': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
        'أمان': 'bg-green-500/20 text-green-400 border-green-500/30',
        'تقنية': 'bg-orange-500/20 text-orange-400 border-orange-500/30'
    };
    return colors[domain] || colors.Web;
};
