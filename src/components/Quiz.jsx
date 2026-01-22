import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode, FileJson, Zap, CheckCircle,
    Layout, Eye, Info, Play, ChevronRight,
    Terminal, Settings, Sparkles, Rocket, Command, Cpu, Activity
} from 'lucide-react';
import '../index.css';

const ecommerceChallenge = {
    title: "THE_FORBIDDEN_REGISTRY // ARCHIVE-99",
    description: "Reconstruct the ancient Artifact Registry. You must handle high-fidelity DOM orchestration, thematic styling, and state-locked inventory logic. Zero hints provided.",
    taskDetails: [
        "1.  HTML: Construct a semantic header and add the title 'Forbidden Registry' inside an <h1>.",
        "2.  HTML: Create a <main> section with ID 'artifact-grid' for dynamic rendering.",
        "3.  HTML: Add a footer or section containing stats with IDs 'grand-total' and 'artifact-count'.",
        "4.  HTML: Add a reset ritual <button> with ID 'reset-ritual'.",
        "5.  CSS: Apply the 'Cinzel' font to the header <h1>.",
        "6.  CSS: Implement a CSS Grid for 'artifact-grid' with at least 2 columns and a gap.",
        "7.  CSS: Apply the gold color (#c5a059) to the text or borders via the 'style.css'.",
        "8.  CSS: Define a '.artifact-card' with a border and semi-transparent background.",
        "9.  CSS: Implement a '@keyframes pulse' and attach it to the '.legendary' class.",
        "10. JS: Use an array method (.forEach or .map) to iterate through the artifacts.",
        "11. JS: Use DOM methods (createElement or innerHTML) to manifest artifacts into the grid.",
        "12. JS: Implement logic to update 'totalMana' or 'grand-total' when an item is acquired.",
        "13. JS: Implement logic to reset values to 0 when the ritual button is triggered.",
        "14. JS: Use 'addEventListener' to bind the reset button to your logic."
    ],
    files: {
        html: {
            name: "index.html",
            icon: <Layout size={14} />,
            color: "var(--accent-yellow)",
            initialCode: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Forbidden Registry</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="seal-icon"></div>
        <!-- 1. Add Semantic Title here -->
    </header>

    <!-- 2. Create the main Registry Grid below (ID: artifact-grid) -->

    <!-- 3. Construct the Footer with Stats and Reset Logic below -->

    <script src="script.js"></script>
</body>
</html>`,
            solutions: [
                {
                    id: "semantic-header", check: (code) => {
                        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
                        return /<header>[\s\S]*?<h1>Forbidden Registry<\/h1>[\s\S]*?<\/header>/i.test(clean);
                    }, points: 20
                },
                {
                    id: "grid-container", check: (code) => {
                        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
                        return /id=["']artifact-grid["']/i.test(clean) && /<main|<div/i.test(clean);
                    }, points: 20
                },
                {
                    id: "state-stats", check: (code) => {
                        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
                        return /id=["']grand-total["']/i.test(clean) && /id=["']artifact-count["']/i.test(clean);
                    }, points: 20
                },
                {
                    id: "reset-ritual", check: (code) => {
                        const clean = code.replace(/<!--[\s\S]*?-->/g, '');
                        return /<button[^>]+id=["']reset-ritual["']/i.test(clean);
                    }, points: 20
                }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={14} />,
            color: "var(--accent-blue)",
            initialCode: `body {
    /* Step 1: Set deep dark background and magical gold text */
    padding: 2rem;
}

.seal-icon {
    /* Step 2: Implement diamond shape (20px, rotate 45deg, gold border) */
}

header h1 {
    /* Step 3: Apply 'Cinzel' font and thematic glow */
}

#artifact-grid {
    /* Step 4: Define 2-column grid layout with gap */
}

.artifact-card {
    /* Step 5: Design professional card logic */
}

.legendary {
    /* Step 6: Attach pulse animation */
}

@keyframes pulse {
    /* Step 7: Create the ritual glow animation */
}`,
            solutions: [
                {
                    id: "font-cinzel", check: (code) => {
                        const clean = code.replace(/\/\*[\s\S]*?\*\//g, '');
                        return clean.includes("font-family") && clean.includes("Cinzel");
                    }, points: 15
                },
                {
                    id: "grid-logic", check: (code) => {
                        const clean = code.replace(/\/\*[\s\S]*?\*\//g, '');
                        return (clean.includes("display: grid") || clean.includes("display:grid")) && clean.includes("gap");
                    }, points: 20
                },
                {
                    id: "gold-theme", check: (code) => {
                        const clean = code.replace(/\/\*[\s\S]*?\*\//g, '');
                        return clean.includes("#c5a059") && (clean.includes("color") || clean.includes("border"));
                    }, points: 20
                },
                {
                    id: "card-design", check: (code) => {
                        const clean = code.replace(/\/\*[\s\S]*?\*\//g, '');
                        return clean.includes(".artifact-card") && clean.includes("background");
                    }, points: 20
                },
                {
                    id: "animation", check: (code) => {
                        const clean = code.replace(/\/\*[\s\S]*?\*\//g, '');
                        return clean.includes("@keyframes pulse") && clean.includes("animation");
                    }, points: 25
                }
            ]
        },
        js: {
            name: "script.js",
            icon: <FileCode size={14} />,
            color: "var(--accent-yellow)",
            initialCode: `const artifacts = [
    { id: 101, name: "Elder Wand", price: 50000, rarity: "Legendary" },
    { id: 102, name: "Cloak", price: 35000, rarity: "Legendary" },
    { id: 103, name: "Resurrection Stone", price: 40000, rarity: "Legendary" }
];

// 1. Array state tracking (inventory, totalMana)

// 2. Artifact rendering logic

// 3. acquisition function (acquireArtifact)

// 4. reset function (performReset)

// 5. Connect event listeners`,
            solutions: [
                {
                    id: "array-render", check: (code) => {
                        const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                        return cleanCode.includes(".forEach") || cleanCode.includes(".map");
                    }, points: 25
                },
                {
                    id: "dom-creation", check: (code) => {
                        const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                        return cleanCode.includes("createElement") || cleanCode.includes(".innerHTML +=");
                    }, points: 25
                },
                {
                    id: "acquire-logic", check: (code) => {
                        const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                        return cleanCode.includes("function") && (cleanCode.includes("+=") || cleanCode.includes("++"));
                    }, points: 40
                },
                {
                    id: "reset-logic", check: (code) => {
                        const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                        return cleanCode.includes("= 0") || cleanCode.includes("= \"0\"");
                    }, points: 30
                },
                {
                    id: "event-listener", check: (code) => {
                        const cleanCode = code.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '');
                        return cleanCode.includes("addEventListener");
                    }, points: 20
                }
            ]
        }
    }
};

