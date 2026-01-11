import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, User, Book, Hash, School, LogIn } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        name: '',
        college: '',
        year: '',
        course: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (Object.values(formData).every(val => val.trim() !== '')) {
            onLogin(formData);
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
                        WIZARD VERIFICATION
                    </h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontFamily: 'var(--font-mission)' }}>
                        Enter your scrolls to access the magic terminal.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <User size={18} style={iconStyle} />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <School size={18} style={iconStyle} />
                        <input
                            type="text"
                            name="college"
                            placeholder="College Name"
                            value={formData.college}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1.2rem' }}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <Hash size={18} style={iconStyle} />
                            <input
                                type="text"
                                name="year"
                                placeholder="Year"
                                value={formData.year}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <Book size={18} style={iconStyle} />
                            <input
                                type="text"
                                name="course"
                                placeholder="Course"
                                value={formData.course}
                                onChange={handleChange}
                                style={inputStyle}
                                required
                            />
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Hash size={18} style={iconStyle} />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="btn-asym"
                        style={{
                            marginTop: '1rem',
                            width: '100%',
                            justifyContent: 'center',
                            fontSize: '0.9rem',
                            padding: '1rem',
                            background: 'var(--magic-gold)',
                            color: '#0a0b1e'
                        }}
                    >
                        ENTER CHAMBER <LogIn size={18} />
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default Login;
