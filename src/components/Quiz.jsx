import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode, FileJson, Zap, CheckCircle,
    Layout, Eye, Info, Play, ChevronRight,
    Terminal, Settings, Sparkles, Rocket, Command, Cpu, Activity
} from 'lucide-react';
import '../index.css';

const ecommerceChallenge = {
    title: "SHOPPING_CART_V1 // SPRINT-09",
    description: "Construct a functional Shopping Cart system. Implement product rendering, state management for totals, and event handling for adding/clearing items.",
    taskDetails: [
        "1.  HTML: Set the page title.",
        "2.  HTML: Link the external stylesheet.",
        "3.  HTML: set the main heading.",
        "4.  HTML: Define the container ID for products.",
        "5.  HTML: Label the 'Clear Cart' button.",
        "6.  HTML: Link the external script.",
        "7.  CSS: set the font family.",
        "8.  CSS: Set the background color.",
        "9.  CSS: Define container width.",
        "10. CSS: Center the container.",
        "11. CSS: Add border to products.",
        "12. CSS: Set product background.",
        "13. CSS: Button background color.",
        "14. CSS: Button text color.",
        "15. CSS: Remove button border.",
        "16. JS: Initialize total variable.",
        "17. JS: Initialize count variable.",
        "18. JS: Select the product container.",
        "19. JS: Loop through products array.",
        "20. JS: Create DOM element.",
        "21. JS: Set class name.",
        "22. JS: Access product name.",
        "23. JS: Access product price.",
        "24. JS: Pass price to handler.",
        "25. JS: Label 'Add to Cart' button.",
        "26. JS: Append element to DOM.",
        "27. JS: Update total calculation.",
        "28. JS: Update count calculation.",
        "29. JS: Update total display ID.",
        "30. JS: Update count display ID.",
        "31. JS: Alert success message.",
        "32. JS: Reset total variable.",
        "33. JS: Reset count variable.",
        "34. JS: Alert clear message."
    ],
    files: {
        html: {
            name: "index.html",
            icon: <Layout size={14} />,
            color: "var(--accent-yellow)",
            code: `<!DOCTYPE html>
<html>
<head>
    <title>____</title>
    <link rel="stylesheet" href="____">
</head>

<body>

<div class="container">
    <h1>____</h1>

    <div id="____"></div>

    <h2>
        Items in Cart: <span id="count">0</span><br>
        Total Amount: <span id="total">0</span>
    </h2>

    <button onclick="clearCart()">____</button>
</div>

<script src="____"></script>
</body>
</html>`,
            blanks: [
                { index: 0, answer: "My Shop", points: 15 },
                { index: 1, answer: "style.css", points: 15 },
                { index: 2, answer: "My Shop", points: 15 },
                { index: 3, answer: "products", points: 20 },
                { index: 4, answer: "Clear Cart", points: 10 },
                { index: 5, answer: "script.js", points: 15 }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={14} />,
            color: "var(--accent-blue)",
            code: `body {
    font-family: ____;
    background-color: ____;
}

.container {
    width: ____;
    margin: ____;
}

.product {
    border: ____;
    padding: 15px;
    margin-bottom: 12px;
    background-color: ____;
}

button {
    background-color: ____;
    color: ____;
    border: ____;
    padding: 8px 12px;
    cursor: pointer;
}`,
            blanks: [
                { index: 0, answer: "sans-serif", points: 10 },
                { index: 1, answer: "#f4f4f4", points: 10 },
                { index: 2, answer: "80%", points: 10 },
                { index: 3, answer: "auto", points: 15 },
                { index: 4, answer: "1px solid #ddd", points: 20 },
                { index: 5, answer: "#fff", points: 10 },
                { index: 6, answer: "#28a745", points: 15 },
                { index: 7, answer: "#fff", points: 10 },
                { index: 8, answer: "none", points: 15 }
            ]
        },
        js: {
            name: "script.js",
            icon: <FileCode size={14} />,
            color: "var(--accent-yellow)",
            code: `// Product data
const products = [
    { id: 1, name: "Mobile", price: 15000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Laptop", price: 55000 }
];

// Cart variables
let total = ____;
let count = ____;

// Get product container
const productDiv = document.getElementById("____");

// Display products
products.____(product => {

    const div = document.____("div");
    div.____ = "product";

    div.innerHTML =
        "<h3>" + product.____ + "</h3>" +
        "<p>Price: " + product.____ + "</p>" +
        "<button onclick='addToCart(" + product.____ + ")'>____</button>";

    productDiv.____(div);
});

// Add item to cart
function addToCart(price) {
    total = total ____ price;
    count = count ____ 1;

    document.getElementById("____").innerText = total;
    document.getElementById("____").innerText = count;

    alert("____");
}

// Clear cart function
function clearCart() {
    total = ____;
    count = ____;

    document.getElementById("total").innerText = total;
    document.getElementById("count").innerText = count;

    alert("____");
}`,
            blanks: [
                { index: 0, answer: "0", points: 10 },
                { index: 1, answer: "0", points: 10 },
                { index: 2, answer: "products", points: 25 },
                { index: 3, answer: "forEach", points: 30 },
                { index: 4, answer: "createElement", points: 25 },
                { index: 5, answer: "className", points: 20 },
                { index: 6, answer: "name", points: 15 },
                { index: 7, answer: "price", points: 15 },
                { index: 8, answer: "price", points: 20 },
                { index: 9, answer: "Add to Cart", points: 10 },
                { index: 10, answer: "appendChild", points: 25 },
                { index: 11, answer: "+", points: 30 },
                { index: 12, answer: "+", points: 20 },
                { index: 13, answer: "total", points: 20 },
                { index: 14, answer: "count", points: 20 },
                { index: 15, answer: "Item Added", points: 10 },
                { index: 16, answer: "0", points: 15 },
                { index: 17, answer: "0", points: 15 },
                { index: 18, answer: "Cart Cleared", points: 10 }
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
    const [activeTab, setActiveTab] = useState(Object.keys(ecommerceChallenge.files)[0]);
    const [userAnswers, setUserAnswers] = useState({});
    const [hasRun, setHasRun] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [missionResults, setMissionResults] = useState([]);
    const [previewSrc, setPreviewSrc] = useState('');

    const maxScore = Object.values(ecommerceChallenge.files).reduce((acc, file) => {
        return acc + file.blanks.reduce((sum, b) => sum + b.points, 0);
    }, 0);

    const updatePreview = (useSolutions = false) => {
        const getFilledCode = (fileKey) => {
            if (!ecommerceChallenge.files[fileKey]) return "";
            let code = ecommerceChallenge.files[fileKey].code;

            ecommerceChallenge.files[fileKey].blanks.forEach((blank, idx) => {
                // If useSolutions is true, use the correct answer. 
                // Otherwise use what the user typed (fallback to empty string)
                const val = useSolutions
                    ? blank.answer
                    : (userAnswers[`${fileKey}-${idx}`] || "");
                code = code.replace("____", val);
            });
            return code;
        };

        const html = getFilledCode('html');
        const css = getFilledCode('css');
        const js = getFilledCode('js');

        const combinedSrc = `
            <html>
                <style>
                    ${css}
                    /* Inject Custom Scrollbar for Preview */
                    ::-webkit-scrollbar { width: 10px; height: 10px; }
                    ::-webkit-scrollbar-track { background: #050505; border-left: 1px solid #1a1a1a; }
                    ::-webkit-scrollbar-thumb { background: #FFD700; border-radius: 5px; border: 2px solid #050505; }
                    ::-webkit-scrollbar-thumb:hover { background: #fff; }
                    html, body { height: 100%; margin: 0; overflow-y: scroll; scrollbar-width: thin; scrollbar-color: #FFD700 #050505; }
                </style>
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
    };

    // Show the "Goal" output on initial load
    useEffect(() => {
        updatePreview(true);
    }, []);

    const handleInputChange = (fileKey, blankIndex, value) => {
        setUserAnswers(prev => ({
            ...prev,
            [`${fileKey}-${blankIndex}`]: value
        }));
    };

    const runCode = () => {
        updatePreview(false); // Render the user's actual filled code
        setHasRun(true);
    };

    const calculateFinalScore = () => {
        let earned = 0;
        const results = [];

        Object.entries(ecommerceChallenge.files).forEach(([fileKey, fileData]) => {
            fileData.blanks.forEach((blank, idx) => {
                const userAns = (userAnswers[`${fileKey}-${idx}`] || "").trim().toLowerCase();
                const isCorrect = userAns === blank.answer.toLowerCase();

                if (isCorrect) earned += blank.points;

                results.push({
                    file: fileData.name,
                    task: ecommerceChallenge.taskDetails[results.length] || `Blank ${idx + 1}`,
                    isCorrect,
                    points: blank.points,
                    userAns: userAnswers[`${fileKey}-${idx}`] || "EMPTY",
                    expected: blank.answer
                });
            });
        });

        setTotalScore(earned);
        setMissionResults(results);
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

    const getGrade = (score) => {
        const percentage = (score / maxScore) * 100;
        if (percentage >= 95) return 'S';
        if (percentage >= 80) return 'A';
        if (percentage >= 60) return 'B';
        if (percentage >= 40) return 'C';
        return 'F';
    };

    if (showSummary) {
        return (
            <div className="summary-overlay" style={{ background: 'rgba(0,0,0,0.98)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <motion.div
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    className="summary-card"
                    style={{
                        background: '#0a0a0a',
                        border: '1px solid var(--accent-yellow)',
                        borderRadius: '12px',
                        padding: '3rem',
                        textAlign: 'center',
                        maxWidth: '800px',
                        width: '100%',
                        maxHeight: '90vh',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 0 50px rgba(255, 234, 0, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Scanner Line */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                        background: 'linear-gradient(90deg, transparent, var(--accent-yellow), transparent)',
                        animation: 'scan 4s infinite linear', zIndex: 10
                    }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'left', fontFamily: 'var(--font-mission)' }}>
                            <div style={{ fontSize: '0.6rem', fontWeight: '900', color: 'var(--accent-yellow)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Mission Synopsis</div>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white', fontFamily: 'var(--font-display)' }}>RUNTIME_ERROR_LOG</h2>
                        </div>
                        <div style={{ textAlign: 'right', fontFamily: 'var(--font-display)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '950', color: 'white', lineHeight: 1 }}>{getGrade(totalScore)}</div>
                            <div style={{ fontSize: '0.6rem', color: '#666', textTransform: 'uppercase', letterSpacing: '2px' }}>Final Grade</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem', background: '#050505', padding: '1.5rem', borderRadius: '4px', border: '1px solid #111', fontFamily: 'var(--font-mission)' }}>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>Neural Throughput</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--accent-yellow)' }}>{totalScore} <span style={{ fontSize: '0.7rem', color: '#444' }}>/ {maxScore}</span></div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>Accuracy</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>{maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0}%</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>Status</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: totalScore >= (maxScore * 0.5) ? '#0f0' : '#f00' }}>
                                {totalScore >= (maxScore * 0.5) ? 'SUCCESS' : 'FAILED'}
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', marginBottom: '2rem', paddingRight: '1rem' }} className="custom-scroll">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {missionResults.map((res, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    background: '#030303',
                                    padding: '0.8rem 1.2rem',
                                    border: '1px solid #111',
                                    borderRadius: '4px',
                                    textAlign: 'left'
                                }}>
                                    <div style={{
                                        width: '8px', height: '8px', borderRadius: '50%',
                                        background: res.isCorrect ? '#0f0' : '#f00',
                                        boxShadow: res.isCorrect ? '0 0 10px #0f0' : '0 0 10px #f00'
                                    }}></div>
                                    <div style={{ flex: 1, fontFamily: 'var(--font-mission)' }}>
                                        <div style={{ fontSize: '0.65rem', color: '#555', textTransform: 'uppercase', fontWeight: '800', fontFamily: 'var(--font-display)' }}>[{res.file}]</div>
                                        <div style={{ fontSize: '0.8rem', color: '#bbb' }}>{res.task}</div>
                                    </div>
                                    <div style={{ textAlign: 'right', fontFamily: 'var(--font-display)' }}>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '800', color: res.isCorrect ? 'var(--accent-yellow)' : '#444' }}>+{res.isCorrect ? res.points : 0}</div>
                                        {!res.isCorrect && <div style={{ fontSize: '0.6rem', color: '#f00' }}>ERR: {res.userAns}</div>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="btn-asym" style={{ flex: 1, background: 'var(--accent-yellow)', color: 'black' }} onClick={() => window.location.href = '/'}>
                            FINALIZE_SESSION
                        </button>
                        <button className="btn-asym" style={{ flex: 1, background: 'transparent', color: 'white', border: '1px solid #222' }} onClick={() => window.location.reload()}>
                            REBOOT_MISSION
                        </button>
                    </div>
                </motion.div>
                <style>{`
                    @keyframes scan { 0% { top: -10%; } 100% { top: 110%; } }
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
                transition={{ duration: 0.5 }}
            >
                <div className="ide-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div className="window-controls" style={{ display: 'flex', gap: '0.6rem' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#222' }}></div>
                        </div>
                        <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', display: 'flex', alignItems: 'center', gap: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
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
                            <h3 style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>Objectives</h3>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1 1 0', overflowY: 'auto', paddingRight: '0.5rem', paddingBottom: '2rem' }} className="custom-scroll">
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
                                        fontWeight: '500',
                                        fontFamily: 'var(--font-mission)'
                                    }}>
                                        {/* Highlight keywords in backticks or quotes */}
                                        {task.split(/(`[^`]+`|'[^']+')/).map((part, idx) => {
                                            if (part.startsWith('`') || part.startsWith("'")) {
                                                return (
                                                    <span key={idx} style={{ color: '#00f3ff', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
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
                        <div className="file-tabs custom-scroll" style={{ background: '#0c0c0c', borderBottom: '1px solid #1a1a1a', display: 'flex', gap: '2px', padding: '0 1rem', overflowX: 'auto' }}>
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
                                        transition: 'all 0.2s',
                                        fontFamily: 'var(--font-display)'
                                    }}
                                >
                                    {file.name}
                                </button>
                            ))}
                        </div>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '1.5rem', minHeight: 0 }}>
                            <div className="editor-content custom-scroll" style={{ padding: '2rem', paddingBottom: '4rem', background: '#030303', border: '1px solid #111', borderRadius: '4px', overflowY: 'scroll', flex: '1 1 0', fontSize: '0.95rem', lineHeight: '1.6' }}>
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
                            textTransform: 'uppercase',
                            fontFamily: 'var(--font-display)'
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
