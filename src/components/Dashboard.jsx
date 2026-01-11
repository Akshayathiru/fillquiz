import React from 'react';
import { motion } from 'framer-motion';

const DashboardCard = ({ title, value, accentColor }) => (
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
        <div style={{
            fontSize: '2.5rem',
            fontWeight: '900',
            color: 'var(--magic-gold)',
            fontFamily: 'var(--font-heading)'
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
                    title="Magical Intensity"
                    value="HIGH"
                    accentColor="var(--magic-gold)"
                />
                <DashboardCard
                    title="Error Types"
                    value="CURSE • HEX • JINX"
                    accentColor="var(--magic-gold)"
                />
                <DashboardCard
                    title="Time Limit"
                    value="20 MIN"
                    accentColor="var(--text-main)"
                />
            </div>
        </section>
    );
};

export default DashboardSection;