const Quiz = () => {
    const [activeTab, setActiveTab] = useState('html');
    const [userCode, setUserCode] = useState({
        html: ecommerceChallenge.files.html.initialCode,
        css: ecommerceChallenge.files.css.initialCode,
        js: ecommerceChallenge.files.js.initialCode
    });
    const [hasRun, setHasRun] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [missionResults, setMissionResults] = useState([]);
    const [previewType, setPreviewType] = useState('goal'); // 'user' or 'goal'
    const [previewSrc, setPreviewSrc] = useState('');
    const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
    const [isTimeUp, setIsTimeUp] = useState(false);

    const maxScore = Object.values(ecommerceChallenge.files).reduce((acc, file) => {
        return acc + file.solutions.reduce((sum, s) => sum + s.points, 0);
    }, 0);

    const generateCode = (isGoal = false) => {
        let html = userCode.html;
        let css = userCode.css;
        let js = userCode.js;

        if (isGoal) {
            html = `
<div class="registry-container">
    <div class="ambient-glow"></div>
    <main class="registry-main">
        <header class="registry-header">
            <div class="seal-header">
                <div class="seal-diamond"></div>
                <div class="seal-line"></div>
            </div>
            <div class="header-content">
                <div class="breadcrumb">FORBIDDEN_ARCHIVE // 099</div>
                <h1 class="main-title">Registry</h1>
            </div>
        </header>
        
        <div id="artifact-grid" class="custom-scroll">
            <div class="artifact-card legendary">
                <div class="card-glow"></div>
                <div class="card-meta">ARTIFACT_101 // LEGENDARY</div>
                <div class="card-body">
                    <h3>Elder Wand</h3>
                    <div class="price-tag">50,000 <span class="unit">G</span></div>
                </div>
                <button class="acquire-btn" data-price="50000">ACQUIRE ARTIFACT</button>
            </div>
            
            <div class="artifact-card legendary">
                <div class="card-glow"></div>
                <div class="card-meta">ARTIFACT_102 // LEGENDARY</div>
                <div class="card-body">
                    <h3>Invisibility Cloak</h3>
                    <div class="price-tag">35,000 <span class="unit">G</span></div>
                </div>
                <button class="acquire-btn" data-price="35000">ACQUIRE ARTIFACT</button>
            </div>
        </div>

        <div class="dashboard-panel">
            <div class="stats-grid">
                <div class="stat-box">
                    <span class="label">MANIFESTED</span>
                    <span id="artifact-count" class="value">0</span>
                </div>
                <div class="stat-box">
                    <span class="label">MANA_ACCUMULATION</span>
                    <span id="grand-total" class="value">0</span>
                </div>
            </div>
            <div class="action-footer">
                <button id="reset-ritual" class="purge-btn">PURGE_SESSION</button>
                <div class="status-badge">SYSTEM_ONLINE</div>
            </div>
        </div>
    </main>
</div>`;
            css = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=MedievalSharp&display=swap');

:root {
    --gold: #c5a059;
    --gold-glow: rgba(197, 160, 89, 0.3);
    --bg-dark: #020205;
}

body { 
    background: var(--bg-dark); color: var(--gold); font-family: 'MedievalSharp', cursive;
    margin: 0; padding: 0; min-height: 100vh; overflow-y: auto; font-size: 13px;
}

.registry-container { 
    min-height: 100vh; display: flex; flex-direction: column; position: relative;
}

.ambient-glow {
    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 600px; height: 400px; background: radial-gradient(circle, rgba(10, 11, 30, 0.8) 0%, transparent 70%);
    z-index: 0; pointer-events: none;
}

.registry-main { 
    flex: 1; display: flex; flex-direction: column; position: relative; z-index: 1; padding: 1.5rem;
    max-width: 450px; margin: 0 auto; width: 100%; box-sizing: border-box;
}

/* Header Styling */
.registry-header { margin-bottom: 2rem; display: flex; align-items: flex-start; gap: 1rem; }
.seal-header { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; padding-top: 0.5rem; }
.seal-diamond { width: 12px; height: 12px; border: 1px solid var(--gold); transform: rotate(45deg); box-shadow: 0 0 10px var(--gold-glow); }
.seal-line { width: 1px; height: 25px; background: linear-gradient(to bottom, var(--gold), transparent); }
.breadcrumb { font-size: 0.55rem; letter-spacing: 2px; opacity: 0.5; margin-bottom: 0.2rem; }
.main-title { font-size: 1.6rem; color: white; font-family: 'Cinzel', serif; margin: 0; letter-spacing: 1px; }

/* Artifact Grid */
#artifact-grid { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }

/* Visible Scrollbar */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.3); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 10px; border: 2px solid var(--bg-dark); }
::-webkit-scrollbar-thumb:hover { background: #fff; }

.artifact-card { 
    background: rgba(10, 11, 30, 0.4); border: 1px solid rgba(197, 160, 89, 0.1); 
    padding: 1.2rem; border-radius: 4px; position: relative; overflow: hidden; transition: 0.4s;
}
.artifact-card:hover { background: rgba(10, 11, 30, 0.8); border-color: var(--gold); transform: translateY(-3px); }
.card-glow { position: absolute; inset: 0; background: linear-gradient(45deg, transparent, rgba(197, 160, 89, 0.05), transparent); pointer-events: none; }
.card-meta { font-size: 0.5rem; color: var(--gold); opacity: 0.6; margin-bottom: 0.6rem; letter-spacing: 1px; }
.card-body h3 { font-size: 1rem; color: #fff; margin: 0 0 0.3rem 0; font-family: 'Cinzel', serif; }
.price-tag { font-size: 1.1rem; font-weight: bold; color: white; }
.unit { font-size: 0.6rem; color: var(--gold); }

.acquire-btn { 
    margin-top: 0.8rem; width: 100%; background: transparent; color: var(--gold); border: 1px solid var(--gold);
    padding: 0.5rem; font-family: 'Cinzel', serif; font-size: 0.65rem; font-weight: bold; cursor: pointer; transition: 0.3s;
}
.acquire-btn:hover { background: var(--gold); color: black; box-shadow: 0 5px 15px rgba(197, 160, 89, 0.2); }

.legendary { animation: ritualPulse 5s infinite; }
@keyframes ritualPulse {
    0%, 100% { border-color: rgba(197, 160, 89, 0.1); }
    50% { border-color: rgba(197, 160, 89, 0.4); box-shadow: 0 0 20px rgba(197, 160, 89, 0.1); }
}

/* Dashboard Panel */
.dashboard-panel { background: rgba(5, 5, 8, 0.9); border: 1px solid rgba(197, 160, 89, 0.15); padding: 1.2rem; border-radius: 8px; box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.5); margin-top: auto; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; }
.stat-box { border-left: 2px solid var(--gold); padding-left: 1rem; }
.label { font-size: 0.55rem; opacity: 0.5; letter-spacing: 1px; display: block; margin-bottom: 0.2rem; }
.value { font-size: 1.2rem; color: white; font-weight: bold; font-family: 'Cinzel', serif; }

.action-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.05); }
.purge-btn { background: transparent; color: #ff4444; border: none; font-family: 'Cinzel', serif; font-size: 0.65rem; letter-spacing: 2px; cursor: pointer; padding: 0.4rem; transition: 0.3s; }
.purge-btn:hover { color: white; text-shadow: 0 0 10px #f00; }
.status-badge { font-size: 0.5rem; color: #00ff00; letter-spacing: 1px; font-weight: bold; }
`;
            js = `
            let count = 0; let total = 0;
            const countEl = document.getElementById('artifact-count');
            const totalEl = document.getElementById('grand-total');
            const formatter = new Intl.NumberFormat();

            document.querySelectorAll('.acquire-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    count++; total += parseInt(btn.dataset.price);
                    countEl.innerText = count;
                    totalEl.innerText = formatter.format(total);
                });
            });

            document.getElementById('reset-ritual').addEventListener('click', () => {
                count = 0; total = 0;
                countEl.innerText = '0'; totalEl.innerText = '0';
            });
            `;
        }

        return `
                < html >
                <head>
                    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=MedievalSharp&display=swap" rel="stylesheet">
                    <style>
                        ${css}
                        ::-webkit-scrollbar { width: 8px; height: 8px; }
                        ::-webkit-scrollbar-track { background: #050505; }
                        ::-webkit-scrollbar-thumb { background: #c5a059; border-radius: 4px; }
                        ::-webkit-scrollbar-thumb:hover { background: #fff; }
                        html, body { height: 100%; margin: 0; }
                        * { box-sizing: border-box; }
                    </style>
                </head>
                <body>
                    ${html.replace(/<\/?html>|<\/?head>|<\/?body>|<meta[^>]*>|<title>[^<]*<\/title>/g, '')}
                    <script>${js}</script>
                </body>
            </html >
    `;
    };

    useEffect(() => {
        setPreviewSrc(generateCode(previewType === 'goal'));
    }, [userCode, previewType]);

    const handleCodeChange = (code) => {
        setUserCode(prev => ({
            ...prev,
            [activeTab]: code
        }));
    };

    const runCode = () => {
        setPreviewType('user');
        setHasRun(true);
    };

    const calculateFinalScore = () => {
        let earned = 0;
        const results = [];

        Object.entries(ecommerceChallenge.files).forEach(([fileKey, fileData]) => {
            const currentCode = userCode[fileKey];

            fileData.solutions.forEach((sol, idx) => {
                const isCorrect = sol.check(currentCode);
                if (isCorrect) earned += sol.points;

                results.push({
                    file: fileData.name,
                    task: ecommerceChallenge.taskDetails[results.length] || `Task ${idx + 1} `,
                    isCorrect,
                    points: sol.points
                });
            });
        });

        setTotalScore(earned);
        setMissionResults(results);
        setShowSummary(true);
    };

    useEffect(() => {
        if (showSummary) return;
        if (timeLeft <= 0) {
            setIsTimeUp(true);
            calculateFinalScore();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, showSummary]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')} `;
    };

    const renderLineNumbers = (code) => {
        const lines = code.split('\n').length;
        return Array.from({ length: Math.max(lines, 20) }, (_, i) => (
            <div key={i} style={{ color: '#444', textAlign: 'right', paddingRight: '1rem', userSelect: 'none', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', height: '1.5rem', lineHeight: '1.5rem' }}>
                {i + 1}
            </div>
        ));
    };

    const getGrade = (score) => {
        const percentage = (score / maxScore) * 100;
        if (percentage >= 90) return 'S';
        if (percentage >= 75) return 'A';
        if (percentage >= 60) return 'B';
        if (percentage >= 40) return 'C';
        return 'F';
    };

    if (showSummary) {
        return (
            <div className="summary-page" style={{
                minHeight: 'calc(100vh - 80px)',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                padding: '4rem 2rem',
                background: 'rgba(5, 5, 8, 0.4)',
                backdropFilter: 'blur(10px)',
                overflowY: 'auto'
            }}>
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="summary-card"
                    style={{
                        background: '#08080c',
                        border: '1px solid var(--magic-gold)',
                        borderRadius: '16px',
                        padding: '3rem',
                        textAlign: 'center',
                        maxWidth: '900px',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        boxShadow: '0 0 100px rgba(0, 0, 0, 0.9), 0 0 50px rgba(197, 160, 89, 0.1)',
                        position: 'relative',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '4rem'
                    }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, var(--accent-yellow), transparent)', animation: 'scan 4s infinite linear', zIndex: 10 }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                        <div style={{ textAlign: 'left' }}>
                            <div style={{ fontSize: '0.6rem', fontWeight: '900', color: 'var(--magic-gold)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Mission Synopsis</div>
                            <h2 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>ANCIENT_SCROLL_LOG</h2>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '3rem', fontWeight: '950', color: 'white', lineHeight: 1 }}>{getGrade(totalScore)}</div>
                            <div style={{ fontSize: '0.6rem', color: '#666', textTransform: 'uppercase', letterSpacing: '2px' }}>Final Grade</div>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem', background: '#050505', padding: '1.5rem', borderRadius: '4px', border: '1px solid #111' }}>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Magical Output</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--magic-gold)' }}>{totalScore} <span style={{ fontSize: '0.7rem', color: '#444' }}>/ {maxScore}</span></div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Accuracy</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: 'white' }}>{maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0}%</div>
                        </div>
                        <div>
                            <div style={{ fontSize: '0.55rem', color: '#666', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Status</div>
                            <div style={{ fontSize: '1.2rem', fontWeight: '800', color: totalScore >= (maxScore * 0.5) ? '#0f0' : '#f00' }}>
                                {totalScore >= (maxScore * 0.5) ? 'SUCCESS' : 'FAILED'}
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', marginBottom: '2.5rem', paddingRight: '1rem', minHeight: '300px' }} className="custom-scroll">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            {missionResults.map((res, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1.2rem',
                                    background: 'rgba(255, 255, 255, 0.02)',
                                    padding: '1.2rem 1.5rem',
                                    border: '1px solid rgba(197, 160, 89, 0.1)',
                                    borderRadius: '8px',
                                    textAlign: 'left',
                                    fontFamily: 'var(--font-mission)',
                                    transition: '0.3s'
                                }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        borderRadius: '50%',
                                        background: res.isCorrect ? '#0f0' : '#f44',
                                        boxShadow: res.isCorrect ? '0 0 15px #0f0' : '0 0 15px #f44'
                                    }}></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.6rem', color: 'var(--magic-gold)', textTransform: 'uppercase', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '1px', marginBottom: '0.2rem' }}>{res.file}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#eee', fontWeight: '500' }}>{res.task}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '1rem', fontWeight: '900', color: res.isCorrect ? 'var(--magic-gold)' : '#333' }}>
                                            {res.isCorrect ? `+ ${res.points} ` : '0'}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto' }}>
                        <button className="btn-asym" style={{ flex: 1, padding: '1.2rem', fontSize: '0.8rem' }} onClick={() => window.location.href = '/'}>FINALIZE_SESSION</button>
                        <button className="btn-asym" style={{ flex: 1, padding: '1.2rem', fontSize: '0.8rem', background: 'transparent', color: 'white', border: '1px solid rgba(197, 160, 89, 0.3)' }} onClick={() => window.location.reload()}>REBOOT_MISSION</button>
                    </div>
                </motion.div>
                <style>{`@keyframes scan { 0 % { top: -10 %; } 100 % { top: 110 %; } } `}</style>
            </div>
        );
    }

    return (
        <div className="ide-container" style={{ fontFamily: 'var(--font-heading)' }}>
            <motion.div className="ide-window" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
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
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem',
                            background: timeLeft < 60 ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 234, 0, 0.05)',
                            border: timeLeft < 60 ? '1px solid #f00' : '1px solid rgba(255, 234, 0, 0.2)',
                            borderRadius: '4px', color: timeLeft < 60 ? '#f00' : 'var(--accent-yellow)',
                            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: '800'
                        }}>
                            <Rocket size={12} className={timeLeft < 60 ? 'animate-pulse' : ''} />
                            {formatTime(timeLeft)}
                        </div>
                        <button className="btn-asym" onClick={runCode} disabled={isTimeUp} style={{ background: 'transparent', color: isTimeUp ? '#444' : 'white', border: '1px solid #222', padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>
                            <Play size={10} fill="currentColor" /> EXECUTE
                        </button>
                        <button className="btn-asym" onClick={calculateFinalScore} disabled={!hasRun || isTimeUp} style={{ background: hasRun && !isTimeUp ? 'var(--magic-gold)' : '#1a1a1a', color: '#0a0b1e', padding: '0.5rem 1.5rem', fontSize: '0.65rem' }}>
                            SYNC <CheckCircle size={10} />
                        </button>
                    </div>
                </div>

                <div className="ide-body">
                    <div className="task-pane custom-scroll">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                            <div style={{ width: '6px', height: '6px', background: 'var(--accent-yellow)' }}></div>
                            <h3 style={{ fontSize: '0.7rem', fontWeight: '800', color: 'white', letterSpacing: '2px', textTransform: 'uppercase' }}>Objectives</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'var(--font-mission)' }}>
                            {ecommerceChallenge.taskDetails.map((task, i) => (
                                <motion.div key={i} whileHover={{ x: 4, background: '#0c0c0c' }} style={{ padding: '1rem', background: '#050505', border: '1px solid #111', borderRadius: '4px', display: 'flex', gap: '1rem' }}>
                                    <div style={{ color: '#ffea00', fontSize: '0.7rem', fontWeight: '800', fontFamily: 'var(--font-mono)' }}>{String(i + 1).padStart(2, '0')}</div>
                                    <div style={{ fontSize: '0.75rem', color: '#bbb', lineHeight: '1.4' }}>{task}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="editor-pane">
                        <div className="file-tabs" style={{ display: 'flex', gap: '2px', padding: '0 1rem', background: '#0c0c0c' }}>
                            {Object.entries(ecommerceChallenge.files).map(([key, file]) => (
                                <button key={key} className={`file - tab ${activeTab === key ? 'active' : ''} `} onClick={() => setActiveTab(key)}
                                    style={{
                                        padding: '1rem 1.5rem', background: activeTab === key ? '#050505' : 'transparent',
                                        border: 'none', borderTop: activeTab === key ? '2px solid var(--accent-yellow)' : '2px solid transparent',
                                        color: activeTab === key ? 'var(--accent-yellow)' : '#666', fontSize: '0.7rem', fontWeight: '800', cursor: 'pointer',
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                    {file.name}
                                </button>
                            ))}
                        </div>
                        <div style={{ flex: 1, position: 'relative', background: '#030303', overflow: 'hidden' }}>
                            <div className="custom-scroll" style={{ position: 'absolute', inset: 0, display: 'flex', overflow: 'auto' }}>
                                <div style={{ width: '45px', background: '#080808', borderRight: '1px solid #111', paddingTop: '1rem', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                                    {renderLineNumbers(userCode[activeTab])}
                                </div>
                                <textarea
                                    value={userCode[activeTab]}
                                    onChange={(e) => handleCodeChange(e.target.value)}
                                    spellCheck="false"
                                    wrap="off"
                                    style={{
                                        flex: 1, background: 'transparent', color: '#bbb', border: 'none', outline: 'none',
                                        padding: '1rem 1rem 1rem 0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', lineHeight: '1.5rem',
                                        resize: 'none', minHeight: '100%', width: '100%',
                                        height: `${Math.max(userCode[activeTab].split('\n').length + 5, 30) * 1.5} rem`
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="preview-pane">
                        <div style={{ height: '54px', background: '#0c0c0c', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', padding: '0 1rem', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.65rem', fontWeight: '800', color: '#666' }}>
                                <Activity size={12} color="var(--accent-blue)" /> {previewType === 'goal' ? 'TARGET_GOAL' : 'SYSTEM_PREVIEW'}
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button onClick={() => setPreviewType('user')} style={{ background: previewType === 'user' ? '#222' : 'transparent', border: '1px solid #222', color: previewType === 'user' ? 'var(--accent-yellow)' : '#444', fontSize: '0.5rem', padding: '0.2rem 0.5rem', borderRadius: '2px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}>USER</button>
                                <button onClick={() => setPreviewType('goal')} style={{ background: previewType === 'goal' ? '#222' : 'transparent', border: '1px solid #222', color: previewType === 'goal' ? 'var(--accent-yellow)' : '#444', fontSize: '0.5rem', padding: '0.2rem 0.5rem', borderRadius: '2px', cursor: 'pointer', fontFamily: 'var(--font-heading)' }}>GOAL</button>
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: '1rem', background: '#000', position: 'relative' }}>
                            <iframe title="Preview" srcDoc={previewSrc} style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px', background: '#050505' }} />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Quiz;
