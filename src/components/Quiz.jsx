import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode, FileJson, Zap, CheckCircle,
    Layout, Eye, Info, Play, ChevronRight,
    Terminal, Settings, Sparkles, Rocket, Command, Cpu, Activity
} from 'lucide-react';
import '../index.css';

const ecommerceChallenge = {
    title: "RUNTIME TERRORS // SPRINT-02 [HARD]",
    description: "Initialize the Cryptographic Sequence Generator. Your objective is to patch the sequence algorithm, enable the matrix grid layout, and ensure the decryption visualizer functions correctly.",
    taskDetails: [
        "1.  Initialize the Sequence Algorithm: `Array.from`.",
        "2.  Map ASCII codes to characters: `String.fromCharCode`.",
        "3.  Filter for valid 'Alpha' signals (A-Z).",
        "4.  CSS: Implement `grid-template-columns` for the matrix.",
        "5.  CSS: Apply `backdrop-filter` for the glass effect.",
        "6.  JS: Bind the `generate` action to the primary trigger.",
        "7.  JS: Inject the decoded sequence into the DOM."
    ],
    files: {
        html: {
            name: "index.html",
            icon: <Layout size={14} />,
            color: "var(--accent-yellow)",
            code: `<!DOCTYPE html>
<html lang="en">
<body>
    <div class="cyber-container">
        <header>
            <div class="glitch" data-glitch="DECRYPT_V1">DECRYPT_V1</div>
            <div class="status-indicator">SYSTEM: <span id="sys-status">OFFLINE</span></div>
        </header>

        <main>
            <div class="matrix-grid" id="____"></div>
            
            <div class="controls">
                <div class="input-group">
                    <label>SEED_KEY:</label>
                    <input type="text" value="XP-99" readonly />
                </div>
                <button id="____" class="cyber-btn">
                    <span class="btn-text">INITIATE SEQUENCE</span>
                    <span class="btn-glitch"></span>
                </button>
            </div>
        </main>
    </div>
</body>
</html>`,
            blanks: [
                { index: 0, answer: "grid-output", points: 15 },
                { index: 1, answer: "gen-btn", points: 15 }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={14} />,
            color: "var(--accent-blue)",
            code: `body {
    background: #000;
    font-family: 'JetBrains Mono', monospace;
    color: #0f0;
    overflow: hidden;
    position: relative;
}

.cyber-overlay {
    position: absolute;
    inset: 0;
    background: 
        linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
        linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    background-size: 100% 2px, 3px 100%;
    pointer-events: none;
    z-index: 10;
}

.cyber-container {
    padding: 2rem;
    height: 100vh;
    background: 
        radial-gradient(circle at 50% 50%, #111 0%, #000 120%),
        repeating-linear-gradient(0deg, transparent, transparent 1px, #0f0 1px, transparent 2px);
    background-size: 100% 100%, 100% 40px;
}

.matrix-grid {
    display: grid;
    grid-template-columns: ____;
    gap: 4px;
    margin: 2rem 0;
    min-height: 200px;
    padding: 10px;
    border: 1px solid #333;
    background: rgba(0, 20, 0, 0.2);
    box-shadow: inset 0 0 20px rgba(0, 50, 0, 0.5);
    ____: blur(5px);
}

.matrix-cell {
    background: rgba(0, 40, 0, 0.4);
    color: #0f0;
    padding: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    border: 1px solid #0f0;
    text-shadow: 0 0 5px #0f0;
    animation: flicker 2s infinite;
}

.cyber-btn {
    background: #000;
    border: 1px solid #0f0;
    color: #0f0;
    padding: 1.5rem 3rem;
    font-weight: 900;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s;
    text-transform: uppercase;
    box-shadow: 0 0 10px rgba(0, 255, 0, 0.2);
}

.cyber-btn:hover {
    background: #0f0;
    color: #000;
    box-shadow: 0 0 30px #0f0;
}

@keyframes flicker {
    0% { opacity: 0.8; }
    5%, 10% { opacity: 0.4; }
    15% { opacity: 1; }
    100% { opacity: 1; }
}`,
            blanks: [
                { index: 0, answer: "repeat(auto-fill, minmax(60px, 1fr))", points: 20 },
                { index: 1, answer: "backdrop-filter", points: 15 }
            ]
        },
        js: {
            name: "main.js",
            icon: <FileJson size={14} />,
            color: "var(--accent-blue)",
            code: `const btn = document.getElementById('gen-btn');
const output = document.getElementById('grid-output');
const statusSpan = document.getElementById('sys-status');

if(btn) {
    btn.addEventListener('click', () => {
        statusSpan.innerText = "COMPUTING...";
        statusSpan.style.color = "yellow";
        
        // 1. Generate Array of 20 random numbers
        // 2. Convert to ASCII chars
        // 3. Filter only Uppercase Letters
        
        const chars = Array.____({length: 20}, () => Math.floor(Math.random() * (90 - 65 + 1)) + 65)
            .map(code => String.____(code))
            .filter(char => /[A-Z]/.test(char));
            
        setTimeout(() => {
            output.innerHTML = "";
            chars.forEach(char => {
                const cell = document.createElement('div');
                cell.className = 'matrix-cell';
                cell.____ = char;
                output.appendChild(cell);
            });
            statusSpan.innerText = "C_LOCKED";
            statusSpan.style.color = "#0f0";
        }, 500);
    });
}`,
            blanks: [
                { index: 0, answer: "from", points: 20 },
                { index: 1, answer: "fromCharCode", points: 20 },
                { index: 2, answer: "innerText", points: 10 }
            ]
        }
    }
};

const AutoSizeInput = ({ value, onChange, placeholder }) => {
    const spanRef = useRef(null);
    const [width, setWidth] = useState(35);

    useEffect(() => {
        if (spanRef.current) {
            setWidth(Math.max(35, spanRef.current.offsetWidth + 12));
        }
    }, [value, placeholder]);

    return (
        <span style={{ display: 'inline-flex', position: 'relative', verticalAlign: 'middle', margin: '0 4px' }}>
            <span ref={spanRef} style={{ position: 'absolute', opacity: 0, whiteSpace: 'pre', fontFamily: 'inherit', fontSize: 'inherit' }}>
                {value || placeholder}
            </span>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="code-input-field"
                style={{
                    width: `${width}px`,
                    background: 'rgba(255, 234, 0, 0.03)',
                    border: '1px solid rgba(255, 234, 0, 0.15)',
                    borderRadius: '4px',
                    padding: '0 8px',
                    fontSize: '0.9rem',
                    color: 'var(--accent-yellow)',
                    transition: 'all 0.3s ease'
                }}
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
            <div className="code-editor" style={{ color: '#888', fontVariantLigatures: 'none' }}>
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
        return 'F';
    };

    if (showSummary) {
        return (
            <div className="summary-overlay" style={{ background: 'rgba(0,0,0,0.95)' }}>
                <motion.div
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="summary-card"
                    style={{
                        background: '#080808',
                        border: '1px solid #1a1a1a',
                        borderRadius: '8px',
                        padding: '5rem',
                        textAlign: 'center',
                        maxWidth: '600px',
                        boxShadow: '0 40px 80px rgba(0,0,0,0.8)'
                    }}
                >
                    <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '8rem',
                        fontWeight: '800',
                        color: 'var(--accent-yellow)',
                        marginBottom: '1rem',
                        lineHeight: 1
                    }}>{getGrade()}</div>
                    <h2 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '1.5rem', color: '#fff', letterSpacing: '4px', textTransform: 'uppercase' }}>Mission Result</h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1rem', marginBottom: '3.5rem', lineHeight: 1.6 }}>
                        Synchronization complete. Performance metrics evaluated.<br />
                        Neural throughput: <strong style={{ color: 'var(--accent-yellow)' }}>{totalScore}</strong> points.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-asym" style={{ flex: 1, background: 'white' }} onClick={() => window.location.href = '/'}>
                            RETURN
                        </button>
                        <button className="btn-asym" style={{ flex: 1, background: 'transparent', color: 'white', border: '1px solid #222' }} onClick={() => window.location.reload()}>
                            REBOOT
                        </button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="ide-container">
            <motion.div
                className="ide-window"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="ide-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="window-controls" style={{ display: 'flex', gap: '0.6rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                        </div>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                            <Terminal size={14} color="var(--accent-yellow)" />
                            {ecommerceChallenge.title}
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-asym" onClick={runCode} style={{ background: 'transparent', color: 'white', border: '1px solid #222', padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>
                            <Play size={10} fill="currentColor" /> EXECUTE
                        </button>
                        <button className="btn-asym" onClick={calculateFinalScore} disabled={!hasRun} style={{ background: hasRun ? 'var(--accent-yellow)' : '#1a1a1a', color: 'black', padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>
                            SYNC <CheckCircle size={10} />
                        </button>
                    </div>
                </div>

                <div className="ide-body">
                    {/* Column 1: Objectives */}
                    <div className="task-pane" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem', flexShrink: 0 }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent-yellow)' }}></div>
                            <h3 style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', letterSpacing: '2px', textTransform: 'uppercase' }}>Objectives</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%', overflowY: 'auto', paddingRight: '0.5rem' }}>
                            {ecommerceChallenge.taskDetails.map((task, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 4, background: '#0c0c0c' }}
                                    style={{
                                        padding: '1.2rem',
                                        background: '#050505',
                                        border: '1px solid #111',
                                        borderRadius: '4px',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: '1.2rem',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <div style={{
                                        color: '#ffea00',
                                        fontSize: '0.8rem',
                                        fontWeight: '800',
                                        fontFamily: 'var(--font-mono)',
                                        marginTop: '0.1rem'
                                    }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <div style={{
                                        fontSize: '0.8rem',
                                        lineHeight: '1.6',
                                        color: '#bbb',
                                        fontWeight: '500'
                                    }}>
                                        {/* Highlight keywords in backticks or quotes */}
                                        {task.split(/(`[^`]+`|'[^']+')/).map((part, idx) => {
                                            if (part.startsWith('`') || part.startsWith("'")) {
                                                return (
                                                    <span key={idx} style={{ color: '#00f3ff', fontWeight: '700' }}>
                                                        {part.replace(/[`']/g, '')}
                                                    </span>
                                                );
                                            }
                                            return part;
                                        })}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Editor */}
                    <div className="editor-pane">
                        <div className="file-tabs" style={{ background: '#0c0c0c', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: '2px', padding: '0 1rem' }}>
                            {Object.entries(ecommerceChallenge.files).map(([key, file]) => (
                                <button
                                    key={key}
                                    className={`file-tab ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '800',
                                        letterSpacing: '1px',
                                        color: activeTab === key ? 'var(--accent-yellow)' : '#666',
                                        background: activeTab === key ? '#111' : 'transparent',
                                        border: 'none',
                                        borderTop: activeTab === key ? '2px solid var(--accent-yellow)' : '2px solid transparent',
                                        padding: '1rem 1.5rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {file.name}
                                </button>
                            ))}
                        </div>
                        <div style={{ flex: 1, display: 'flex', overflow: 'hidden', padding: '1.5rem' }}>
                            <div className="editor-content" style={{ padding: '2rem', background: '#030303', border: '1px solid #111', borderRadius: '4px', overflowY: 'auto', height: '100%', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                {renderCodeBlock(activeTab, ecommerceChallenge.files[activeTab])}
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Preview */}
                    <div className="preview-pane">
                        <div style={{
                            height: '54px',
                            background: '#0c0c0c',
                            borderBottom: '1px solid #1a1a1a',
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0 1.5rem',
                            fontSize: '0.65rem',
                            fontWeight: '800',
                            color: '#444',
                            gap: '0.8rem',
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}>
                            <Activity size={12} color="var(--accent-blue)" /> SYSTEM_PREVIEW
                        </div>
                        <div style={{ flex: 1, padding: '1.5rem', background: '#000' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '4px', overflow: 'hidden', border: '1px solid #1a1a1a', background: '#000' }}>
                                <iframe title="Preview" srcDoc={previewSrc} style={{ width: '100%', height: '100%', border: 'none' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Quiz;
