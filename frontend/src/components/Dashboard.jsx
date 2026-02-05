import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Zap } from 'lucide-react';

const DashboardCard = ({ title, value, icon: Icon }) => (
    <motion.div
        whileHover={{
            y: -15,
            boxShadow: `0 20px 40px -10px rgba(197, 160, 89, 0.4), 0 0 20px rgba(197, 160, 89, 0.2)`,
            borderColor: 'rgba(197, 160, 89, 0.5)'
        }}
        style={{
            background: 'rgba(15, 15, 15, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5)`,
            position: 'relative',
            overflow: 'hidden'
        }}
    >
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            background: 'var(--magic-gold)'
        }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '2px',
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-display)'
            }}>
                {title}
            </span>
            {Icon && <Icon size={16} color="var(--magic-gold)" opacity={0.5} />}
        </div>
        <div style={{
            fontSize: '1.8rem',
            fontWeight: '900',
            color: 'var(--magic-gold)',
            fontFamily: 'var(--font-heading)'
        }}>
            {value}
        </div>
    </motion.div >
);

const DashboardSection = () => {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                let BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
                if (!BACKEND_URL.startsWith('http')) BACKEND_URL = `https://${BACKEND_URL}`;
                const res = await fetch(`${BACKEND_URL}/api/scores/leaderboard`);
                if (res.ok) {
                    const data = await res.json();
                    setLeaderboard(data);
                }
            } catch (err) {
                console.error("Failed to fetch leaderboard:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchLeaderboard();
    }, []);

    return (
        <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '4rem'
            }}>
                <DashboardCard
                    title="Ministry Status"
                    value="ACTIVE"
                    icon={Zap}
                />
                <DashboardCard
                    title="Best Magical Score"
                    value={leaderboard.length > 0 ? Math.max(...leaderboard.map(item => item.highestScore)) : '0'}
                    icon={Trophy}
                />
                <DashboardCard
                    title="Evaluation Window"
                    value="25 MIN"
                    icon={Clock}
                />
            </div>

            <div style={{
                background: 'rgba(10, 10, 10, 0.4)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: '1px solid rgba(197, 160, 89, 0.1)',
                padding: '3rem',
                marginTop: '4rem'
            }}>
                <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '2rem',
                    textAlign: 'center',
                    letterSpacing: '4px'
                }}>WIZARD_LEADERBOARD</h3>

                {loading ? (
                    <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>COMMUNING WITH THE ARCHIVES...</div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {leaderboard.length === 0 ? (
                            <div style={{ textAlign: 'center', color: 'var(--text-dim)' }}>NO RECORDS FOUND. BE THE FIRST TO REGISTER.</div>
                        ) : (
                            leaderboard.map((user, index) => (
                                <motion.div
                                    key={user._id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '1.5rem',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)',
                                        borderRadius: '12px'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                        <span style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '900',
                                            color: index < 3 ? 'var(--magic-gold)' : 'rgba(255,255,255,0.2)',
                                            minWidth: '2rem',
                                            fontFamily: 'var(--font-heading)'
                                        }}>#{index + 1}</span>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ color: 'white', fontSize: '1rem', fontWeight: '700', letterSpacing: '1px' }}>{user.username}</span>
                                            <span style={{ color: '#555', fontSize: '0.7rem', textTransform: 'uppercase' }}>Wizard Registry ID: {user._id.slice(-6)}</span>
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1.2rem', fontWeight: '900', color: 'var(--magic-gold)', fontFamily: 'var(--font-heading)' }}>{user.highestScore}</div>
                                        <div style={{ fontSize: '0.6rem', color: '#444' }}>MANA COLLECTED</div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default DashboardSection;
