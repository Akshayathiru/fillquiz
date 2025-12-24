import React from 'react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, accentColor }) => (
    <motion.div
        whileHover={{
            scale: 1.05,
            y: -15,
            boxShadow: `0 20px 40px -10px ${accentColor}66, 0 0 20px ${accentColor}88, inset 0 0 20px ${accentColor}22`
        }}
        style={{
            background: 'rgba(15, 15, 15, 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '16px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: `0 10px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px ${accentColor}10`,
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
            background: accentColor
        }} />
        <span style={{
            fontSize: '0.75rem',
            fontWeight: '700',
            letterSpacing: '2px',
            color: 'rgba(255, 255, 255, 0.5)',
            textTransform: 'uppercase'
        }}>
            {title}
        </span>
        <div style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            color: accentColor
        }}>
            {value}
        </div>
    </motion.div >
);

const DashboardSection = () => {
    return (
        <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                <DashboardCard
                    title="Challenge Intensity"
                    value="HIGH"
                    accentColor="#FFD700"
                />
                <DashboardCard
                    title="Error Types"
                    value="CRITICAL • MAJOR • MINOR"
                    accentColor="#007BFF"
                />
                <DashboardCard
                    title="Time Limit"
                    value="25 MIN"
                    accentColor="#ffffff"
                />
            </div>
        </section>
    );
};

export default DashboardSection;
