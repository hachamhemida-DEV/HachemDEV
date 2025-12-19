import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX, HiSun, HiMoon, HiGlobe } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const navLinks = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'skills', labelKey: 'nav.skills' },
    { id: 'projects', labelKey: 'nav.projects' },
    { id: 'contact', labelKey: 'nav.contact' },
];

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const { language, toggleLanguage, t, isRTL } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`
                fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4
                transition-all duration-300
                ${scrolled ? 'backdrop-blur-lg' : ''}
            `}
            style={{
                backgroundColor: scrolled
                    ? (darkMode ? 'rgba(11, 11, 11, 0.95)' : 'rgba(255, 255, 255, 0.95)')
                    : 'transparent',
                borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
                boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
            }}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <motion.a
                    href="#"
                    className="text-2xl font-bold gradient-text"
                    whileHover={{ scale: 1.05 }}
                >
                    {isRTL ? '</ هاشم >' : '<Hachem />'}
                </motion.a>

                {/* Desktop Navigation */}
                <div className={`hidden md:flex items-center gap-8 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.id}
                            href={`#${link.id}`}
                            className="relative font-medium transition-colors"
                            style={{ color: 'var(--color-text-secondary)' }}
                            whileHover={{ color: 'var(--color-accent)' }}
                        >
                            {t(link.labelKey)}
                            <motion.span
                                className="absolute -bottom-1 left-0 h-0.5 w-0"
                                style={{ backgroundColor: 'var(--color-accent)' }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.a>
                    ))}
                </div>

                {/* Right Side Buttons */}
                <div className={`hidden md:flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg transition-colors"
                        style={{
                            color: 'var(--color-text-secondary)',
                            backgroundColor: 'var(--color-bg-elevated)'
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
                    </motion.button>

                    {/* Language Toggle */}
                    <motion.button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-colors"
                        style={{
                            color: 'var(--color-text-secondary)',
                            backgroundColor: 'var(--color-bg-elevated)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <HiGlobe className="w-4 h-4" />
                        {language === 'en' ? 'عربي' : 'EN'}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-3">
                    <motion.button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg"
                        style={{
                            color: 'var(--color-text-secondary)',
                            backgroundColor: 'var(--color-bg-elevated)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {darkMode ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
                    </motion.button>

                    <motion.button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg"
                        style={{
                            color: 'var(--color-text-primary)',
                            backgroundColor: 'var(--color-bg-elevated)'
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 rounded-2xl overflow-hidden"
                        style={{
                            backgroundColor: 'var(--color-bg-card)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <div className="p-4 space-y-2">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    href={`#${link.id}`}
                                    className={`block py-3 px-4 rounded-lg font-medium transition-colors ${isRTL ? 'text-right' : ''}`}
                                    style={{ color: 'var(--color-text-secondary)' }}
                                    onClick={() => setIsOpen(false)}
                                    whileHover={{
                                        backgroundColor: 'var(--color-accent-muted)',
                                        color: 'var(--color-accent)'
                                    }}
                                >
                                    {t(link.labelKey)}
                                </motion.a>
                            ))}
                            <motion.button
                                onClick={toggleLanguage}
                                className={`w-full py-3 px-4 rounded-lg font-medium flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}
                                style={{ color: 'var(--color-text-secondary)' }}
                                whileHover={{
                                    backgroundColor: 'var(--color-accent-muted)',
                                    color: 'var(--color-accent)'
                                }}
                            >
                                <HiGlobe className="w-4 h-4" />
                                {language === 'en' ? 'العربية' : 'English'}
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
