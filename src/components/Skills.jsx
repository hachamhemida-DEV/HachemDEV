import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import Card from './common/Card';
import { skillsData } from '../data/skills';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
    const { t, isRTL } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <SectionWrapper id="skills" className="bg-white dark:bg-gray-900">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3"
                >
                    {t('skills.subtitle')}
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
                >
                    {t('skills.title')}
                </motion.h3>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
                {skillsData.map((category) => (
                    <motion.div key={category.id} variants={cardVariants}>
                        <Card className="h-full p-6 lg:p-8">
                            {/* Header */}
                            <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {category.title}
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
                                        className={`flex items-center gap-2 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group ${isRTL ? 'flex-row-reverse' : ''}`}
                                    >
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} group-hover:scale-125 transition-transform`} />
                                        <span className={`text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors ${isRTL ? 'text-right' : ''}`}>
                                            {skill}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
};

export default Skills;
