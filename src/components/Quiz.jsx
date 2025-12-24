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
                { index: 0, answer: "Shopping Cart", points: 2 },
                { index: 1, answer: "style.css", points: 2 },
                { index: 2, answer: "My Shop", points: 2 },
                { index: 3, answer: "products", points: 2 },
                { index: 4, answer: "Clear Cart", points: 2 },
                { index: 5, answer: "script.js", points: 2 }
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
                { index: 0, answer: "sans-serif", points: 3 },
                { index: 1, answer: "#f4f4f4", points: 3 },
                { index: 2, answer: "80%", points: 3 },
                { index: 3, answer: "auto", points: 3 },
                { index: 4, answer: "1px solid #ddd", points: 3 },
                { index: 5, answer: "#fff", points: 3 },
                { index: 6, answer: "#28a745", points: 3 },
                { index: 7, answer: "#fff", points: 3 },
                { index: 8, answer: "none", points: 3 }
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
                { index: 0, answer: "0", points: 3 },
                { index: 1, answer: "0", points: 3 },
                { index: 2, answer: "products", points: 3 },
                { index: 3, answer: "forEach", points: 3 },
                { index: 4, answer: "createElement", points: 3 },
                { index: 5, answer: "className", points: 3 },
                { index: 6, answer: "name", points: 3 },
                { index: 7, answer: "price", points: 3 },
                { index: 8, answer: "price", points: 3 },
                { index: 9, answer: "Add to Cart", points: 3 },
                { index: 10, answer: "appendChild", points: 3 },
                { index: 11, answer: "+=", points: 3 },
                { index: 12, answer: "+=", points: 3 },
                { index: 13, answer: "total", points: 3 },
                { index: 14, answer: "count", points: 3 },
                { index: 15, answer: "Item Added", points: 3 },
                { index: 16, answer: "0", points: 3 },
                { index: 17, answer: "0", points: 3 },
                { index: 18, answer: "Cart Cleared", points: 3 }
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
    const [previewSrc, setPreviewSrc] = useState('');

    const maxScore = Object.values(ecommerceChallenge.files).reduce((acc, file) => {
        return acc + file.blanks.reduce((sum, b) => sum + b.points, 0);
    }, 0);

    useEffect(() => {
        const getFilledCode = (fileKey) => {
            if (!ecommerceChallenge.files[fileKey]) return "";
            let code = ecommerceChallenge.files[fileKey].code;
            // PRE-FILL PREVIEW WITH CORRECT ANSWERS so users see the goal output immediately
            ecommerceChallenge.files[fileKey].blanks.forEach((blank) => {
                const val = blank.answer;
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
    }, []); // Removed dependency on userAnswers to prevent re-render with incorrect code

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
                                        transition: 'all 0.2s'
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
