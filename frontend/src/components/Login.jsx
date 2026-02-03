import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Terminal, User, Lock, LogIn } from 'lucide-react';

const Login = ({ onLogin }) => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        collegeName: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Enforce fixed password
        if (formData.password !== 'UserCitpage@202610') {
            setError('Invalid access password. Use the provided code.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
            const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';

            const res = await fetch(`${BACKEND_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                const data = await res.json();

                if (isLogin) {
                    if (!data.token) {
                        setError('Login succeeded but no token was returned by the server.');
                        return;
                    }

                    onLogin({
                        id: data.user?.id || data.user?._id,
                        name: data.user?.username || formData.username,
                        role: data.user?.role,
                        collegeName: data.user?.collegeName,
                        token: data.token
                    });
                    navigate('/');
                } else {
                    // Registration succeeded; log the user in automatically
                    onLogin({
                        id: data.user?.id || data.user?._id,
                        name: data.user?.username || formData.username,
                        role: data.user?.role,
                        collegeName: data.user?.collegeName,
                        token: data.token
                    });
                    navigate('/');
                }
            } else {
                const errorData = await res.json();
                setError(errorData.msg || errorData.message || 'Failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Network error. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    const inputStyle = {
        width: '100%',
        background: 'rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        padding: '1rem 1rem 1rem 3rem',
        color: 'white',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'all 0.3s ease',
        fontFamily: 'var(--font-body)'
    };

    const iconStyle = {
        position: 'absolute',
        top: '50%',
        left: '1rem',
        transform: 'translateY(-50%)',
        color: 'var(--accent-yellow)',
        opacity: 0.8
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Effects */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(197, 160, 89, 0.1) 0%, transparent 60%)',
                zIndex: 0
            }} />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '3rem',
                    background: 'rgba(20, 20, 20, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '24px',
                    boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    margin: '1rem'
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <div style={{
                        display: 'inline-flex',
                        padding: '1rem',
                        background: 'rgba(197, 160, 89, 0.1)',
                        borderRadius: '16px',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(197, 160, 89, 0.2)'
                    }}>
                        <Terminal size={32} color="var(--magic-gold)" />
                    </div>
                    <h1 style={{
                        fontSize: '2rem',
                        fontWeight: '800',
                        color: 'white',
                        marginBottom: '0.5rem',
                        letterSpacing: '2px',
                        fontFamily: 'var(--font-display)'
                    }}>
                        {isLogin ? 'WIZARD LOGIN' : 'WIZARD REGISTRATION'}
                    </h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontFamily: 'var(--font-mission)' }}>
                        {isLogin ? 'Access the magic terminal.' : 'Create your account.'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <User size={18} style={iconStyle} />
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={iconStyle} />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div style={{ position: 'relative' }}>
                            <div style={iconStyle}><Terminal size={18} /></div>
                            <input
                                type="text"
                                name="collegeName"
                                placeholder="College / Institution Name"
                                value={formData.collegeName}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                    )}

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
                        disabled={loading}
                        className="btn-asym"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            justifyContent: 'center',
                            fontSize: '0.9rem',
                            padding: '1rem',
                            background: 'var(--magic-gold)',
                            color: '#0a0b1e',
                            opacity: loading ? 0.7 : 1,
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'LOADING...' : (isLogin ? <>LOGIN <LogIn size={18} /></> : <>REGISTER <LogIn size={18} /></>)}
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        onClick={() => onLogin({ name: 'Guest Wizard', loggedIn: true, role: 'player' })}
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            fontSize: '0.8rem',
                            padding: '0.8rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(197, 160, 89, 0.3)',
                            color: 'var(--magic-gold)',
                            cursor: 'pointer',
                            marginTop: '0.5rem',
                            borderRadius: '4px',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            fontWeight: '700'
                        }}
                    >
                        PREVIEW AS GUEST
                    </motion.button>

                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                            {isLogin ? "Don't have an account? " : 'Already have an account? '}
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--magic-gold)',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    fontSize: '0.85rem',
                                    fontWeight: '600'
                                }}
                            >
                                {isLogin ? 'Register here' : 'Login here'}
                            </button>
                        </p>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
