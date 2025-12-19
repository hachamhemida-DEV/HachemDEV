import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  ...props
}) => {
  const { darkMode } = useTheme();

  const getVariantClasses = () => {
    if (variant === 'primary') {
      return darkMode
        ? 'bg-[#0B0B0B] border-2 border-[#E10600] text-white hover:bg-[#E10600] shadow-lg'
        : 'bg-[#6366F1] border-2 border-[#6366F1] text-white hover:bg-[#4F46E5] hover:border-[#4F46E5] shadow-lg';
    }
    if (variant === 'secondary') {
      return darkMode
        ? 'bg-transparent border-2 border-[#1F1F1F] text-white hover:border-[#E10600] hover:text-[#E10600]'
        : 'bg-transparent border-2 border-[#E2E8F0] text-[#1A1A2E] hover:border-[#6366F1] hover:text-[#6366F1]';
    }
    return 'bg-transparent border-none text-gray-500 hover:text-gray-700';
  };

  const baseClasses = `
        inline-flex items-center justify-center
        px-6 py-3 rounded-xl
        font-semibold
        transition-all duration-200 ease-out
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${getVariantClasses()}
        ${className}
    `;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      disabled={disabled}
      className={baseClasses}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default Button;
