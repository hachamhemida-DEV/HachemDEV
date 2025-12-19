import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

const translations = {
    en: {
        // Navbar
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact'
        },
        // Hero
        hero: {
            badge: 'Security-First Development',
            greeting: "Hi, I'm",
            name: 'Hachem tadj eddin',
            title: {
                web: 'Web Developer',
                app: 'Desktop Developer',
                security: 'Cyber Security',
            },
            description: 'I build secure, scalable, and high-performance digital solutions with my team. From full-stack web applications to desktop software and secure systems, I focus on clean code, best practices, and solving complex technical challenges.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            scroll: 'Scroll'
        },
        // About
        about: {
            subtitle: 'About Me',
            title: 'Building Digital Solutions with',
            titleHighlight: 'Security in Mind',
            description1: 'I am a developer passionate about creating robust, secure, and user-friendly applications. My approach combines technical expertise with a strong focus on security best practices.',
            description2: 'From designing responsive web interfaces to building desktop applications and understanding network security fundamentals, I bring a comprehensive perspective to every project.',
            focusTitle: 'Core Focus Areas',
            focuses: [
                'Full-stack Web Development',
                'Desktop Application Development',
                'Cybersecurity & Secure Coding',
                'IT Systems & Networking'
            ],
            devTitle: 'Developer & Security Enthusiast',
            skillAreas: 'Skill Areas',
            learning: 'Learning'
        },
        // Skills
        skills: {
            subtitle: 'Skills & Expertise',
            title: 'Technologies We Work With'
        },
        // Projects
        projects: {
            subtitle: 'Portfolio',
            title: 'Featured Projects',
            description: 'A collection of projects showcasing our work in web development, desktop applications, security, and IT systems.'
        },
        // Contact
        contact: {
            subtitle: 'Get In Touch',
            title: "Let's Work",
            titleHighlight: 'Together',
            description: "Have a project in mind or want to discuss an opportunity? I'm always open to new ideas and collaborations. Feel free to reach out through the form or connect with me on social media.",
            connectTitle: 'Connect With Me',
            form: {
                name: 'Your Name',
                namePlaceholder: 'John Doe',
                email: 'Email Address',
                emailPlaceholder: 'john@example.com',
                message: 'Your Message',
                messagePlaceholder: 'Tell me about your project...',
                send: 'Send Message',
                sending: 'Sending...',
                success: "✓ Message sent successfully! I'll get back to you soon.",
                error: '✗ Failed to send message. Please try again or contact me directly.'
            }
        },
        // Footer
        footer: {
            tagline: 'Building secure digital solutions',
            copyright: 'All rights reserved.',
            madeWith: 'Made with',
            using: 'using React & TailwindCSS'
        }
    },
    ar: {
        // Navbar
        nav: {
            about: 'من أنا',
            skills: 'المهارات',
            projects: 'أعمالي',
            contact: 'اتصل بي'
        },
        // Hero
        hero: {
            badge: 'التطوير الآمن',
            greeting: 'مرحباً، أنا',
            name: 'تاج الدين هاشم',
            title: {
                web: 'مطور مواقع',
                app: 'مطور برامج',
                security: 'أمن سيبراني',
            },
            description: 'أقوم ببناء حلول رقمية آمنة وعالية الأداء. من تطوير مواقع الويب إلى برامج سطح المكتب والأنظمة الآمنة مع فريقي ، نركز على كتابة كود نظيف وتطبيق أفضل الممارسات.',
            viewProjects: 'عرض أعمالي',
            contactMe: 'تواصل معي',
            scroll: 'انزل للأسفل'
        },
        // About
        about: {
            subtitle: 'من أنا',
            title: 'بناء حلول رقمية',
            titleHighlight: 'بأمان عالي',
            description1: 'أنا مطور برمجيات متخصص في إنشاء تطبيقات قوية وآمنة وسهلة الاستخدامن مع فريقي و أجمع بين الخبرة التقنية والتركيز على أمان البرمجيات.',
            description2: 'من تصميم مواقع الويب إلى بناء برامج سطح المكتب وفهم أساسيات أمن الشبكات، نقدم رؤية شاملة لكل مشروع نعمل عليه.',
            focusTitle: 'مجالات التخصص',
            focuses: [
                'تطوير مواقع الويب',
                'تطوير برامج سطح المكتب',
                'الأمن السيبراني والبرمجة الآمنة',
                'تقنية المعلومات والشبكات'
            ],
            devTitle: 'مطور برمجيات',
            skillAreas: 'مجالات المهارات',
            learning: 'أتعلم دائماً'
        },
        // Skills
        skills: {
            subtitle: 'المهارات والخبرات',
            title: 'التقنيات التي نستخدمها'
        },
        // Projects
        projects: {
            subtitle: 'معرض الأعمال',
            title: 'مشاريعي المميزة',
            description: 'مجموعة من المشاريع التي تعرض خبرتي في تطوير المواقع وبرامج سطح المكتب والأمن السيبراني.'
        },
        // Contact
        contact: {
            subtitle: 'تواصل معي',
            title: 'هل لديك مشروع؟',
            titleHighlight: 'لنعمل معاً',
            description: 'هل تريد مناقشة فكرة أو مشروع؟ أنا مستعد للتعاون معك. تواصل معي عبر النموذج أو وسائل التواصل الاجتماعي.',
            connectTitle: 'تابعني على',
            form: {
                name: 'الاسم الكامل',
                namePlaceholder: 'أدخل اسمك',
                email: 'البريد الإلكتروني',
                emailPlaceholder: 'example@email.com',
                message: 'رسالتك',
                messagePlaceholder: 'اكتب رسالتك هنا...',
                send: 'إرسال',
                sending: 'جاري الإرسال...',
                success: '✓ تم إرسال رسالتك بنجاح! سأرد عليك قريباً.',
                error: '✗ فشل الإرسال. حاول مرة أخرى أو تواصل معي مباشرة.'
            }
        },
        // Footer
        footer: {
            tagline: 'بناء حلول رقمية آمنة',
            copyright: 'هاشم جميع الحقوق محفوظة',
            madeWith: 'صُنع بـ',
            using: 'React و TailwindCSS'
        }
    }
};

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('language') || 'en';
        }
        return 'en';
    });

    const isRTL = language === 'ar';

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        document.documentElement.setAttribute('lang', language);
    }, [language, isRTL]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    };

    const t = (key) => {
        const keys = key.split('.');
        let value = translations[language];
        for (const k of keys) {
            value = value?.[k];
        }
        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
