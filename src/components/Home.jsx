import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Zap, Trophy, ArrowRight, Sparkles, Terminal, Cpu, Globe } from 'lucide-react';

const Home = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: <Cpu size={32} />,
            title: 'Cybernetic Logic',
            desc: 'Master complex frontend architectures with our interactive neural-link challenges.',
            color: '#ff007f'
        },
        {
            icon: <Zap size={32} />,
            title: 'Instant Sync',
            desc: 'Real-time code rendering with zero latency. See your changes as they happen.',
            color: '#00f2ff'
        },
        {
            icon: <Globe size={32} />,
            title: 'Global Ranking',
            desc: 'Compete with developers across the grid and climb the leaderboard.',
            color: '#bc13fe'
        }
    ];

    return (
        <div className="home-root" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#020205' }}>
            <div className="bg-animate"></div>

            {/* Grid Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 0
            }}></div>

            {/* Hero Section */}
            <section style={{ padding: '10rem 2rem 6rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1.5rem',
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '20px',
                            color: '#00f2ff',
                            fontSize: '0.9rem',
                            fontWeight: '700',
                            marginBottom: '3rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                        }}>
                            <Sparkles size={18} />
                            <span>System Update: E-commerce Mission Live</span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 10vw, 6.5rem)',
                            fontWeight: '900',
                            color: '#ffffff',
                            marginBottom: '2rem',
                            letterSpacing: '-4px',
                            lineHeight: 0.9,
                            fontFamily: 'Space Grotesk, sans-serif'
                        }}>
                            WELCOME TO <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #ff007f 0%, #bc13fe 50%, #00f2ff 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                filter: 'drop-shadow(0 0 30px rgba(188, 19, 254, 0.5))'
                            }}>NEURAL_LINK.</span>
                        </h1>

                        <p style={{
                            fontSize: '1.4rem',
                            color: '#94a3b8',
                            marginBottom: '4rem',
                            maxWidth: '800px',
                            margin: '0 auto 4rem',
                            lineHeight: '1.6',
                            fontWeight: '400'
                        }}>
                            The ultimate neural-link training ground for elite frontend developers. <br />
                            Bridge the gap between theory and cybernetic implementation.
                        </p>

                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <motion.button
                                whileHover={{ scale: 1.1, boxShadow: '0 0 50px rgba(188, 19, 254, 0.6)' }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => navigate('/quiz')}
                                style={{
                                    background: 'linear-gradient(135deg, #ff007f 0%, #bc13fe 100%)',
                                    color: 'white',
                                    padding: '1.5rem 3.5rem',
                                    borderRadius: '24px',
                                    fontSize: '1.25rem',
                                    fontWeight: '900',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px'
                                }}
                            >
                                START MISSION <ArrowRight size={24} />
                            </motion.button>

                            <motion.button
                                whileHover={{ background: 'rgba(255, 255, 255, 0.1)', borderColor: '#00f2ff' }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.03)',
                                    color: 'white',
                                    padding: '1.5rem 3.5rem',
                                    borderRadius: '24px',
                                    fontSize: '1.25rem',
                                    fontWeight: '700',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px'
                                }}
                            >
                                VIEW GRID
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section style={{ padding: '6rem 2rem 10rem', position: 'relative', zIndex: 1 }}>
                <div className="container" style={{ maxWidth: '1300px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -15, background: 'rgba(255, 255, 255, 0.05)', borderColor: f.color }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    padding: '4rem 3rem',
                                    borderRadius: '32px',
                                    border: '1px solid rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(20px)',
                                    transition: 'all 0.4s ease',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '24px',
                                    background: `${f.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: f.color,
                                    marginBottom: '2rem',
                                    boxShadow: `0 0 30px ${f.color}20`
                                }}>
                                    {f.icon}
                                </div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: '800',
                                    color: '#ffffff',
                                    marginBottom: '1.25rem',
                                    fontFamily: 'Space Grotesk, sans-serif'
                                }}>
                                    {f.title}
                                </h3>
                                <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '1.1rem' }}>{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
