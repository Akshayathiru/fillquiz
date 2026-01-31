import React from 'react';
import { motion } from 'framer-motion';

const RuleCard = ({ text, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{
            y: -15,
            boxShadow: '0 20px 50px -10px rgba(197, 160, 89, 0.3), 0 0 30px rgba(197, 160, 89, 0.2)',
            borderColor: 'rgba(197, 160, 89, 0.5)'
        }}
        style={{
            background: 'rgba(20, 20, 20, 0.4)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            padding: '2.5rem',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            position: 'relative',
            cursor: 'default'
        }}
    >
        <div style={{
            position: 'absolute',
            top: '1.5rem',
            left: '1.5rem',
            fontSize: '0.7rem',
            fontWeight: '900',
            color: 'var(--magic-gold)',
            opacity: 0.3,
            fontFamily: 'var(--font-display)'
        }}>
            0{index + 1}
        </div>
        <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: '500',
            fontFamily: 'var(--font-mission)'
        }}>
            {text}
        </p>
    </motion.div>
);

const RulesSection = () => {
    const rules = [
        "Wizards will be given source scripts with missing or blank incantations.",
        "Task is to fill in the blanks with correct syntax and logic so the magic works correctly.",
        "Evaluation criteria: Curses (code fails), Hexes (logical failure), Jinxes (warnings).",
        "The most powerful sorcerer wins the first prize. Duration: 20 minutes."
    ];

    return (
        <section style={{
            display: 'flex',
            flexWrap: 'wrap',
            padding: '8rem 4rem',
            maxWidth: '1400px',
            margin: '0 auto',
            gap: '4rem'
        }}>
            {/* Left Side: Sticky Heading */}
            <div style={{
                flex: '1 1 400px',
                position: 'sticky',
                top: '150px',
                height: 'fit-content'
            }}>
                <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'var(--magic-gold)',
                    marginBottom: '2rem'
                }} />
                <h2 style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: '900',
                    lineHeight: '1',
                    textTransform: 'uppercase',
                    color: 'white',
                    marginBottom: '2rem',
                    fontFamily: 'var(--font-heading)'
                }}>
                    ANCIENT<br />
                    <span style={{ color: 'var(--magic-gold)' }}>PROTOCOLS</span>
                </h2>
                <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', maxWidth: '350px', fontFamily: 'var(--font-mission)' }}>
                    Follow the magical guidelines to ensure maximum concentration during the event.
                </p>
            </div>

            {/* Right Side: Rules Grid */}
            <div style={{
                flex: '1 1 600px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                {rules.map((rule, idx) => (
                    <RuleCard key={idx} text={rule} index={idx} />
                ))}
            </div>
        </section>
    );
};

export default RulesSection;
