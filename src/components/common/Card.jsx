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
        ${gradient
                    ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50'
                    : 'bg-white dark:bg-gray-800/50'
                }
        backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/50
        ${hover ? 'card-hover' : ''}
        ${className}
      `}
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
