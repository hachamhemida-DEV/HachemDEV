import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import { ScrollReveal, ScrollRevealItem } from './common/ScrollReveal';
import { HiCode, HiDeviceMobile, HiShieldCheck, HiServer } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const focusIcons = [HiCode, HiDeviceMobile, HiShieldCheck, HiServer];

const About = () => {
    const { t, isRTL } = useLanguage();
    const focuses = t('about.focuses');

    return (
        <SectionWrapper id="about">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image/Visual */}
                <ScrollReveal direction="left" delay={0.1}>
                    <div className={`relative ${isRTL ? 'lg:col-start-2' : ''}`}>
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Decorative elements */}
                            <div
                                className="absolute inset-0 rounded-3xl rotate-6"
                                style={{ background: 'var(--gradient-glow)', opacity: 0.5 }}
                            />
                            <div
                                className="absolute inset-0 rounded-3xl -rotate-3"
                                style={{ background: 'var(--gradient-glow)', opacity: 0.3 }}
                            />

                            {/* Main content box */}
                            <div
                                className="relative h-full rounded-3xl p-8 flex flex-col justify-center items-center"
                                style={{
                                    backgroundColor: 'var(--color-bg-card)',
                                    border: '1px solid var(--color-border)',
                                    boxShadow: 'var(--shadow-lg)'
                                }}
                            >
                                <div className="text-6xl mb-4">👨‍💻</div>
                                <div className="text-center">
                                    <div
                                        className="text-2xl font-bold mb-2"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {t('hero.name')}
                                    </div>
                                    <div style={{ color: 'var(--color-text-muted)' }} className="font-medium">
                                        {t('about.devTitle')}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                                    <div
                                        className="text-center p-4 rounded-xl"
                                        style={{
                                            backgroundColor: 'var(--color-bg-elevated)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        <div className="text-2xl font-bold gradient-text">4+</div>
                                        <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                            {t('about.skillAreas')}
                                        </div>
                                    </div>
                                    <div
                                        className="text-center p-4 rounded-xl"
                                        style={{
                                            backgroundColor: 'var(--color-bg-elevated)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        <div className="text-2xl font-bold gradient-text">∞</div>
                                        <div className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                                            {t('about.learning')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Content */}
                <div className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <ScrollReveal direction="right" delay={0.2}>
                        <h2
                            className={`text-sm font-semibold uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : ''}`}
                            style={{ color: 'var(--color-accent)' }}
                        >
                            {t('about.subtitle')}
                        </h2>
                        <h3
                            className={`text-3xl md:text-4xl font-bold mb-6 ${isRTL ? 'text-right' : ''}`}
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {t('about.title')}{' '}
                            <span className="gradient-text">{t('about.titleHighlight')}</span>
                        </h3>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <div
                            className={`space-y-4 text-lg leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            <p>{t('about.description1')}</p>
                            <p>{t('about.description2')}</p>
                        </div>
                    </ScrollReveal>

                    {/* Focus areas with staggered animation */}
                    <ScrollReveal delay={0.4} staggerChildren>
                        <h4
                            className={`text-sm font-semibold uppercase tracking-wider mb-4 ${isRTL ? 'text-right' : ''}`}
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {t('about.focusTitle')}
                        </h4>
                        <div className="space-y-3">
                            {focuses.map((focus, index) => {
                                const Icon = focusIcons[index];
                                return (
                                    <ScrollRevealItem key={index}>
                                        <div
                                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                                            style={{
                                                backgroundColor: 'var(--color-bg-card)',
                                                border: '1px solid var(--color-border)'
                                            }}
                                        >
                                            <Icon className="w-5 h-5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                                            <span
                                                className={`font-medium ${isRTL ? 'text-right' : ''}`}
                                                style={{ color: 'var(--color-text-secondary)' }}
                                            >
                                                {focus}
                                            </span>
                                        </div>
                                    </ScrollRevealItem>
                                );
                            })}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
