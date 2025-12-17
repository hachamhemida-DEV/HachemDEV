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
            name: 'Hachem',
            title: {
                web: 'Web Developer',
                app: 'App Developer',
                security: 'Cyber Security',
                it: 'IT'
            },
            description: 'I build secure, scalable, and performant digital solutions. From full-stack web applications to security-conscious systems, I focus on clean code, best practices, and solving complex technical challenges.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            scroll: 'Scroll'
        },
        // About
        about: {
            subtitle: 'About Me',
            title: 'Building Digital Solutions with',
            titleHighlight: 'Security in Mind',
            description1: 'I am a developer with a passion for creating robust, secure, and user-friendly applications. My approach combines technical expertise with a strong focus on security best practices.',
            description2: 'From designing responsive web interfaces to understanding network security fundamentals, I bring a comprehensive perspective to every project. I believe in writing clean, maintainable code that stands the test of time.',
            focusTitle: 'Core Focus Areas',
            focuses: [
                'Full-stack Web Development',
                'Application Development',
                'Cybersecurity Awareness & Secure Coding',
                'IT Systems & Networking Fundamentals'
            ],
            devTitle: 'Developer & Security Enthusiast',
            skillAreas: 'Skill Areas',
            learning: 'Learning'
        },
        // Skills
        skills: {
            subtitle: 'Skills & Expertise',
            title: 'Technologies I Work With'
        },
        // Projects
        projects: {
            subtitle: 'Portfolio',
            title: 'Featured Projects',
            description: 'A collection of projects showcasing my work across web development, application development, security, and IT systems.'
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
            about: 'نبذة عني',
            skills: 'المهارات',
            projects: 'المشاريع',
            contact: 'تواصل معي'
        },
        // Hero
        hero: {
            badge: 'تطوير آمن أولاً',
            greeting: 'مرحباً، أنا',
            name: 'هاشم',
            title: {
                web: 'مطور ويب',
                app: 'مطور تطبيقات',
                security: 'أمن سيبراني',
                it: 'تقنية معلومات'
            },
            description: 'أبني حلولاً رقمية آمنة وقابلة للتطوير وعالية الأداء. من تطبيقات الويب الكاملة إلى الأنظمة الآمنة، أركز على الكود النظيف وأفضل الممارسات وحل التحديات التقنية المعقدة.',
            viewProjects: 'عرض المشاريع',
            contactMe: 'تواصل معي',
            scroll: 'اسحب للأسفل'
        },
        // About
        about: {
            subtitle: 'نبذة عني',
            title: 'بناء حلول رقمية مع',
            titleHighlight: 'الأمان في الاعتبار',
            description1: 'أنا مطور شغوف بإنشاء تطبيقات قوية وآمنة وسهلة الاستخدام. يجمع نهجي بين الخبرة التقنية والتركيز القوي على أفضل ممارسات الأمان.',
            description2: 'من تصميم واجهات ويب متجاوبة إلى فهم أساسيات أمن الشبكات، أقدم منظوراً شاملاً لكل مشروع. أؤمن بكتابة كود نظيف وقابل للصيانة يصمد أمام اختبار الزمن.',
            focusTitle: 'مجالات التركيز الأساسية',
            focuses: [
                'تطوير الويب الكامل',
                'تطوير التطبيقات',
                'الوعي بالأمن السيبراني والبرمجة الآمنة',
                'أنظمة تقنية المعلومات وأساسيات الشبكات'
            ],
            devTitle: 'مطور ومتحمس للأمان',
            skillAreas: 'مجالات المهارات',
            learning: 'التعلم'
        },
        // Skills
        skills: {
            subtitle: 'المهارات والخبرات',
            title: 'التقنيات التي أعمل بها'
        },
        // Projects
        projects: {
            subtitle: 'معرض الأعمال',
            title: 'المشاريع المميزة',
            description: 'مجموعة من المشاريع تعرض عملي في تطوير الويب وتطوير التطبيقات والأمان وأنظمة تقنية المعلومات.'
        },
        // Contact
        contact: {
            subtitle: 'تواصل معي',
            title: 'لنعمل',
            titleHighlight: 'معاً',
            description: 'هل لديك مشروع في ذهنك أو تريد مناقشة فرصة؟ أنا دائماً منفتح على الأفكار الجديدة والتعاون. لا تتردد في التواصل من خلال النموذج أو التواصل معي على وسائل التواصل الاجتماعي.',
            connectTitle: 'تواصل معي',
            form: {
                name: 'اسمك',
                namePlaceholder: 'محمد أحمد',
                email: 'البريد الإلكتروني',
                emailPlaceholder: 'example@email.com',
                message: 'رسالتك',
                messagePlaceholder: 'أخبرني عن مشروعك...',
                send: 'إرسال الرسالة',
                sending: 'جاري الإرسال...',
                success: '✓ تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.',
                error: '✗ فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو التواصل معي مباشرة.'
            }
        },
        // Footer
        footer: {
            tagline: 'بناء حلول رقمية آمنة',
            copyright: 'جميع الحقوق محفوظة.',
            madeWith: 'صُنع بـ',
            using: 'باستخدام React و TailwindCSS'
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
