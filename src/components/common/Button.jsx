import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    href,
    onClick,
    className = '',
    ...props
}) => {
    const baseStyles = `
    relative inline-flex items-center justify-center px-6 py-3 
    font-semibold text-sm rounded-lg transition-all duration-300
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    btn-shine cursor-pointer
  `;

    const variants = {
        primary: `
      bg-gradient-to-r from-blue-600 to-purple-600 text-white
      hover:from-blue-500 hover:to-purple-500
      focus-visible:ring-purple-500 dark:focus-visible:ring-offset-gray-900
      shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40
    `,
        secondary: `
      bg-transparent border-2 border-gray-300 dark:border-gray-600
      text-gray-700 dark:text-gray-200
      hover:border-purple-500 hover:text-purple-500
      dark:hover:border-purple-400 dark:hover:text-purple-400
      focus-visible:ring-gray-400
    `,
        ghost: `
      bg-white/10 backdrop-blur-sm text-white
      hover:bg-white/20 border border-white/20
      focus-visible:ring-white
    `
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            href={href}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
        </Component>
    );
};

export default Button;
