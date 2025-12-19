import { motion } from 'framer-motion';
import { HiArrowUp, HiHeart } from 'react-icons/hi';
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
        url: 'https://web.facebook.com/Hacham.Hemida.Tadj.eddin/'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        url: 'https://www.instagram.com/whoshachem/'
    },
    {
        name: 'WhatsApp',
        icon: FaWhatsapp,
        url: 'https://wa.me/0542557621'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedinIn,
        url: 'https://www.linkedin.com/in/hamida-hachem-tadj-eddin-111b45379/'
    }
];

const Footer = () => {
    const { t, isRTL } = useLanguage();
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            className="relative"
            style={{
                backgroundColor: 'var(--color-bg-primary)',
                color: 'var(--color-text-primary)',
                borderTop: '1px solid var(--color-border)'
            }}
        >
            {/* Top decoration - Gradient line */}
            <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'var(--gradient-accent)' }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
                    {/* Logo and tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}
                    >
                        <a href="#" className="text-2xl font-bold gradient-text">
                            {isRTL ? '</ هاشم >' : '<Hachem />'}
                        </a>
                        <p className="mt-2 text-sm" style={{ color: 'var(--color-text-muted)' }}>
                            {t('footer.tagline')}
                        </p>
                    </motion.div>

                    {/* Social links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg transition-all"
                                style={{ color: 'var(--color-text-muted)' }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -2,
                                    color: 'var(--color-accent)'
                                }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Visit my ${social.name} profile`}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-3 rounded-xl transition-all"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)',
                            color: 'var(--color-text-muted)'
                        }}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Scroll to top"
                    >
                        <HiArrowUp className="w-5 h-5" />
                    </motion.button>
                </div>

                {/* Divider */}
                <div className="my-8 h-px" style={{ backgroundColor: 'var(--color-border)' }} />

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-2 text-sm ${isRTL ? 'sm:flex-row-reverse' : ''}`}
                    style={{ color: 'var(--color-text-muted)' }}
                >
                    <span>© {currentYear} {isRTL ? 'هاشم' : 'Hachem'}. {t('footer.copyright')}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className={`flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        {t('footer.madeWith')} <HiHeart className="w-4 h-4" style={{ color: 'var(--color-accent)' }} /> {t('footer.using')}
                    </span>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
