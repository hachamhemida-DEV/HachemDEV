import { motion } from 'framer-motion';
import { HiArrowDown, HiCode, HiShieldCheck } from 'react-icons/hi';
import Button from './common/Button';
import ParticleBackground from './common/ParticleBackground';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Config flag - set to false to disable particle animation
const ENABLE_PARTICLE_ANIMATION = true;

const Hero = () => {
    const { t, isRTL } = useLanguage();
    const { darkMode } = useTheme();

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
            {/* Particle Animation Background - Dark mode only */}
            {darkMode && (
                <ParticleBackground
                    enabled={ENABLE_PARTICLE_ANIMATION}
                    particleCount={40}
                    color="rgba(225, 6, 0, 0.12)"
                    maxSpeed={0.4}
                    minSize={1}
                    maxSize={2.5}
                />
            )}

            {/* Light mode subtle gradient overlay */}
            {!darkMode && (
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(139, 92, 246, 0.02) 50%, transparent 100%)'
                    }}
                />
            )}

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden z-[1]">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl"
                    style={{
                        backgroundColor: darkMode ? 'rgba(225, 6, 0, 0.12)' : 'rgba(99, 102, 241, 0.08)'
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
                    style={{
                        backgroundColor: darkMode ? 'rgba(225, 6, 0, 0.08)' : 'rgba(139, 92, 246, 0.06)'
                    }}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl"
                    style={{
                        backgroundColor: darkMode ? 'rgba(139, 0, 0, 0.08)' : 'rgba(99, 102, 241, 0.05)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 z-[2]"
                style={{
                    opacity: darkMode ? 0.02 : 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${darkMode ? '%23FFFFFF' : '%23000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
                    style={{
                        backgroundColor: 'var(--color-accent-muted)',
                        border: '1px solid var(--color-accent)',
                        color: 'var(--color-accent)'
                    }}
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
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    <span>{t('hero.greeting')} </span>
                    <span className="gradient-text">{t('hero.name')}</span>
                </motion.h1>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl font-medium mb-8 ${isRTL ? 'flex-row-reverse' : ''}`}
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    <span className="flex items-center gap-2">
                        <HiCode style={{ color: 'var(--color-accent)' }} />
                        {t('hero.title.web')}
                    </span>
                    <span className="hidden sm:inline" style={{ color: 'var(--color-border)' }}>|</span>
                    <span>{t('hero.title.app')}</span>
                    <span className="hidden sm:inline" style={{ color: 'var(--color-border)' }}>|</span>
                    <span className="flex items-center gap-2">
                        <HiShieldCheck style={{ color: 'var(--color-accent)' }} />
                        {t('hero.title.security')}
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
                    style={{ color: 'var(--color-text-secondary)' }}
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
                        className="flex flex-col items-center gap-2 transition-colors"
                        style={{ color: 'var(--color-text-muted)' }}
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
