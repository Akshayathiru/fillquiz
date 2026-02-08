import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FileCode, FileJson, Zap, CheckCircle,
    Layout, Eye, Info, Play, ChevronRight,
    Terminal, Settings, Sparkles, Rocket, Command, Cpu, Activity
} from 'lucide-react';
import '../index.css';

const ecommerceChallenge = {
    title: "THE_FORBIDDEN_REGISTRY // ARCHIVE-X9 // ELITE_FINAL",
    description: "Reconstruct the ancient Artifact Registry. Requirement: Reactive performance, persistent vaults, and 3D orchestration. Note: System detects simplified solutions and voids points.",
    taskDetails: [
        "1.  HTML: Semantic <header> containing a <h1>'Forbidden Registry'</h1> and a <input type='text' id='search-input' placeholder='Scan signatures...'>.",
        "2.  HTML: A <main> with ID 'artifact-grid' and a notification glyph <div id='registry-status'></div>.",
        "3.  HTML: Dashboard panel with IDs 'grand-total', 'highest-price-ever', and 'active-filter-label'.",
        "4.  HTML: Reset Button with ID 'reset-ritual'.",
        "5.  CSS: Implement a 3D Card Hover using 'transform: perspective(1000px) rotateY(15deg)'.",
        "6.  CSS: Design a '::after' pseudo-element on '.artifact-card' for the gold border glow.",
        "7.  CSS: Use 'grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))' for spacing.",
        "8.  CSS: Implement '@keyframes shimmer' using 'background-position' on a linear-gradient.",
        "9.  CSS: Use 'clamp()' for responsive header font-sizes.",
        "10. JS: Implement 'renderRegistry()' with a requirement to '.sort()' the artifacts by price (Descending) before mapping.",
        "11. JS: Implement a 'search debounce' of 300ms using 'setTimeout' inside the input listener.",
        "12. JS: Use '.reduce()' to calculate the sum of prices, including a check to filter out 'null' or '0' value artifacts.",
        "13. JS: Persist the 'highest-price-ever' in 'localStorage' and ensure it updates ONLY if a more expensive item is bought.",
        "14. JS: Implement event delegation by attaching the click listener to '#artifact-grid' instead of individual buttons.",
        "15. JS: Use 'Intl.NumberFormat' to format the 'grand-total' display into a magical currency string.",
        "16. JS: Implement a 'Deep Purge' ritual that clears 'localStorage', resets DOM states, and triggers a 'console.warn' of the deletion."
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
    <title>Elite Registry</title>
</head>
<body>
    <header></header>
    <main></main>
    <aside class="dashboard"></aside>
    <script src="script.js"></script>
</body>
</html>`,
            solutions: [
                {
                    id: "h1-search", check: (code) => {
                        return /<h1>Forbidden Registry<\/h1>/i.test(code) && /<input[^>]+id=["']search-input["']/i.test(code);
                    }, points: 15
                },
                {
                    id: "grid-status", check: (code) => {
                        return /<main[^>]+id=["']artifact-grid["']/i.test(code) && /id=["']registry-status["']/i.test(code);
                    }, points: 15
                },
                {
                    id: "dash-ids", check: (code) => {
                        return code.includes('id="grand-total"') && code.includes('id="highest-price-ever"') && code.includes('id="active-filter-label"');
                    }, points: 20
                },
                {
                    id: "btn-ritual", check: (code) => {
                        return /<button[^>]+id=["']reset-ritual["'][^>]*>/.test(code) && code.includes("DEEP_PURGE");
                    }, points: 10
                }
            ]
        },
        css: {
            name: "style.css",
            icon: <FileCode size={14} />,
            color: "var(--accent-blue)",
            initialCode: `:root {
    --magic-gold: #c5a059;
}

body { background: #050508; color: white; }

#artifact-grid { }
.artifact-card { }
.artifact-card::after { }
h1 { }`,
            solutions: [
                {
                    id: "persp-fx", check: (code) => {
                        return code.includes("perspective(1000px)") && code.includes("rotateY(");
                    }, points: 25
                },
                {
                    id: "pseudo-after", check: (code) => {
                        return code.includes(".artifact-card::after") && code.includes("content:");
                    }, points: 20
                },
                {
                    id: "grid-flow", check: (code) => {
                        return code.includes("grid-template-columns") && code.includes("repeat") && code.includes("auto-fill");
                    }, points: 20
                },
                {
                    id: "shimmer-kf", check: (code) => {
                        return code.includes("@keyframes shimmer") && code.includes("background-position:");
                    }, points: 20
                },
                {
                    id: "clamp-rules", check: (code) => {
                        return code.includes("font-size:") && code.includes("clamp(");
                    }, points: 15
                }
            ]
        },
        js: {
            name: "script.js",
            icon: <FileCode size={14} />,
            color: "var(--accent-yellow)",
            initialCode: `const registry = [
    { name: "Ancient Relic", price: 99000 },
    { name: "Void Totem", price: 125000 },
    { name: "Mana Crystal", price: 15000 },
    { name: "Dragon Heart", price: 0 }
];

function render(filter = "") { }

document.getElementById('search-input')?.addEventListener('input', (e) => { });

document.getElementById('artifact-grid')?.addEventListener('click', (e) => { });

function purge() { }

render();`,
            solutions: [
                {
                    id: "sort-fn", check: (code) => {
                        return code.includes(".sort") && code.includes("price") && /=>.*-/.test(code);
                    }, points: 30
                },
                {
                    id: "debounce-logic", check: (code) => {
                        return code.includes("setTimeout") && code.includes("clearTimeout") && code.includes("300");
                    }, points: 30
                },
                {
                    id: "reduce-math", check: (code) => {
                        return code.includes(".reduce") && code.includes("acc");
                    }, points: 30
                },
                {
                    id: "storage-io", check: (code) => {
                        return code.includes("localStorage.setItem") && code.includes("localStorage.getItem");
                    }, points: 25
                },
                {
                    id: "delegation-event", check: (code) => {
                        return code.includes(".target") && code.includes("classList.contains");
                    }, points: 20
                },
                {
                    id: "intl-format-magic", check: (code) => {
                        return code.includes("Intl.NumberFormat");
                    }, points: 15
                },
                {
                    id: "purge-console", check: (code) => {
                        return code.includes("console.warn") && code.includes("SYSTEMS_PURGED");
                    }, points: 15
                }
            ]
        }
    }
};

const Quiz = ({ user }) => {
    const [activeTab, setActiveTab] = useState('html');
    const [userCode, setUserCode] = useState({
        html: ecommerceChallenge.files.html.initialCode,
        css: ecommerceChallenge.files.css.initialCode,
        js: ecommerceChallenge.files.js.initialCode
    });
    const [hasRun, setHasRun] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const submittedRef = useRef(false);
    const [totalScore, setTotalScore] = useState(0);
    const [missionResults, setMissionResults] = useState([]);
    const [previewType, setPreviewType] = useState('goal'); // 'user' or 'goal'
    const [previewSrc, setPreviewSrc] = useState('');

    // Force timer to always start at 25 minutes (1500 seconds)
    const [liveScore, setLiveScore] = useState(0);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [showCompletedPopup, setShowCompletedPopup] = useState(false);

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
                <div class="breadcrumb">FORBIDDEN_ARCHIVE // X9_ELITE</div>
                <h1 class="main-title">Elite Registry</h1>
                <div class="search-wrap">
                    <input type="text" id="target-search" placeholder="Scan signatures..." class="magical-input">
                    <div id="registry-status" class="status-dot"></div>
                </div>
            </div>
        </header>
        
        <div id="artifact-grid" class="custom-scroll elite-grid">
            <!-- Dynamically Rendered via JS in Goal -->
        </div>

        <div class="dashboard-panel">
            <div class="stats-grid">
                <div class="stat-box">
                    <span class="label">ACTIVE_FILTER</span>
                    <span id="active-filter-label" class="value small">ALL_SIGNATURES</span>
                </div>
                <div class="stat-box">
                    <span class="label">MANA_ACCUMULATION</span>
                    <span id="grand-total" class="value">0</span>
                </div>
                <div class="stat-box full">
                    <span class="label">PEAK_MANA_CAPTURED</span>
                    <span id="highest-price-ever" class="value">0</span>
                </div>
            </div>
            <div class="action-footer">
                <button id="reset-ritual" class="purge-btn">DEEP_PURGE_SESSION</button>
                <div class="status-badge">NEURAL_LINK_ACTIVE</div>
            </div>
        </div>
    </main>
</div>`;
            css = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700;900&family=MedievalSharp&display=swap');

:root {
    --gold: #c5a059;
    --gold-alpha: rgba(197, 160, 89, 0.2);
    --bg-dark: #050508;
}

body { 
    background: var(--bg-dark); color: var(--gold); font-family: 'MedievalSharp', cursive;
    margin: 0; padding: 0; min-height: 100vh; overflow: hidden;
}

.registry-container { height: 100vh; display: flex; flex-direction: column; overflow: hidden; }
.ambient-glow { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 100%; height: 500px; background: radial-gradient(circle, rgba(197, 160, 89, 0.05) 0%, transparent 70%); pointer-events: none; }

.registry-main { 
    flex: 1; display: flex; flex-direction: column; padding: 1.5rem; max-width: 500px; margin: 0 auto; width: 100%; height: 100%;
}

.main-title { font-size: clamp(1.2rem, 5vw, 1.8rem); font-family: 'Cinzel', serif; color: white; margin: 0; }
.search-wrap { margin-top: 1rem; position: relative; display: flex; align-items: center; gap: 0.5rem; }
.magical-input { background: rgba(0,0,0,0.5); border: 1px solid var(--gold-alpha); padding: 0.6rem; color: white; width: 100%; border-radius: 4px; outline: none; font-size: 0.8rem; }
.status-dot { width: 8px; height: 8px; background: #00ff00; borderRadius: 50%; box-shadow: 0 0 10px #00ff00; }

#artifact-grid { 
    display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; 
    margin: 1.5rem 0; overflow-y: auto; padding-right: 5px; flex: 1;
}

.artifact-card {
    background: rgba(10, 11, 30, 0.3); border: 1px solid var(--gold-alpha); padding: 1rem; border-radius: 4px;
    position: relative; transition: 0.5s; perspective: 1000px;
}
.artifact-card:hover { transform: perspective(1000px) rotateY(10deg) translateZ(5px); border-color: var(--gold); }
.artifact-card::after { content: ''; position: absolute; inset: 0; border-radius: 4px; box-shadow: 0 0 20px rgba(197, 160, 89, 0); transition: 0.4s; pointer-events: none; }
.artifact-card:hover::after { box-shadow: 0 0 20px rgba(197, 160, 89, 0.2); }

.price-tag { color: white; font-weight: bold; font-size: 1.2rem; margin: 0.5rem 0; }
.acquire-btn { width: 100%; background: transparent; color: var(--gold); border: 1px solid var(--gold); padding: 0.4rem; cursor: pointer; font-family: 'Cinzel', serif; font-size: 0.7rem; }
.acquire-btn:hover { background: var(--gold); color: black; }

.dashboard-panel { background: rgba(0,0,0,0.8); border: 1px solid var(--gold-alpha); padding: 1rem; border-radius: 8px; }
.stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
.stat-box { border-left: 2px solid var(--gold); padding-left: 0.8rem; }
.stat-box.full { grid-column: span 2; }
.label { font-size: 0.5rem; opacity: 0.5; display: block; }
.value { font-size: 1rem; color: white; font-family: 'Cinzel', serif; }
.value.small { font-size: 0.7rem; }

.purge-btn { background: transparent; color: #ff4444; border: none; font-size: 0.6rem; cursor: pointer; padding: 0; font-family: 'Cinzel'; }
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb { background: var(--gold); }
`;
            js = `
            const arts = [
                { name: "Ancient Relic", price: 99000 },
                { name: "Void Totem", price: 125000 },
                { name: "Mana Crystal", price: 15000 },
                { name: "Dragon Heart", price: 50000 }
            ];
            let vault = [];
            let peak = localStorage.getItem('peak_mana') || 0;
            
            function render(q = "") {
                const filtered = arts.filter(a => a.name.toLowerCase().includes(q.toLowerCase()))
                                    .sort((a,b) => b.price - a.price);
                
                document.getElementById('artifact-grid').innerHTML = filtered.map(a => \`
                    <div class="artifact-card">
                        <div style="font-size: 0.5rem; opacity: 0.5">SIGNATURE_SR_99</div>
                        <h3 style="font-size: 0.9rem; margin: 0.2rem 0; font-family: 'Cinzel'">\${a.name}</h3>
                        <div class="price-tag">\${a.price.toLocaleString()} <span style="font-size: 0.6rem; color: var(--gold)">G</span></div>
                        <button class="acquire-btn" data-price="\${a.price}">ACQUIRE</button>
                    </div>
                \`).join('');
                document.getElementById('active-filter-label').innerText = q ? q.toUpperCase() : "ALL_SIGNATURES";
            }

            document.getElementById('artifact-grid').addEventListener('click', (e) => {
                if(e.target.classList.contains('acquire-btn')) {
                    const p = parseInt(e.target.dataset.price);
                    vault.push(p);
                    const total = vault.reduce((a,b) => a+b, 0);
                    document.getElementById('grand-total').innerText = total.toLocaleString();
                    if(p > peak) {
                        peak = p;
                        localStorage.setItem('peak_mana', peak);
                        document.getElementById('highest-price-ever').innerText = peak.toLocaleString();
                    }
                }
            });

            document.getElementById('target-search').addEventListener('input', (e) => {
                render(e.target.value);
            });

            document.getElementById('reset-ritual').addEventListener('click', () => {
                vault = []; peak = 0; localStorage.removeItem('peak_mana');
                document.getElementById('grand-total').innerText = '0';
                document.getElementById('highest-price-ever').innerText = '0';
                console.warn("SYSTEMS_PURGED");
            });

            document.getElementById('highest-price-ever').innerText = parseInt(peak).toLocaleString();
            render();
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
        const code = generateCode(previewType === 'goal');
        setPreviewSrc(code);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userCode, previewType]);

    const handleCodeChange = (code) => {
        setUserCode(prev => ({
            ...prev,
            [activeTab]: code
        }));
    };

    const evaluateScore = () => {
        let earned = 0;
        const correctTaskIds = [];

        Object.entries(ecommerceChallenge.files).forEach(([fileKey, fileData]) => {
            const rawCode = userCode[fileKey] || "";
            const initialCode = fileData.initialCode || "";

            // Strictly ignore if code is unchanged (ignoring whitespace/line-endings)
            if (rawCode.replace(/\s/g, '') === initialCode.replace(/\s/g, '')) return;

            // Improved comment stripping: handles HTML, JS (// and /* */)
            let cleanCode = rawCode;
            if (fileKey === 'html') {
                cleanCode = rawCode.replace(/<!--[\s\S]*?-->/g, '');
            } else {
                cleanCode = rawCode.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');
            }

            fileData.solutions.forEach((sol, idx) => {
                if (sol.check(cleanCode)) {
                    earned += sol.points;
                    correctTaskIds.push(`${fileKey}-${idx}`);
                }
            });
        });

        setLiveScore(earned);
        setCompletedTasks(correctTaskIds);
    };

    const runCode = () => {
        setPreviewType('user');
        setHasRun(true);
        evaluateScore(); // Update live score on execute
    };

    // const finalizeSession = () => {
    //     if (!submittedRef.current) {
    //         calculateFinalScore();
    //     }
    // };

    const rebootMission = () => {
        localStorage.removeItem('quiz_timeLeft');
        window.location.reload();
    };

    const sendScoreToBackend = async (score, results) => {
        if (!user?.id) return;
        try {
            console.log("sending to backend");
            const timeSpent = 1500 - timeLeft; // Calculate total time spent (in seconds)
            let BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
            if (!BACKEND_URL.startsWith('http')) BACKEND_URL = `https://${BACKEND_URL}`;
            const token = localStorage.getItem('fillquiz_token');

            const res = await fetch(`${BACKEND_URL}/api/scores/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({ userId: user.id, score, timeSpent, results })
            });

            if (res.ok) {
                console.log(res);
                setShowCompletedPopup(true);
                setTimeout(() => {
                    setShowCompletedPopup(false);
                }, 3000);
            } else if (res.status === 409) {
                // Already submitted
                const data = await res.json();
                alert(data.error || "You have already submitted your score!");
                setShowCompletedPopup(true);
                setTimeout(() => {
                    setShowCompletedPopup(false);
                }, 3000);
            } else {
                const data = await res.json();
                console.error('Failed to save score:', data);
                alert('Failed to save your score. Please contact admin.');
            }
        } catch (err) {
            console.error('Failed to send score:', err);
            alert('Network error. Your score could not be saved.');
        }
    };

    const calculateFinalScore = () => {
        if (submittedRef.current) return; // prevent double submission
        let earned = 0;
        const results = [];

        Object.entries(ecommerceChallenge.files).forEach(([fileKey, fileData]) => {
            const rawCode = userCode[fileKey] || "";
            const initialCode = fileData.initialCode || "";

            // Strictly ignore if code is unchanged (ignoring whitespace/line-endings)
            if (rawCode.replace(/\s/g, '') === initialCode.replace(/\s/g, '')) return;

            // Improved comment stripping: handles HTML, JS (// and /* */)
            let cleanCode = rawCode;
            if (fileKey === 'html') {
                cleanCode = rawCode.replace(/<!--[\s\S]*?-->/g, '');
            } else {
                cleanCode = rawCode.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, '$1');
            }

            fileData.solutions.forEach((sol, idx) => {
                const isCorrect = sol.check(cleanCode);
                if (isCorrect) earned += sol.points;

                results.push({
                    file: fileData.name,
                    task: ecommerceChallenge.taskDetails[results.length] || `Task ${idx + 1}`,
                    isCorrect,
                    points: sol.points
                });
            });
        });

        submittedRef.current = true;
        setTotalScore(earned);
        setMissionResults(results);
        setShowSummary(true);
        sendScoreToBackend(earned, results);
    };

    useEffect(() => {
        if (showSummary || submittedRef.current) return;
        if (timeLeft <= 0) {
            setIsTimeUp(true);
            calculateFinalScore();
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const newTime = prev - 1;
                localStorage.setItem('quiz_timeLeft', newTime.toString());
                return newTime;
            });
        }, 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                background: 'rgba(5, 5, 8, 0.4)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
            }}>
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        background: '#08080c',
                        border: '1px solid var(--magic-gold)',
                        borderRadius: '16px',
                        padding: '4rem',
                        textAlign: 'center',
                        maxWidth: '500px',
                        width: '100%',
                        boxShadow: '0 0 100px rgba(0, 0, 0, 0.9), 0 0 50px rgba(197, 160, 89, 0.1)',
                        fontFamily: 'var(--font-heading)'
                    }}
                >
                    <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>💎</div>
                    <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem', letterSpacing: '2px' }}>MISSION COMPLETED</h2>
                    <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        Your performance data has been transmitted to the High Ministry Archive.
                        Your results will be evaluated by the Council.
                    </p>
                    <button className="btn-asym" style={{ width: '100%', padding: '1.2rem' }} onClick={() => {
                        localStorage.removeItem('quiz_timeLeft');
                        window.location.href = '/';
                    }}>RETURN TO HEADQUARTERS</button>
                </motion.div>
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
                    <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.4rem 1rem',
                            background: 'rgba(197, 160, 89, 0.1)',
                            border: '1px solid rgba(197, 160, 89, 0.3)',
                            borderRadius: '4px', color: 'var(--magic-gold)',
                            fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: '800'
                        }}>
                            <Zap size={14} fill="currentColor" />
                            {liveScore} MANA
                        </div>

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
                            {ecommerceChallenge.taskDetails.map((task, i) => {
                                const fileKey = i < 4 ? 'html' : i < 9 ? 'css' : 'js';
                                const solIdx = i < 4 ? i : i < 9 ? i - 4 : i - 9;
                                const isCompleted = completedTasks.includes(`${fileKey}-${solIdx}`);

                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 4, background: '#0c0c0c' }}
                                        style={{
                                            padding: '1rem',
                                            background: isCompleted ? 'rgba(0, 255, 0, 0.02)' : '#050505',
                                            border: isCompleted ? '1px solid rgba(0, 255, 0, 0.2)' : '1px solid #111',
                                            borderRadius: '4px',
                                            display: 'flex',
                                            gap: '1rem',
                                            transition: 'all 0.4s ease'
                                        }}
                                    >
                                        <div style={{ color: isCompleted ? '#00ff00' : '#ffea00', fontSize: '0.7rem', fontWeight: '800', fontFamily: 'var(--font-mono)' }}>
                                            {isCompleted ? <CheckCircle size={14} /> : String(i + 1).padStart(2, '0')}
                                        </div>
                                        <div style={{ fontSize: '0.75rem', color: isCompleted ? 'white' : '#bbb', lineHeight: '1.4' }}>{task}</div>
                                    </motion.div>
                                );
                            })}
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
