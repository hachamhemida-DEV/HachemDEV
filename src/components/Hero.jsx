import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiShieldCheck } from 'react-icons/hi';
import Button from './common/Button';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium mb-8"
                >
                    <HiShieldCheck className="w-4 h-4" />
                    <span>{t('hero.badge')}</span>
                </motion.div>

                {/* Name with gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    <span className="text-gray-900 dark:text-white">{t('hero.greeting')} </span>
                    <span className="gradient-text">{t('hero.name')}</span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                    <span className="flex items-center gap-2">
                        <HiCode className="text-blue-500" />
                        {t('hero.title.web')}
                    </span>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <span>{t('hero.title.app')}</span>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <span className="flex items-center gap-2">
                        <HiShieldCheck className="text-green-500" />
                        {t('hero.title.security')}
                    </span>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <span>{t('hero.title.it')}</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-12"
                >
                    {t('hero.description')}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}
                >
                    <Button href="#projects" variant="primary">
                        {t('hero.viewProjects')}
                    </Button>
                    <Button href="#contact" variant="secondary">
                        {t('hero.contactMe')}
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-gray-400 hover:text-purple-500 transition-colors"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        aria-label="Scroll to about section"
                    >
                        <span className="text-sm">{t('hero.scroll')}</span>
                        <HiArrowDown className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
