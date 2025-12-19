import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Card from './common/Card';
import { ScrollReveal, ScrollRevealItem } from './common/ScrollReveal';
import { projectsData, getDomainColor } from '../data/projects';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
    const { t, isRTL, language } = useLanguage();
    const { darkMode } = useTheme();

    return (
        <SectionWrapper id="projects">
            {/* Section Header */}
            <ScrollReveal className="text-center mb-16">
                <h2
                    className="text-sm font-semibold uppercase tracking-wider mb-3"
                    style={{ color: 'var(--color-accent)' }}
                >
                    {t('projects.subtitle')}
                </h2>
                <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    {t('projects.title')}
                </h3>
                <p
                    className="max-w-2xl mx-auto"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {t('projects.description')}
                </p>
            </ScrollReveal>

            {/* Projects Grid with staggered cards */}
            <ScrollReveal staggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => {
                    const title = language === 'ar' ? project.titleAr : project.title;
                    const description = language === 'ar' ? project.descriptionAr : project.description;
                    const domain = language === 'ar' ? project.domainAr : project.domain;

                    return (
                        <ScrollRevealItem key={project.id}>
                            <Card className="group overflow-hidden h-full">
                                {/* Project image placeholder */}
                                <div
                                    className="relative h-48 overflow-hidden"
                                    style={{
                                        background: 'var(--gradient-bg)',
                                        borderBottom: '1px solid var(--color-border)'
                                    }}
                                >
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <HiCode className="w-16 h-16" style={{ color: 'var(--color-border)' }} />
                                    </div>

                                    {/* Hover overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                                        style={{
                                            background: darkMode
                                                ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)'
                                                : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
                                        }}
                                    >
                                        <div className="flex gap-3">
                                            <motion.a
                                                href={project.github}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full backdrop-blur-sm text-white transition-colors"
                                                style={{
                                                    backgroundColor: 'var(--color-accent-muted)',
                                                    border: '1px solid var(--color-accent)'
                                                }}
                                                aria-label={`View ${project.title} source code`}
                                            >
                                                <HiCode className="w-5 h-5" />
                                            </motion.a>
                                            <motion.a
                                                href={project.live}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full backdrop-blur-sm text-white transition-colors"
                                                style={{
                                                    backgroundColor: 'var(--color-accent-muted)',
                                                    border: '1px solid var(--color-accent)'
                                                }}
                                                aria-label={`View ${project.title} live demo`}
                                            >
                                                <HiExternalLink className="w-5 h-5" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                                    {/* Domain badge */}
                                    <span
                                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                                        style={{
                                            backgroundColor: 'var(--color-accent-muted)',
                                            color: 'var(--color-accent)',
                                            border: '1px solid var(--color-accent)'
                                        }}
                                    >
                                        {domain}
                                    </span>

                                    <h4
                                        className="text-lg font-bold mb-2 transition-colors"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {title}
                                    </h4>

                                    <p
                                        className="text-sm mb-4 line-clamp-2"
                                        style={{ color: 'var(--color-text-muted)' }}
                                    >
                                        {description}
                                    </p>

                                    {/* Technologies */}
                                    <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs rounded-md transition-colors"
                                                style={{
                                                    backgroundColor: 'var(--color-bg-elevated)',
                                                    border: '1px solid var(--color-border)',
                                                    color: 'var(--color-text-secondary)'
                                                }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </ScrollRevealItem>
                    );
                })}
            </ScrollReveal>
        </SectionWrapper>
    );
};

export default Projects;
