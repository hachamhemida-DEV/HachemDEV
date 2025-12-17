import { motion } from 'framer-motion';
import SectionWrapper from './common/SectionWrapper';
import { HiCode, HiDeviceMobile, HiShieldCheck, HiServer } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const focusIcons = [HiCode, HiDeviceMobile, HiShieldCheck, HiServer];
const focusColors = ['text-blue-500', 'text-purple-500', 'text-green-500', 'text-orange-500'];

const About = () => {
    const { t, isRTL } = useLanguage();
    const focuses = t('about.focuses');

    return (
        <SectionWrapper id="about">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image/Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={`relative ${isRTL ? 'lg:col-start-2' : ''}`}
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl rotate-6 opacity-20" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl -rotate-3 opacity-20" />

                        {/* Main content box */}
                        <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 flex flex-col justify-center items-center shadow-2xl border border-gray-200 dark:border-gray-700">
                            <div className="text-6xl mb-4">👨‍💻</div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {t('hero.name')}
                                </div>
                                <div className="text-gray-500 dark:text-gray-400 font-medium">
                                    {t('about.devTitle')}
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <div className="text-2xl font-bold gradient-text">4+</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('about.skillAreas')}</div>
                                </div>
                                <div className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
                                    <div className="text-2xl font-bold gradient-text">∞</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">{t('about.learning')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Content */}
                <div className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={`text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-3 ${isRTL ? 'text-right' : ''}`}>
                            {t('about.subtitle')}
                        </h2>
                        <h3 className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ${isRTL ? 'text-right' : ''}`}>
                            {t('about.title')}{' '}
                            <span className="gradient-text">{t('about.titleHighlight')}</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 ${isRTL ? 'text-right' : ''}`}
                    >
                        <p>{t('about.description1')}</p>
                        <p>{t('about.description2')}</p>
                    </motion.div>

                    {/* Focus areas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-3"
                    >
                        <h4 className={`text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4 ${isRTL ? 'text-right' : ''}`}>
                            {t('about.focusTitle')}
                        </h4>
                        {focuses.map((focus, index) => {
                            const Icon = focusIcons[index];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.1 * index }}
                                    className={`flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                                >
                                    <Icon className={`w-5 h-5 ${focusColors[index]} shrink-0`} />
                                    <span className={`text-gray-700 dark:text-gray-300 font-medium ${isRTL ? 'text-right' : ''}`}>
                                        {focus}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
