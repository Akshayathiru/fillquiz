import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {
    Zap, Activity, Terminal
} from 'lucide-react';
import { ParticleBackground, RotatingGradient } from './Backgrounds';
import DashboardSection from './Dashboard';
import RulesSection from './RulesSection';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const elem = document.querySelector(location.hash);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="home-root" style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Background Layers */}
            <ParticleBackground />
            <RotatingGradient />

            {/* Hero Section */}
            <section style={{
                padding: '12rem 2rem 8rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                position: 'relative',
                minHeight: '100vh',
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ zIndex: 10, maxWidth: '1100px' }}
                >
                    <div className="hero-badge">
                        <Activity size={12} style={{ marginRight: '0.6rem' }} />
                        PROTOCOL // ALPHA-7 // SYNCHRONIZATION EVENT
                    </div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                transition: {
                                    staggerChildren: 0.08,
                                    delayChildren: 0.5
                                }
                            }
                        }}
                        style={{
                            fontFamily: 'var(--font-heading)',
                            fontSize: 'clamp(2rem, 5vw, 4.5rem)',
                            fontWeight: '800',
                            lineHeight: 1.1,
                            letterSpacing: '0.05em',
                            wordSpacing: '0.8rem',
                            marginBottom: '2.5rem',
                            color: 'white',
                            textTransform: 'uppercase'
                        }}
                    >
                        {/* Typewriter Effect for WELCOME TO */}
                        <div>
                            {"WELCOME TO".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    style={{
                                        color: 'var(--accent-blue)',
                                        display: 'inline-block',
                                        width: char === " " ? '1rem' : 'auto'
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char} {/* Added special handling for space */}
                                </motion.span>
                            ))}
                        </div>

                        {/* Typewriter Effect for RUNTIME TERRORS */}
                        <div style={{ marginTop: '1.5rem' }}>
                            {"RUNTIME TERRORS".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    style={{
                                        color: 'var(--accent-yellow)',
                                        display: 'inline-block'
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </div>
                    </motion.h1>

                    <p style={{
                        margin: '0 auto 4rem',
                        fontSize: '1.2rem',
                        color: 'var(--text-dim)',
                        lineHeight: 1.6,
                        maxWidth: '700px',
                        fontWeight: '500',
                        letterSpacing: '0.02em'
                    }}>
                        Initialize precision engineering protocols.
                        A high-velocity technical event designed for elite synchronization.
                        Master the black-box systems with advanced neural interfaces.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button
                            className="btn-asym"
                            onClick={() => navigate('/quiz')}
                            style={{ padding: '1.2rem 3rem' }}
                        >
                            INITIALIZE MISSION <Zap size={18} fill="currentColor" />
                        </button>

                        <button
                            className="btn-asym"
                            style={{
                                background: 'transparent',
                                color: 'white',
                                border: '1px solid #333',
                                padding: '1.2rem 3rem'
                            }}
                        >
                            ARCHIVE DATA
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Dashboard Section */}
            <DashboardSection />

            {/* Rules Section */}
            <div id="rules" style={{ scrollMarginTop: '100px' }}>
                <RulesSection />
            </div>

            {/* Industrial Footer */}
            <footer style={{
                padding: '6rem 2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                textAlign: 'center',
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(10px)'
            }}>
                <div className="logo" style={{ fontSize: '1.2rem', justifyContent: 'center', marginBottom: '2.5rem', color: 'white', fontWeight: '800' }}>
                    <Terminal size={22} color="var(--accent-yellow)" style={{ marginRight: '1rem' }} />
                    RUNTIME_TERRORS.EXE
                </div>
                <div style={{
                    display: 'flex',
                    gap: '4rem',
                    justifyContent: 'center',
                    marginBottom: '3rem'
                }}>
                    {['SYSTEM', 'NETWORK', 'UPLINK', 'STATUS'].map(link => (
                        <span key={link} style={{ fontSize: '0.65rem', fontWeight: '800', letterSpacing: '4px', color: '#333', cursor: 'pointer' }}>{link}</span>
                    ))}
                </div>
                <div style={{ color: '#222', fontSize: '0.6rem', fontWeight: '800', letterSpacing: '2px' }}>
                    © 2025 VOID_CORP // ENCRYPTION: AES-256 // SESSION: ACTIVE
                </div>
            </footer>
        </div>
    );
};

export default Home;
