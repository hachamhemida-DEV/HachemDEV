import { motion } from 'framer-motion';

const Card = ({
    children,
    className = '',
    hover = true,
    gradient = false,
    ...props
}) => {
    return (
        <motion.div
            className={`
                relative rounded-2xl overflow-hidden
                backdrop-blur-lg
                ${hover ? 'card-hover' : ''}
                ${className}
            `}
            style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
