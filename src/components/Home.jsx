
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="hero-container">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <h1 className="hero-title">Welcome to<br />Runtime Terror</h1>
            </motion.div>

            <motion.p
                style={{ fontSize: '1.5rem', color: '#a3a3a3', maxWidth: '600px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Experience the future of code.
            </motion.p>

            <motion.button
                className="hero-btn"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/quiz')}
                style={{ zIndex: 1000, position: 'relative' }}
            >
                Let's Get Started
            </motion.button>
        </main>
    );
};

export default Home;
