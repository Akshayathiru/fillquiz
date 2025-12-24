import React, { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        // Bounds tracker
        let bounds = {
            width: window.innerWidth,
            height: window.innerHeight
        };

        const initParticles = () => {
            const area = bounds.width * bounds.height;
            // Calculate particle count based on area to maintain density
            // Increased density for smaller, solid dots
            const density = 0.0001;
            const count = Math.min(Math.floor(area * density), 800);

            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;

            // Calculate the full scrollable height
            const pageHeight = Math.max(
                document.documentElement.scrollHeight,
                document.body.scrollHeight,
                document.documentElement.offsetHeight,
                document.documentElement.clientHeight
            );

            bounds.width = document.documentElement.clientWidth || window.innerWidth;
            bounds.height = pageHeight;

            canvas.width = bounds.width * dpr;
            canvas.height = bounds.height * dpr;

            // Set display size
            canvas.style.width = '100%';
            canvas.style.height = `${bounds.height}px`;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Re-initialize particles to cover the new full height
            initParticles();
        };

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * bounds.width;
                this.y = Math.random() * bounds.height;
                // Smaller size for solid dots (2px to 4px)
                this.radius = Math.random() * 2 + 2;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.opacity = 0;
                this.targetOpacity = Math.random() * 0.4 + 0.6; // High opacity (0.6 to 1.0)
                this.fadeInSpeed = 0.02;

                const colors = [
                    '255, 255, 255', // White
                    '255, 234, 0',   // Yellow
                    '0, 212, 255'    // Cyan
                ];
                this.colorRaw = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Simple fade in
                if (this.opacity < this.targetOpacity) {
                    this.opacity += this.fadeInSpeed;
                }

                // Wrap around full document bounds
                if (this.x < -50) this.x = bounds.width + 50;
                if (this.x > bounds.width + 50) this.x = -50;
                if (this.y < -50) this.y = bounds.height + 50;
                if (this.y > bounds.height + 50) this.y = -50;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

                // Solid Fill (Not Transparent)
                ctx.fillStyle = `rgba(${this.colorRaw}, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Initialize and listen for resize/content changes
        resizeCanvas();

        const resizeObserver = new ResizeObserver(() => {
            resizeCanvas();
        });
        resizeObserver.observe(document.body);

        const animate = () => {
            ctx.clearRect(0, 0, bounds.width, bounds.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            resizeObserver.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none'
            }}
        />
    );
};

export const RotatingGradient = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -3,
            background: '#000000',
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: '-50%',
                left: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle at center, rgba(255, 234, 0, 0.08) 0%, rgba(0, 212, 255, 0.05) 30%, transparent 60%)',
                animation: 'rotate-bg 40s linear infinite',
            }} />
            <div style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '140%',
                height: '140%',
                background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.03) 0%, transparent 40%)',
                animation: 'float-glow 20s ease-in-out infinite alternate',
            }} />
            <style>{`
                @keyframes rotate-bg {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes float-glow {
                    from { transform: translate(-5%, -5%); }
                    to { transform: translate(5%, 5%); }
                }
            `}</style>
        </div>
    );
};
