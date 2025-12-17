import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Button from './common/Button';
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

const socialLinks = [
    {
        name: 'Facebook',
        icon: FaFacebookF,
        url: 'https://web.facebook.com/Hacham.Hemida.Tadj.eddin/',
        color: 'hover:bg-blue-600 hover:border-blue-600'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://www.instagram.com/whoshachem/',
        color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:border-pink-600'
    },
    {
        name: 'WhatsApp',
        icon: FaWhatsapp,
        url: 'https://wa.me/0542557621',
        color: 'hover:bg-green-600 hover:border-green-600'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedinIn,
        url: 'https://www.linkedin.com/in/hamida-hachem-tadj-eddin-111b45379/',
        color: 'hover:bg-blue-700 hover:border-blue-700'
    }
];

const Contact = () => {
    const { t, isRTL } = useLanguage();
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
            // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
            // Get one free at: https://formspree.io
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

        // Clear status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <SectionWrapper id="contact" className="bg-white dark:bg-gray-900">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
                {/* Left side - Info */}
                <motion.div
                    initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={isRTL ? 'lg:col-start-2' : ''}
                >
                    <h2 className={`text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.subtitle')}
                    </h2>
                    <h3 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.title')}{' '}
                        <span className="gradient-text">{t('contact.titleHighlight')}</span>
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                        {t('contact.description')}
                    </p>

                    {/* Social Links */}
                    <div className="space-y-4">
                        <h4 className={`text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider ${isRTL ? 'text-right' : ''}`}>
                            {t('contact.connectTitle')}
                        </h4>
                        <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`
                    p-3 rounded-xl border-2 border-gray-200 dark:border-gray-700
                    text-gray-600 dark:text-gray-400
                    transition-all duration-300
                    hover:text-white hover:scale-110
                    ${social.color}
                  `}
                                    whileHover={{ y: -5 }}
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
                            <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="text-6xl animate-float">📬</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right side - Form */}
                <motion.div
                    initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name field */}
                        <div className="relative">
                            <label
                                htmlFor="name"
                                className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'text-right' : ''}`}
                            >
                                {t('contact.form.name')}
                            </label>
                            <div className="relative">
                                <HiUser className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
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
                    bg-gray-50 dark:bg-gray-800/50
                    border-2 border-gray-200 dark:border-gray-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    focus:border-purple-500 dark:focus:border-purple-500
                    focus:ring-0 outline-none
                    transition-colors
                    ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                  `}
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                />
                            </div>
                        </div>

                        {/* Email field */}
                        <div className="relative">
                            <label
                                htmlFor="email"
                                className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'text-right' : ''}`}
                            >
                                {t('contact.form.email')}
                            </label>
                            <div className="relative">
                                <HiMail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
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
                    bg-gray-50 dark:bg-gray-800/50
                    border-2 border-gray-200 dark:border-gray-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    focus:border-purple-500 dark:focus:border-purple-500
                    focus:ring-0 outline-none
                    transition-colors
                    ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                  `}
                                    dir="ltr"
                                />
                            </div>
                        </div>

                        {/* Message field */}
                        <div className="relative">
                            <label
                                htmlFor="message"
                                className={`block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 ${isRTL ? 'text-right' : ''}`}
                            >
                                {t('contact.form.message')}
                            </label>
                            <div className="relative">
                                <HiChatAlt2 className={`absolute top-4 w-5 h-5 text-gray-400 ${isRTL ? 'right-4' : 'left-4'}`} />
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
                    bg-gray-50 dark:bg-gray-800/50
                    border-2 border-gray-200 dark:border-gray-700
                    text-gray-900 dark:text-white
                    placeholder-gray-400
                    focus:border-purple-500 dark:focus:border-purple-500
                    focus:ring-0 outline-none
                    transition-colors resize-none
                    ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}
                  `}
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
                                className={`p-4 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-center font-medium ${isRTL ? 'text-right' : ''}`}
                            >
                                {t('contact.form.success')}
                            </motion.div>
                        )}

                        {/* Error message */}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-4 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-center font-medium ${isRTL ? 'text-right' : ''}`}
                            >
                                {t('contact.form.error')}
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
