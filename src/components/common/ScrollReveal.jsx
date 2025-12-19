import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * ScrollReveal - A reusable animation wrapper component for scroll-triggered animations
 * Features:
 * - Fade-in + translateY animation
 * - Staggered children support
 * - Respects reduced-motion preferences
 * - Triggers only once when entering viewport
 * - Hardware-accelerated animations
 */

// Animation variants for the container
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// Animation variants for individual items
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1] // Smooth cubic-bezier
        }
    }
};

// Simplified variants for reduced motion
const reducedMotionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.3 }
    }
};

/**
 * ScrollReveal wrapper component
 * @param {ReactNode} children - Content to animate
 * @param {string} className - Additional CSS classes
 * @param {number} delay - Additional delay before animation starts
 * @param {boolean} staggerChildren - Enable staggered animation for children
 * @param {string} direction - Animation direction: 'up' | 'down' | 'left' | 'right'
 */
const ScrollReveal = ({
    children,
    className = '',
    delay = 0,
    staggerChildren = false,
    direction = 'up',
    threshold = 0.1
}) => {
    const prefersReducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check for small devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Direction-based initial position
    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: 40, x: 0 };
            case 'down': return { y: -40, x: 0 };
            case 'left': return { y: 0, x: 40 };
            case 'right': return { y: 0, x: -40 };
            default: return { y: 40, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    // Custom variants with direction support
    const customVariants = prefersReducedMotion ? reducedMotionVariants : {
        hidden: {
            opacity: 0,
            y: offset.y,
            x: offset.x
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: isMobile ? 0.3 : 0.5,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
                ...(staggerChildren && {
                    staggerChildren: 0.08,
                    delayChildren: delay + 0.1
                })
            }
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: threshold }}
            variants={staggerChildren ? containerVariants : customVariants}
        >
            {children}
        </motion.div>
    );
};

/**
 * ScrollRevealItem - Child component for staggered animations
 * Use inside ScrollReveal with staggerChildren={true}
 */
const ScrollRevealItem = ({
    children,
    className = '',
    ...props
}) => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            variants={prefersReducedMotion ? reducedMotionVariants : itemVariants}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export { ScrollReveal, ScrollRevealItem, containerVariants, itemVariants };
export default ScrollReveal;
