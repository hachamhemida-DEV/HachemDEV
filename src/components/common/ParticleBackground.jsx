import { useEffect, useRef, useState } from 'react';

/**
 * ParticleBackground - A subtle, performance-optimized animated background
 * Features:
 * - Soft falling particles with red accent color
 * - Automatic pause when tab is inactive
 * - Low CPU/GPU usage with requestAnimationFrame
 * - Configurable via props
 */
const ParticleBackground = ({
    enabled = true,
    particleCount = 50,
    color = 'rgba(225, 6, 0, 0.15)', // Red with low opacity
    maxSpeed = 0.5,
    minSize = 1,
    maxSize = 3,
    className = ''
}) => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!enabled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width = canvas.offsetWidth;
        let height = canvas.offsetHeight;

        // Set canvas dimensions
        const setCanvasSize = () => {
            width = canvas.offsetWidth;
            height = canvas.offsetHeight;
            canvas.width = width;
            canvas.height = height;
        };

        setCanvasSize();

        // Initialize particles
        const initParticles = () => {
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speedY: Math.random() * maxSpeed + 0.1,
                    speedX: (Math.random() - 0.5) * 0.3, // Slight horizontal drift
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        initParticles();

        // Animation loop
        const animate = () => {
            if (!isVisible) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            ctx.clearRect(0, 0, width, height);

            particlesRef.current.forEach((particle) => {
                // Update position
                particle.y += particle.speedY;
                particle.x += particle.speedX;

                // Reset particle when it goes off screen
                if (particle.y > height) {
                    particle.y = -10;
                    particle.x = Math.random() * width;
                }
                if (particle.x > width) particle.x = 0;
                if (particle.x < 0) particle.x = width;

                // Draw particle with glow effect
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Soft glow
                const gradient = ctx.createRadialGradient(
                    particle.x, particle.y, 0,
                    particle.x, particle.y, particle.size * 2
                );
                gradient.addColorStop(0, color);
                gradient.addColorStop(1, 'transparent');

                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            setCanvasSize();
            initParticles();
        };

        // Visibility API - pause when tab is inactive
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [enabled, particleCount, color, maxSpeed, minSize, maxSize, isVisible]);

    if (!enabled) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{
                zIndex: 0,
                opacity: 0.8
            }}
            aria-hidden="true"
        />
    );
};

export default ParticleBackground;
