import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Card from './common/Card';
import { projectsData, getDomainColor } from '../data/projects';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
    const { t, isRTL, language } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3"
                >
                    {t('projects.subtitle')}
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    {t('projects.title')}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                    {t('projects.description')}
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projectsData.map((project) => {
                    const title = language === 'ar' ? project.titleAr : project.title;
                    const description = language === 'ar' ? project.descriptionAr : project.description;
                    const domain = language === 'ar' ? project.domainAr : project.domain;

                    return (
                        <Card key={project.id} className="group overflow-hidden">
                            {/* Project image placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <HiCode className="w-16 h-16 text-gray-300 dark:text-gray-600" />
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                                    <div className="flex gap-3">
                                        <motion.a
                                            href={project.github}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                                            aria-label={`View ${project.title} source code`}
                                        >
                                            <HiCode className="w-5 h-5" />
                                        </motion.a>
                                        <motion.a
                                            href={project.live}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
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
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getDomainColor(domain)} mb-3`}>
                                    {domain}
                                </span>

                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                    {title}
                                </h4>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                    {description}
                                </p>

                                {/* Technologies */}
                                <div className={`flex flex-wrap gap-2 ${isRTL ? 'justify-end' : ''}`}>
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </motion.div>
        </SectionWrapper>
    );
};

export default Projects;
