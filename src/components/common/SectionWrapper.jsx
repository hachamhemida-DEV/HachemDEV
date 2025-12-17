import { motion } from 'framer-motion';

const SectionWrapper = ({
    children,
    id,
    className = '',
    dark = false
}) => {
    return (
        <section
            id={id}
            className={`
        relative py-20 md:py-28 px-4 sm:px-6 lg:px-8
        ${dark
                    ? 'bg-gray-900'
                    : 'bg-gray-50 dark:bg-gray-900/50'
                }
        ${className}
      `}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
