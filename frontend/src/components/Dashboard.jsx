import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Zap } from 'lucide-react';

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
                    title="Evaluation Window"
                    value="25 MIN"
                    icon={Clock}
                />
            </div>

            {/* Leaderboard concept completely removed from public view */}
        </section>
    );
};

export default DashboardSection;
