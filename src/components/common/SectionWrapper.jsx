import { motion } from 'framer-motion';

const SectionWrapper = ({
    children,
    id,
    className = '',
}) => {
    return (
        <section
            id={id}
            className={`
                relative py-20 md:py-28 px-4 sm:px-6 lg:px-8
                ${className}
            `}
            style={{ backgroundColor: 'var(--color-bg-primary)' }}
        >
            <motion.div
                className="max-w-7xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;
