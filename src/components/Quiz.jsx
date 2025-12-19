import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, FileJson, Zap, CheckCircle, Terminal as TerminalIcon, Layout, Eye, RefreshCw, ShoppingCart, Info } from 'lucide-react';
import '../index.css';

const ecommerceChallenge = {
    title: "E-commerce Product Page",
    description: "Your task is to build a modern, responsive product page for 'TechStore'. You need to complete the HTML structure, add professional CSS styling, and implement the 'Add to Cart' logic in JavaScript.",
    taskDetails: [
        "1. Set the correct ID for the cart counter in HTML.",
        "2. Add the 'Add to Cart' button ID.",
        "3. Use 'space-between' for navigation layout.",
        "4. Animate the product card with a 'transform' transition.",
        "5. Set the button cursor to 'pointer'.",
        "6. Connect the button click event in JavaScript.",
        "7. Update the cart display using 'textContent'."
    ],
    files: {
        html: {
            name: "index.html",
            icon: <Layout size={18} />,
            color: "#e34c26",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TechStore - Premium Gear</title>
</head>
<body>
    <header>
        <nav>
            <div class="logo">TechStore</div>
            <div class="cart">Cart: <span id="____">0</span></div>
        </nav>
    </header>

    <main>
        <div class="product-card">
            <div class="product-image"></div>
            <div class="product-info">
                <h2>Pro Wireless Headphones</h2>
                <p class="price">$299.99</p>
                <button id="____">Add to Cart</button>
            </div>
        </div>
    </main>
</body>
</html>`,
            blanks: [
                { index: 0, answer: "cart-count", points: 10 },
                { index: 1, answer: "add-btn", points: 10 }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={18} />,
            color: "#264de4",
            code: `body {
    font-family: 'Inter', sans-serif;
    background-color: #f4f7f6;
    margin: 0;
}

nav {
    display: flex;
    justify-content: ____; /* Hint: space between items */
    padding: 1rem 5%;
    background: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.product-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    width: 300px;
    margin: 2rem auto;
    transition: ____ 0.3s ease; /* Hint: animate changes */
}

.product-card:hover {
    transform: translateY(-10px);
}

button {
    width: 100%;
    padding: 12px;
    background: #2563eb;
    color: white;
    border: none;
    cursor: ____; /* Hint: pointer hand */
    font-weight: 600;
}`,
            blanks: [
                { index: 0, answer: "space-between", points: 15 },
                { index: 1, answer: "transform", points: 15 },
                { index: 2, answer: "pointer", points: 10 }
            ]
        },
        js: {
            name: "script.js",
            icon: <FileJson size={18} />,
            color: "#f7df1e",
            code: `let count = 0;
const cartDisplay = document.getElementById('cart-count');
const addBtn = document.getElementById('____');

if(addBtn) {
    addBtn.addEventListener('____', () => {
        count++;
        if(cartDisplay) {
            cartDisplay.____ = count;
        }
    });
}`,
            blanks: [
                { index: 0, answer: "add-btn", points: 15 },
                { index: 1, answer: "click", points: 10 },
                { index: 2, answer: "textContent", points: 15 }
            ]
        }
    }
};

const AutoSizeInput = ({ value, onChange, placeholder }) => {
    const spanRef = useRef(null);
    const [width, setWidth] = useState(40);

    useEffect(() => {
        if (spanRef.current) {
            setWidth(Math.max(40, spanRef.current.offsetWidth + 20));
        }
    }, [value, placeholder]);

    return (
        <span style={{ display: 'inline-flex', position: 'relative', verticalAlign: 'middle' }}>
            <span ref={spanRef} style={{ position: 'absolute', opacity: 0, whiteSpace: 'pre', fontFamily: 'inherit', fontSize: 'inherit' }}>
                {value || placeholder}
            </span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="code-input-field"
                style={{ width: `${width}px` }}
            />
        </span>
    );
};

const Quiz = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [userAnswers, setUserAnswers] = useState({});
    const [hasRun, setHasRun] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [previewSrc, setPreviewSrc] = useState('');

    const maxScore = Object.values(ecommerceChallenge.files).reduce((acc, file) => {
        return acc + file.blanks.reduce((sum, b) => sum + b.points, 0);
    }, 0);

    useEffect(() => {
        const getFilledCode = (fileKey) => {
            let code = ecommerceChallenge.files[fileKey].code;
            ecommerceChallenge.files[fileKey].blanks.forEach((blank, idx) => {
                const val = userAnswers[`${fileKey}-${idx}`] || "";
                code = code.replace("____", val);
            });
            return code;
        };

        const html = getFilledCode('html');
        const css = getFilledCode('css');
        const js = getFilledCode('js');

        const combinedSrc = `
            <html>
                <style>${css}</style>
                <body>
                    ${html.replace(/<\/?html>|<\/?head>|<\/?body>|<meta[^>]*>|<title>[^<]*<\/title>/g, '')}
                    <script>
                        try {
                            ${js}
                        } catch(e) { console.error(e); }
                    </script>
                </body>
            </html>
        `;
        setPreviewSrc(combinedSrc);
    }, [userAnswers]);

    const handleInputChange = (fileKey, blankIndex, value) => {
        setUserAnswers(prev => ({
            ...prev,
            [`${fileKey}-${blankIndex}`]: value
        }));
    };

    const runCode = () => {
        setHasRun(true);
    };

    const calculateFinalScore = () => {
        let score = 0;
        Object.entries(ecommerceChallenge.files).forEach(([fileKey, file]) => {
            file.blanks.forEach((blank, idx) => {
                const userAns = (userAnswers[`${fileKey}-${idx}`] || "").trim();
                if (userAns === blank.answer) {
                    score += blank.points;
                }
            });
        });
        setTotalScore(score);
        setShowSummary(true);
    };

    const renderCodeBlock = (fileKey, fileData) => {
        const parts = fileData.code.split('____');
        return (
            <div className="code-editor">
                {parts.map((part, index) => {
                    const isLast = index === parts.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <span style={{ whiteSpace: 'pre-wrap' }}>{part}</span>
                            {!isLast && (
                                <AutoSizeInput
                                    value={userAnswers[`${fileKey}-${index}`] || ""}
                                    onChange={(e) => handleInputChange(fileKey, index, e.target.value)}
                                    placeholder="..."
                                />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    };

    const getGrade = () => {
        const percentage = (totalScore / maxScore) * 100;
        if (percentage === 100) return 'S';
        if (percentage >= 80) return 'A';
        if (percentage >= 60) return 'B';
        if (percentage >= 40) return 'C';
        return 'F';
    };

    if (showSummary) {
        const grade = getGrade();
        return (
            <div className="summary-overlay">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="summary-card-modern">
                    <div className="card-top-accent"></div>
                    <div className="system-header">
                        <TerminalIcon size={40} color="#bc13fe" />
                        <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '2rem' }}>CHALLENGE COMPLETE</h2>
                    </div>
                    <div className="score-content">
                        <div className="grade-box">
                            <span className="grade-label">RANK</span>
                            <span className={`grade-value grade-${grade}`}>{grade}</span>
                        </div>
                        <div className="metrics">
                            <div className="metric-row">
                                <span style={{ color: '#94a3b8' }}>TOTAL POINTS</span>
                                <span className="score-nums">{totalScore} <span style={{ color: '#475569', fontSize: '1.2rem' }}>/ {maxScore}</span></span>
                            </div>
                            <div className="progress-bar-container">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(totalScore / maxScore) * 100}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="actions-footer">
                        <button className="primary-btn" onClick={() => window.location.href = '/'}>
                            RETURN TO BASE
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="ide-container">
            <div className="bg-animate"></div>
            <motion.div className="ide-window" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="ide-header">
                    <div className="window-controls">
                        <span className="dot close"></span>
                        <span className="dot minimize"></span>
                        <span className="dot expand"></span>
                    </div>
                    <div className="project-title">{ecommerceChallenge.title}</div>
                    <div className="actions">
                        <button className="run-btn" onClick={runCode}>
                            <Zap size={18} fill="currentColor" /> REVIEW CODE
                        </button>
                        <button className="finish-btn" onClick={calculateFinalScore} disabled={!hasRun}>
                            COMPLETE CHALLENGE <CheckCircle size={18} />
                        </button>
                    </div>
                </div>

                <div className="ide-body">
                    <div className="task-pane">
                        <h3><Info size={20} /> MISSION</h3>
                        <p>{ecommerceChallenge.description}</p>
                        <div style={{ marginTop: '2rem' }}>
                            <h4 style={{ color: '#ffffff', fontSize: '0.9rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Objectives:</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {ecommerceChallenge.taskDetails.map((task, i) => (
                                    <li key={i} style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ color: '#00f2ff' }}>▹</span> {task}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="ide-pane editor-pane">
                        <div className="file-tabs">
                            {Object.entries(ecommerceChallenge.files).map(([key, file]) => (
                                <button key={key} className={`file-tab ${activeTab === key ? 'active' : ''}`} onClick={() => setActiveTab(key)}>
                                    <span style={{ color: file.color }}>{file.icon}</span>
                                    {file.name}
                                </button>
                            ))}
                        </div>
                        <div className="editor-area">
                            <div className="editor-numbers">
                                {Array.from({ length: 25 }, (_, i) => i + 1).map(n => <div key={n}>{n}</div>)}
                            </div>
                            <div className="editor-content">
                                {renderCodeBlock(activeTab, ecommerceChallenge.files[activeTab])}
                            </div>
                        </div>
                    </div>
                    <div className="ide-pane preview-pane">
                        <div className="preview-header"><Eye size={18} /> LIVE PREVIEW</div>
                        <div className="preview-content">
                            <iframe title="Live Preview" srcDoc={previewSrc} style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Quiz;
