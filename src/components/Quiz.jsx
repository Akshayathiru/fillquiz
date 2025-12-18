import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileCode, FileJson, Play, CheckCircle, Terminal as TerminalIcon, Layout, Eye, RefreshCw, Printer } from 'lucide-react';
import '../index.css';

const websiteChallenge = {
    title: "Build a Interactive Webpage",
    description: "Fill in the missing code to create a functional webpage with styling and interactivity.",
    files: {
        html: {
            name: "index.html",
            icon: <Layout size={18} />,
            color: "#e34c26",
            code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="____">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* CSS is loaded from style.css */
    </style>
</head>
<body>
    <div id="app">
        <h1>Welcome Dev!</h1>
        <button id="____">Click Me</button>
        <p id="output">Waiting for interaction...</p>
    </div>
</body>
</html>`,
            blanks: [
                { index: 0, answer: "utf-8", points: 1 },
                { index: 1, answer: "actionBtn", points: 2 }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={18} />,
            color: "#264de4",
            code: `body {
    background-color: #1a1a1a;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

#app {
    text-align: ____; /* Hint: center the text */
    padding: 2rem;
    border: 1px solid #333;
    border-radius: 10px;
    background: #222;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

button {
    padding: 10px 20px;
    background: #00f3ff;
    border: none;
    border-radius: 5px;
    cursor: ____; /* Hint: mouse hand icon */
    font-weight: bold;
    color: #000;
    margin-top: 10px;
}`,
            blanks: [
                { index: 0, answer: "center", points: 2 },
                { index: 1, answer: "pointer", points: 2 }
            ]
        },
        js: {
            name: "script.js",
            icon: <FileJson size={18} />,
            color: "#f7df1e",
            code: `const btn = document.getElementById('actionBtn');
const output = document.getElementById('output');

if(btn) {
    // Define the click handler
    ____ handleClick() {
        if(output) {
            output.textContent = "Code executed successfully!";
            output.style.color = "#00ff88";
        }
    }

    // Add event listener
    btn.addEventListener('____', handleClick);
}`,
            blanks: [
                { index: 0, answer: "function", points: 6 },
                { index: 1, answer: "click", points: 3 }
            ]
        }
    }
};

const AutoSizeInput = ({ value, onChange, placeholder, isValidated, isValid }) => {
    const inputRef = useRef(null);
    const [width, setWidth] = useState(0);
    const spanRef = useRef(null);

    useEffect(() => {
        if (spanRef.current) {
            setWidth(spanRef.current.offsetWidth + 20); // Buffer
        }
    }, [value, placeholder]);

    return (
        <span style={{ display: 'inline-flex', position: 'relative', verticalAlign: 'middle' }}>
            <span
                ref={spanRef}
                style={{
                    position: 'absolute',
                    opacity: 0,
                    whiteSpace: 'pre',
                    fontFamily: 'inherit',
                    fontSize: 'inherit'
                }}
            >
                {value || placeholder}
            </span>
            <input
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: Math.max(width, 40) + 'px',
                    minWidth: '40px',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px dashed #58a6ff',
                    borderBottomColor: isValidated ? (isValid ? '#4ade80' : '#f87171') : '#58a6ff',
                    color: isValidated ? (isValid ? '#4ade80' : '#f87171') : '#fff',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    outline: 'none',
                    padding: '0 2px',
                    textAlign: 'center'
                }}
                className="code-input-field"
            />
            {isValidated && (
                <span style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-8px',
                    fontSize: '10px',
                    color: isValid ? '#4ade80' : '#f87171'
                }}>
                    {isValid ? '●' : '●'}
                </span>
            )}
        </span>
    );
};

const Quiz = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [userAnswers, setUserAnswers] = useState({});
    const [validationState, setValidationState] = useState({});
    const [hasRun, setHasRun] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [previewSrc, setPreviewSrc] = useState('');

    const maxScore = Object.values(websiteChallenge.files).reduce((acc, file) => {
        return acc + file.blanks.reduce((sum, b) => sum + b.points, 0);
    }, 0);

    useEffect(() => {
        const getFilledCode = (fileKey) => {
            let code = websiteChallenge.files[fileKey].code;
            websiteChallenge.files[fileKey].blanks.forEach((blank, idx) => {
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
        if (hasRun) {
            setValidationState(prev => {
                const newState = { ...prev };
                delete newState[`${fileKey}-${blankIndex}`];
                return newState;
            });
        }
    };

    const runCode = () => {
        let currentScore = 0;
        const newValidationState = {};

        Object.entries(websiteChallenge.files).forEach(([fileKey, file]) => {
            file.blanks.forEach((blank, idx) => {
                const userAns = (userAnswers[`${fileKey}-${idx}`] || "").trim();
                const isCorrect = userAns === blank.answer;
                newValidationState[`${fileKey}-${idx}`] = isCorrect;
                if (isCorrect) currentScore += blank.points;
            });
        });

        setValidationState(newValidationState);
        setTotalScore(currentScore);
        setHasRun(true);
    };

    const renderCodeBlock = (fileKey, fileData) => {
        const parts = fileData.code.split('____');
        return (
            <div className="code-editor">
                {parts.map((part, index) => {
                    const isLast = index === parts.length - 1;
                    const blankIndex = index;
                    const inputKey = `${fileKey}-${blankIndex}`;
                    const isValid = validationState[inputKey];
                    const isValidated = hasRun && validationState.hasOwnProperty(inputKey);

                    return (
                        <React.Fragment key={index}>
                            <span style={{ whiteSpace: 'pre-wrap' }}>{part}</span>
                            {!isLast && (
                                <AutoSizeInput
                                    value={userAnswers[inputKey] || ""}
                                    onChange={(e) => handleInputChange(fileKey, blankIndex, e.target.value)}
                                    placeholder="..."
                                    isValidated={isValidated}
                                    isValid={isValid}
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
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="summary-card-modern"
                >
                    <div className="card-top-accent"></div>

                    <div className="system-header">
                        <TerminalIcon size={32} color="#00f3ff" />
                        <h2>SYSTEM EVALUATION</h2>
                    </div>

                    <div className="score-content">
                        <div className="grade-box">
                            <span className="grade-label">GRADE</span>
                            <span className={`grade-value grade-${grade}`}>{grade}</span>
                        </div>

                        <div className="metrics">
                            <div className="metric-row">
                                <span>SYNTAX CHECK</span>
                                <span className={totalScore === maxScore ? "success" : "warn"}>
                                    {totalScore === maxScore ? "PASSED" : "ISSUES FOUND"}
                                </span>
                            </div>
                            <div className="metric-row">
                                <span>LOGIC SCORE</span>
                                <span className="score-nums">{totalScore} <span className="total">/ {maxScore}</span></span>
                            </div>
                            <div className="progress-bar-container">
                                <motion.div
                                    className="progress-fill"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(totalScore / maxScore) * 100}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="actions-footer">
                        <button className="secondary-btn" onClick={() => setShowSummary(false)}>
                            <RefreshCw size={16} /> REVIEW CODE
                        </button>
                        <button className="primary-btn" onClick={() => window.location.href = '/'}>
                            HOME
                        </button>
                    </div>
                </motion.div>

                <style>{`
                    .summary-overlay {
                        position: fixed; inset: 0;
                        background: rgba(0,0,0,0.85);
                        backdrop-filter: blur(8px);
                        display: flex; justify-content: center; alignItems: center;
                        z-index: 100;
                    }
                    .summary-card-modern {
                        background: #0d1117;
                        border: 1px solid #30363d;
                        border-radius: 16px;
                        width: 90%; max-width: 500px;
                        padding: 2rem;
                        position: relative;
                        overflow: hidden;
                        box-shadow: 0 0 80px rgba(0, 243, 255, 0.15);
                    }
                    .card-top-accent {
                        position: absolute; top: 0; left: 0; right: 0; height: 4px;
                        background: linear-gradient(90deg, #ff0055, #00f3ff, #ff0055);
                        animation: gradient-slide 3s linear infinite;
                        background-size: 200% 100%;
                    }
                    @keyframes gradient-slide { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }

                    .system-header {
                        display: flex; align-items: center; gap: 1rem;
                        margin-bottom: 2rem;
                        border-bottom: 1px solid #30363d;
                        padding-bottom: 1rem;
                    }
                    .system-header h2 {
                        font-family: 'Chakra Petch', sans-serif;
                        color: #fff; letter-spacing: 2px;
                        margin: 0; font-size: 1.5rem;
                    }

                    .score-content { display: flex; gap: 2rem; margin-bottom: 2rem; align-items: center; }
                    .grade-box {
                        display: flex; flex-direction: column; align-items: center;
                        background: rgba(255,255,255,0.05); padding: 1rem;
                        border-radius: 8px; border: 1px solid #30363d;
                        min-width: 100px;
                    }
                    .grade-label { color: #8b949e; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 5px; }
                    .grade-value { font-family: 'Chakra Petch', sans-serif; font-size: 3.5rem; font-weight: bold; line-height: 1; }
                    .grade-S { color: #eab308; text-shadow: 0 0 20px rgba(234, 179, 8, 0.5); }
                    .grade-A { color: #00ff88; text-shadow: 0 0 20px rgba(0, 255, 136, 0.5); }
                    .grade-B { color: #00f3ff; }
                    .grade-C { color: #f97316; }
                    .grade-F { color: #ef4444; }

                    .metrics { flex: 1; display: flex; flex-direction: column; gap: 1rem; }
                    .metric-row { display: flex; justify-content: space-between; font-size: 0.9rem; color: #c9d1d9; }
                    .success { color: #00ff88; font-weight: bold; }
                    .warn { color: #ff0055; font-weight: bold; }
                    .score-nums { font-family: 'Chakra Petch', sans-serif; font-size: 1.2rem; color: #fff; }
                    .total { color: #8b949e; font-size: 0.9rem; }
                    
                    .progress-bar-container { height: 6px; background: #21262d; border-radius: 3px; overflow: hidden; margin-top: 5px; }
                    .progress-fill { height: 100%; background: #00f3ff; box-shadow: 0 0 10px #00f3ff; }

                    .actions-footer { display: flex; gap: 1rem; }
                    button {
                        flex: 1; padding: 12px; border: none; border-radius: 6px;
                        font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 8px;
                        font-family: 'Chakra Petch', sans-serif; transition: 0.2s;
                    }
                    .secondary-btn { background: rgba(255,255,255,0.1); color: #fff; }
                    .secondary-btn:hover { background: rgba(255,255,255,0.2); }
                    .primary-btn { background: #00f3ff; color: #000; }
                    .primary-btn:hover { background: #00d2dd; box-shadow: 0 0 20px rgba(0, 243, 255, 0.4); }
                `}</style>
            </div>
        );
    }

    return (
        <div className="ide-container">
            <motion.div
                className="ide-window"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <div className="ide-header">
                    <div className="window-controls">
                        <span className="dot close"></span>
                        <span className="dot minimize"></span>
                        <span className="dot expand"></span>
                    </div>
                    <div className="project-title">{websiteChallenge.title}</div>
                    <div className="actions">
                        <button className="run-btn" onClick={runCode}>
                            RUN CODE <Play size={16} fill="currentColor" />
                        </button>
                        <button className="finish-btn" onClick={() => setShowSummary(true)} disabled={!hasRun} style={{ opacity: hasRun ? 1 : 0.5 }}>
                            FINISH <CheckCircle size={16} />
                        </button>
                    </div>
                </div>

                <div className="ide-body">
                    <div className="ide-pane editor-pane">
                        <div className="file-tabs">
                            {Object.entries(websiteChallenge.files).map(([key, file]) => (
                                <button
                                    key={key}
                                    className={`file-tab ${activeTab === key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    <span style={{ color: file.color }}>{file.icon}</span>
                                    {file.name}
                                </button>
                            ))}
                        </div>
                        <div className="editor-area">
                            <div className="editor-numbers">
                                {Array.from({ length: 20 }, (_, i) => i + 1).map(n => (
                                    <div key={n}>{n}</div>
                                ))}
                            </div>
                            <div className="editor-content">
                                {renderCodeBlock(activeTab, websiteChallenge.files[activeTab])}
                            </div>
                        </div>
                    </div>
                    <div className="ide-pane preview-pane">
                        <div className="preview-header"><Eye size={16} /> Live Preview</div>
                        <div className="preview-content">
                            <iframe title="Live Preview" srcDoc={previewSrc} style={{ width: '100%', height: '100%', border: 'none', background: '#fff' }} />
                        </div>
                    </div>
                </div>
            </motion.div>

            <style>{`
                /* IDE Styles (reused) */
                .ide-container { min-height: 100vh; display: flex; justify-content: center; align-items: center; padding: 2rem; color: #fff; font-family: 'Inter', sans-serif; }
                .ide-window { width: 100%; max-width: 1200px; height: 85vh; background: #0d1117; border: 1px solid #30363d; border-radius: 8px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
                .ide-header { height: 50px; background: #161b22; border-bottom: 1px solid #30363d; display: flex; align-items: center; justify-content: space-between; padding: 0 1rem; flex-shrink: 0; }
                .window-controls { display: flex; gap: 8px; }
                .dot { width: 12px; height: 12px; border-radius: 50%; }
                .close { background: #ff5f56; }
                .minimize { background: #ffbd2e; }
                .expand { background: #27c93f; }
                .project-title { font-family: 'Chakra Petch', sans-serif; color: #8b949e; font-size: 0.9rem; position: absolute; left: 50%; transform: translateX(-50%); }
                .actions { display: flex; gap: 1rem; }
                .run-btn, .finish-btn { padding: 6px 14px; border-radius: 6px; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 6px; border: 1px solid rgba(255,255,255,0.1); cursor: pointer; transition: 0.2s; }
                .run-btn { background: #238636; color: #fff; } .run-btn:hover { background: #2ea043; }
                .finish-btn { background: #1f6feb; color: #fff; } .finish-btn:hover:not(:disabled) { background: #388bfd; }
                .ide-body { flex: 1; display: flex; overflow: hidden; }
                .ide-pane { display: flex; flex-direction: column; }
                .editor-pane { flex: 6; border-right: 1px solid #30363d; } .preview-pane { flex: 4; background: #010409; }
                .file-tabs { display: flex; background: #0d1117; border-bottom: 1px solid #30363d; }
                .file-tab { background: transparent; border: none; color: #8b949e; padding: 10px 15px; cursor: pointer; display: flex; gap: 8px; align-items: center; font-family: 'monospace'; font-size: 0.85rem; border-top: 2px solid transparent; }
                .file-tab:hover { background: #161b22; } .file-tab.active { background: #1e1e1e; color: #fff; border-top: 2px solid #f7df1e; }
                .editor-area { flex: 1; display: flex; background: #1e1e1e; overflow: hidden; }
                .editor-numbers { width: 50px; background: #1e1e1e; color: #858585; text-align: right; padding: 20px 10px; font-family: 'monospace'; font-size: 14px; line-height: 1.6; border-right: 1px solid #333; user-select: none; }
                .editor-content { flex: 1; padding: 20px; font-family: 'JetBrains Mono', 'Consolas', monospace; font-size: 14px; line-height: 1.6; color: #d4d4d4; overflow: auto; }
                .preview-header { background: #161b22; color: #8b949e; padding: 8px 15px; font-size: 0.8rem; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid #30363d; }
                .preview-content { flex: 1; background: #fff; display: flex; flex-direction: column; }
                .code-input-field:focus { border-bottom: 1px solid #00f3ff !important; }
            `}</style>
        </div>
    );
};

export default Quiz;
