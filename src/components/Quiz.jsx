
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure framer-motion is installed
import '../index.css'; // Or a specific Quiz.css

const questions = [
    {
        id: 1,
        text: "Question 1: What represents the 'structure' of a web page?",
        options: ["CSS", "HTML", "JavaScript", "Python"]
    },
    {
        id: 2,
        text: "Question 2: Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"]
    },
    {
        id: 3,
        text: "Question 3: Which is a JavaScript Framework?",
        options: ["React", "Laravel", "Django", "Flask"]
    },
    {
        id: 4,
        text: "Question 4: What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"]
    },
    {
        id: 5,
        text: "Question 5: How do you declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"]
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            alert("Quiz Completed!");
            // Navigate to results or reset
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const question = questions[currentQuestion];

    return (
        <div className="quiz-container" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            color: '#fff'
        }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', maxWidth: '800px', padding: '2rem', textAlign: 'center' }}
                >
                    <h2 style={{
                        fontFamily: 'Chakra Petch, sans-serif',
                        fontSize: '3rem',
                        marginBottom: '2rem',
                        textShadow: '0 0 10px #00f3ff'
                    }}>
                        {question.text}
                    </h2>

                    <div className="options-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '1.5rem',
                        marginTop: '2rem'
                    }}>
                        {question.options.map((option, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.05, backgroundColor: '#00f3ff', color: '#000' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '1.5rem',
                                    fontSize: '1.2rem',
                                    fontFamily: 'Inter, sans-serif',
                                    background: 'rgba(2, 11, 20, 0.8)',
                                    border: '1px solid #00f3ff',
                                    color: '#fff',
                                    cursor: 'pointer',
                                    clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                                }}
                            >
                                {option}
                            </motion.button>
                        ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '3rem' }}>
                        <motion.button
                            onClick={handlePrev}
                            disabled={currentQuestion === 0}
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: currentQuestion === 0 ? 0.5 : 1 }}
                            whileHover={currentQuestion !== 0 ? { scale: 1.05 } : {}}
                            whileTap={currentQuestion !== 0 ? { scale: 0.95 } : {}}
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.2rem',
                                fontFamily: 'Chakra Petch, sans-serif',
                                background: 'transparent',
                                border: '1px solid #00f3ff',
                                color: '#00f3ff',
                                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                                clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)'
                            }}
                        >
                            Previous
                        </motion.button>

                        <motion.button
                            onClick={handleNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.2rem',
                                fontFamily: 'Chakra Petch, sans-serif',
                                background: '#ff0055',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                                clipPath: 'polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)'
                            }}
                        >
                            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Quiz;
