import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Card from './common/Card';
import { ScrollReveal, ScrollRevealItem } from './common/ScrollReveal';
import { skillsData } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t, isRTL, language } = useLanguage();

    return (
        <SectionWrapper id="skills">
            {/* Section Header */}
            <ScrollReveal className="text-center mb-16">
                <h2
                    className="text-sm font-semibold uppercase tracking-wider mb-3"
                    style={{ color: 'var(--color-accent)' }}
                >
                    {t('skills.subtitle')}
                </h2>
                <h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {t('skills.title')}
                </h3>
            </ScrollReveal>

            {/* Skills Grid with staggered cards */}
            <ScrollReveal staggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {skillsData.map((category) => (
                    <ScrollRevealItem key={category.id}>
                        <Card className="h-full p-6 lg:p-8">
                            {/* Header */}
                            <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4
                                    className="text-xl font-bold"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {language === 'ar' ? category.titleAr : category.title}
                                </h4>
                            </div>

                            {/* Skills grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                                        style={{
                                            backgroundColor: 'var(--color-bg-elevated)',
                                            border: '1px solid var(--color-border)'
                                        }}
                                    >
                                        <div
                                            className="w-1.5 h-1.5 rounded-full group-hover:scale-125 transition-transform"
                                            style={{ backgroundColor: 'var(--color-accent)' }}
                                        />
                                        <span
                                            className={`text-sm transition-colors ${isRTL ? 'text-right' : ''}`}
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </ScrollRevealItem>
                ))}
            </ScrollReveal>
        </SectionWrapper>
    );
};

export default Skills;
