import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Trophy, Clock, Users, RefreshCw } from 'lucide-react';

const AdminDashboard = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(false);

    const ADMIN_PASSWORD = 'abishekTheLegend';

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError('');
            fetchScores();
        } else {
            setError('Invalid admin password');
            setPassword('');
        }
    };

    const fetchScores = async () => {
        setLoading(true);
        try {
            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
            const token = localStorage.getItem('fillquiz_token');
            
            const res = await fetch(`${BACKEND_URL}/api/scores`, {
                headers: {
                    'Authorization': token
                }
            });

            if (res.ok) {
                const data = await res.json();
                setScores(data);
            } else {
                setError('Failed to fetch scores. Please login first.');
            }
        } catch (err) {
            console.error('Error fetching scores:', err);
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (!isAuthenticated) {
        return (
            <div style={{
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{
                        width: '100%',
                        maxWidth: '450px',
                        padding: '3rem',
                        background: 'rgba(20, 20, 20, 0.8)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(197, 160, 89, 0.2)',
                        borderRadius: '16px',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            display: 'inline-flex',
                            padding: '1rem',
                            background: 'rgba(197, 160, 89, 0.1)',
                            borderRadius: '12px',
                            marginBottom: '1.5rem',
                            border: '1px solid rgba(197, 160, 89, 0.3)'
                        }}>
                            <Shield size={32} color="var(--magic-gold)" />
                        </div>
                        <h1 style={{
                            fontSize: '1.8rem',
                            fontWeight: '800',
                            color: 'white',
                            marginBottom: '0.5rem',
                            letterSpacing: '2px',
                            fontFamily: 'var(--font-display)'
                        }}>
                            ADMIN ACCESS
                        </h1>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                            Enter admin password to view leaderboard
                        </p>
                    </div>

                    <form onSubmit={handlePasswordSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{
                                position: 'absolute',
                                top: '50%',
                                left: '1rem',
                                transform: 'translateY(-50%)',
                                color: 'var(--accent-yellow)',
                                opacity: 0.8
                            }} />
                            <input
                                type="password"
                                placeholder="Admin Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    width: '100%',
                                    background: 'rgba(0, 0, 0, 0.3)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                    borderRadius: '8px',
                                    padding: '1rem 1rem 1rem 3rem',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)'
                                }}
                                required
                            />
                        </div>

                        {error && (
                            <div style={{
                                background: 'rgba(255, 0, 0, 0.1)',
                                border: '1px solid rgba(255, 0, 0, 0.3)',
                                color: '#ff6b6b',
                                padding: '1rem',
                                borderRadius: '8px',
                                fontSize: '0.9rem'
                            }}>
                                {error}
                            </div>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="btn-asym"
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                fontSize: '0.9rem',
                                padding: '1rem',
                                background: 'var(--magic-gold)',
                                color: '#0a0b1e'
                            }}
                        >
                            ACCESS DASHBOARD
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        );
    }

    return (
        <div style={{
            minHeight: 'calc(100vh - 80px)',
            padding: '3rem 2rem',
            maxWidth: '1400px',
            margin: '0 auto'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                    background: 'rgba(20, 20, 20, 0.8)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    borderRadius: '16px',
                    padding: '2rem',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                }}
            >
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    paddingBottom: '1.5rem',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.2)'
                }}>
                    <div>
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            color: 'white',
                            marginBottom: '0.5rem',
                            letterSpacing: '2px',
                            fontFamily: 'var(--font-display)'
                        }}>
                            ADMIN LEADERBOARD
                        </h1>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                            Total Players: {scores.length}
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={fetchScores}
                        disabled={loading}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            background: 'rgba(197, 160, 89, 0.1)',
                            border: '1px solid rgba(197, 160, 89, 0.3)',
                            color: 'var(--magic-gold)',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '8px',
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '1px',
                            opacity: loading ? 0.6 : 1
                        }}
                    >
                        <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                        REFRESH
                    </motion.button>
                </div>

                {/* Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1rem',
                    marginBottom: '2rem'
                }}>
                    {[
                        { icon: <Users size={20} />, label: 'Total Players', value: scores.length },
                        { icon: <Trophy size={20} />, label: 'Highest Score', value: scores[0]?.score || 0 },
                        { icon: <Clock size={20} />, label: 'Best Time', value: formatTime(scores[0]?.timeSpent || 0) }
                    ].map((stat, i) => (
                        <div key={i} style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            border: '1px solid rgba(197, 160, 89, 0.2)',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <div style={{
                                background: 'rgba(197, 160, 89, 0.1)',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                color: 'var(--magic-gold)'
                            }}>
                                {stat.icon}
                            </div>
                            <div>
                                <div style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                                    {stat.label}
                                </div>
                                <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '800' }}>
                                    {stat.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scores Table */}
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
                        Loading scores...
                    </div>
                ) : scores.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dim)' }}>
                        No scores yet
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'separate',
                            borderSpacing: '0 0.5rem'
                        }}>
                            <thead>
                                <tr style={{ color: 'var(--magic-gold)', fontSize: '0.85rem', textAlign: 'left' }}>
                                    <th style={{ padding: '1rem', fontWeight: '700', letterSpacing: '1px' }}>RANK</th>
                                    <th style={{ padding: '1rem', fontWeight: '700', letterSpacing: '1px' }}>USERNAME</th>
                                    <th style={{ padding: '1rem', fontWeight: '700', letterSpacing: '1px' }}>COLLEGE</th>
                                    <th style={{ padding: '1rem', fontWeight: '700', letterSpacing: '1px', textAlign: 'center' }}>SCORE</th>
                                    <th style={{ padding: '1rem', fontWeight: '700', letterSpacing: '1px', textAlign: 'center' }}>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scores.map((score, index) => (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        style={{
                                            background: index < 3 ? 'rgba(197, 160, 89, 0.05)' : 'rgba(0, 0, 0, 0.2)',
                                            border: index < 3 ? '1px solid rgba(197, 160, 89, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)'
                                        }}
                                    >
                                        <td style={{
                                            padding: '1.2rem 1rem',
                                            borderTopLeftRadius: '8px',
                                            borderBottomLeftRadius: '8px'
                                        }}>
                                            <div style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: '32px',
                                                height: '32px',
                                                background: index < 3 ? 'var(--magic-gold)' : 'rgba(255, 255, 255, 0.05)',
                                                color: index < 3 ? '#0a0b1e' : 'white',
                                                borderRadius: '6px',
                                                fontWeight: '800',
                                                fontSize: '0.9rem'
                                            }}>
                                                {score.rank}
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.2rem 1rem', color: 'white', fontWeight: '600' }}>
                                            {score.username}
                                        </td>
                                        <td style={{ padding: '1.2rem 1rem', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                            {score.collegeName}
                                        </td>
                                        <td style={{ padding: '1.2rem 1rem', textAlign: 'center' }}>
                                            <span style={{
                                                display: 'inline-block',
                                                background: 'rgba(0, 255, 100, 0.1)',
                                                border: '1px solid rgba(0, 255, 100, 0.3)',
                                                color: '#00ff64',
                                                padding: '0.4rem 0.8rem',
                                                borderRadius: '6px',
                                                fontWeight: '800',
                                                fontSize: '0.9rem'
                                            }}>
                                                {score.score}
                                            </span>
                                        </td>
                                        <td style={{
                                            padding: '1.2rem 1rem',
                                            textAlign: 'center',
                                            color: 'var(--magic-gold)',
                                            fontWeight: '700',
                                            fontSize: '0.9rem',
                                            borderTopRightRadius: '8px',
                                            borderBottomRightRadius: '8px'
                                        }}>
                                            {formatTime(score.timeSpent)}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default AdminDashboard;
