import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Button from './common/Button';
import { ScrollReveal } from './common/ScrollReveal';
import {
    HiMail,
    HiUser,
    HiChatAlt2,
    HiPaperAirplane
} from 'react-icons/hi';
import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaLinkedinIn
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
    {
        name: 'Facebook',
        icon: FaFacebookF,
        url: 'https://web.facebook.com/Hacham.Hemida.Tadj.eddin/',
        hoverColor: '#1877F2'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://www.instagram.com/whoshachem/',
        hoverColor: '#E4405F'
    },
    {
        name: 'WhatsApp',
        icon: FaWhatsapp,
        url: 'https://wa.me/0542557621',
        hoverColor: '#25D366'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedinIn,
        url: 'https://www.linkedin.com/in/hamida-hachem-tadj-eddin-111b45379/',
        hoverColor: '#0A66C2'
    }
];

const Contact = () => {
    const { t, isRTL } = useLanguage();
    const { darkMode } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://formspree.io/f/xblnnnvr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        }

        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <SectionWrapper id="contact">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
                {/* Left side - Info */}
                <ScrollReveal direction="left" className={isRTL ? 'lg:col-start-2' : ''}>
                    <h2
                        className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : ''}`}
                        style={{ color: 'var(--color-accent)' }}
                    >
                        {t('contact.subtitle')}
                    </h2>
                    <h3
                        className={`text-3xl md:text-4xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {t('contact.title')}{' '}
                        <span className="gradient-text">{t('contact.titleHighlight')}</span>
                    </h3>
                    <p
                        className={`text-lg mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        {t('contact.description')}
                    </p>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4
                            className={`text-sm font-semibold uppercase tracking-wider ${isRTL ? 'text-right' : ''}`}
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {t('contact.connectTitle')}
                        </h4>
                        <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-3 rounded-xl transition-all duration-300"
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        border: '2px solid var(--color-border)',
                                        backgroundColor: 'var(--color-bg-card)'
                                    }}
                                    whileHover={{
                                        y: -5,
                                        scale: 1.1,
                                        backgroundColor: social.hoverColor,
                                        borderColor: social.hoverColor,
                                        color: '#FFFFFF'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    aria-label={`Visit my ${social.name} profile`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Decorative element */}
                    <div className="hidden lg:block mt-12">
                        <div className="relative">
                            <div
                                className="w-64 h-64 rounded-full blur-3xl"
                                style={{ background: 'var(--gradient-glow)', opacity: 0.5 }}
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="text-6xl animate-float">📬</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Right side - Form */}
                <ScrollReveal
                    direction="right"
                    delay={0.2}
                    className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name field */}
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {t('contact.form.name')}
                            </label>
                            <div className="relative">
                                <HiUser
                                    className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`}
                                    style={{ color: 'var(--color-text-muted)' }}
                                />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact.form.namePlaceholder')}
                                    className={`
                                        w-full py-4 rounded-xl
                                        outline-none transition-colors
                                        ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                                    `}
                                    style={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        border: '2px solid var(--color-border)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                            </div>
                        </div>

                        {/* Email field */}
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {t('contact.form.email')}
                            </label>
                            <div className="relative">
                                <HiMail
                                    className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`}
                                    style={{ color: 'var(--color-text-muted)' }}
                                />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className={`
                                        w-full py-4 rounded-xl
                                        outline-none transition-colors
                                        ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                                    `}
                                    style={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        border: '2px solid var(--color-border)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        {/* Message field */}
                        <div className="relative">
                            <label
                                htmlFor="message"
                                className={`block text-sm font-medium mb-2 ${isRTL ? 'text-right' : ''}`}
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {t('contact.form.message')}
                            </label>
                            <div className="relative">
                                <HiChatAlt2
                                    className={`absolute top-4 w-5 h-5 ${isRTL ? 'right-4' : 'left-4'}`}
                                    style={{ color: 'var(--color-text-muted)' }}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className={`
                                        w-full py-4 rounded-xl
                                        outline-none transition-colors resize-none
                                        ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                                    `}
                                    style={{
                                        backgroundColor: 'var(--color-bg-card)',
                                        border: '2px solid var(--color-border)',
                                        color: 'var(--color-text-primary)'
                                    }}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                            </div>
                        </div>

                        {/* Submit button */}
                        <Button
                            type="submit"
                            variant="primary"
                            className={`w-full flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    {t('contact.form.sending')}
                                </>
                            ) : (
                                <>
                                    <HiPaperAirplane className={`w-5 h-5 ${isRTL ? '-rotate-90' : 'rotate-90'}`} />
                                    {t('contact.form.send')}
                                </>
                            )}
                        </Button>

                        {/* Success message */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl text-center font-medium ${isRTL ? 'text-right' : ''}`}
                                style={{
                                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                                    border: '1px solid rgba(34, 197, 94, 0.3)',
                                    color: '#22C55E'
                                }}
                            >
                                {t('contact.form.success')}
                            </motion.div>
                        )}

                        {/* Error message */}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl text-center font-medium ${isRTL ? 'text-right' : ''}`}
                                style={{
                                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                                    border: '1px solid rgba(239, 68, 68, 0.3)',
                                    color: '#EF4444'
                                }}
                            >
                                {t('contact.form.error')}
                            </motion.div>
                        )}
                    </form>
                </ScrollReveal>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
