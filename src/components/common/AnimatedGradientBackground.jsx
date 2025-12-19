import { useEffect, useRef, useState } from 'react';

/**
 * AnimatedGradientBackground - A smooth, performant animated gradient background
 * Features:
 * - CSS-based animated gradients (no canvas overhead)
 * - Respects reduced-motion preferences
 * - Auto-pause when tab is not visible
 * - Low CPU usage
 */
const AnimatedGradientBackground = ({
    enabled = true,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(true);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check for reduced motion preference
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (e) => setPrefersReducedMotion(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        // Visibility API - pause when tab is inactive
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    if (!enabled || prefersReducedMotion) {
        return (
            <div
                className={`absolute inset-0 bg-[#0B0B0B] ${className}`}
                aria-hidden="true"
            />
        );
    }

    return (
        <div
            className={`absolute inset-0 overflow-hidden ${className}`}
            aria-hidden="true"
            style={{ zIndex: 0 }}
        >
            {/* Base layer */}
            <div className="absolute inset-0 bg-[#0B0B0B]" />

            {/* Animated gradient orbs */}
            <div
                className={`absolute inset-0 ${isVisible ? '' : 'animation-paused'}`}
                style={{
                    background: `
                        radial-gradient(ellipse 80% 80% at 20% 20%, rgba(225, 6, 0, 0.08) 0%, transparent 50%),
                        radial-gradient(ellipse 60% 60% at 80% 80%, rgba(139, 0, 0, 0.06) 0%, transparent 50%),
                        radial-gradient(ellipse 50% 50% at 50% 50%, rgba(225, 6, 0, 0.04) 0%, transparent 50%)
                    `
                }}
            />

            {/* Animated moving gradients */}
            <div
                className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(225, 6, 0, 0.3) 0%, transparent 70%)',
                    top: '10%',
                    left: '10%',
                    animation: isVisible ? 'float-slow 20s ease-in-out infinite' : 'none'
                }}
            />
            <div
                className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
                style={{
                    background: 'radial-gradient(circle, rgba(139, 0, 0, 0.4) 0%, transparent 70%)',
                    bottom: '10%',
                    right: '10%',
                    animation: isVisible ? 'float-slow 25s ease-in-out infinite reverse' : 'none'
                }}
            />
            <div
                className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
                style={{
                    background: 'radial-gradient(circle, rgba(225, 6, 0, 0.25) 0%, transparent 70%)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: isVisible ? 'pulse-slow 15s ease-in-out infinite' : 'none'
                }}
            />

            {/* Noise texture overlay for depth */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
};

export default AnimatedGradientBackground;
