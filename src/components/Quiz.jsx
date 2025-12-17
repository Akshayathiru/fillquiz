import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const questions = [
    {
        id: 1,
        level: "EASY",
        title: "Contains Duplicate",
        description: "Return true if any value appears at least twice in the array.",
        languages: {
            javascript: {
                code: `function containsDuplicate(nums) {
    const s = new Set(nums);
    return s.____ !== nums.length;
}`,
                answer: "size",
                output: "true / false"
            },
            python: {
                code: `def containsDuplicate(nums):
    return len(set(nums)) != len(____)`,
                answer: "nums",
                output: "True / False"
            },
            java: {
                code: `boolean containsDuplicate(int[] nums) {
    Set<Integer> set = new HashSet<>();
    for (int i : nums) set.add(i);
    return set.____() != nums.length;
}`,
                answer: "size",
                output: "true / false"
            },
            cpp: {
                code: `bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> s(nums.begin(), nums.end());
    return s.____() != nums.size();
}`,
                answer: "size",
                output: "true / false"
            },
            c: {
                code: `bool containsDuplicate(int* nums, int size) {
    // Naive O(n^2) check for dups
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (nums[i] == nums[____]) return true;
        }
    }
    return false;
}`,
                answer: "j",
                output: "true / false"
            }
        }
    },
    {
        id: 2,
        level: "EASY",
        title: "Valid Palindrome",
        description: "Check if string is a palindrome (alphanumeric only, ignore case).",
        languages: {
            javascript: {
                code: `function isPalindrome(s) {
    const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    return clean === clean.split('').____().join('');
}`,
                answer: "reverse",
                output: "true / false"
            },
            python: {
                code: `def isPalindrome(s):
    clean = ''.join(c.lower() for c in s if c.isalnum())
    return clean == clean[____]`,
                answer: "::-1",
                output: "True / False"
            },
            java: {
                code: `boolean isPalindrome(String s) {
    String clean = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    String rev = new StringBuilder(clean).____().toString();
    return clean.equals(rev);
}`,
                answer: "reverse",
                output: "true / false"
            },
            cpp: {
                code: `bool isPalindrome(string s) {
    string clean = ""; 
    for(char c: s) if(isalnum(c)) clean += tolower(c);
    string rev = clean;
    ____(rev.begin(), rev.end());
    return clean == rev;
}`,
                answer: "reverse",
                output: "true / false"
            },
            c: {
                code: `bool isPalindrome(char* s) {
    int l = 0, r = strlen(s) - 1;
    while(l < r) {
        if(s[l] != s[____]) return false;
        l++; r--;
    }
    return true;
}`,
                answer: "r",
                output: "true / false"
            }
        }
    },
    {
        id: 3,
        level: "MEDIUM",
        title: "Two Sum",
        description: "Find indices of two numbers that sum to target.",
        languages: {
            javascript: {
                code: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.____(comp)) return [map.get(comp), i];
        map.set(nums[i], i);
    }
}`,
                answer: "has",
                output: "[0, 1]"
            },
            python: {
                code: `def twoSum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        comp = target - num
        if comp ____ seen:
            return [seen[comp], i]
        seen[num] = i`,
                answer: "in",
                output: "[0, 1]"
            },
            java: {
                code: `int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int comp = target - nums[i];
        if (map.____(comp)) return new int[] { map.get(comp), i };
        map.put(nums[i], i);
    }
    return null;
}`,
                answer: "containsKey",
                output: "[0, 1]"
            },
            cpp: {
                code: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    for (int i = 0; i < nums.size(); i++) {
        int comp = target - nums[i];
        if (map.____(comp)) return {map[comp], i};
        map[nums[i]] = i;
    }
    return {};
}`,
                answer: "count",
                output: "{0, 1}"
            },
            c: {
                code: `int* twoSum(int* nums, int size, int target) {
    for (int i = 0; i < size; i++) {
        for (int j = i + 1; j < size; j++) {
            if (nums[i] + nums[j] == ____) {
                int* res = malloc(2 * sizeof(int));
                res[0]=i; res[1]=j; return res;
            }
        }
    }
}`,
                answer: "target",
                output: "[0, 1]"
            }
        }
    },
    {
        id: 4,
        level: "MEDIUM",
        title: "Async / Parallel",
        description: "Execute tasks or threads efficiently.",
        languages: {
            javascript: {
                code: `async function runAll(tasks) {
    return await Promise.____(tasks.map(t => t()));
}`,
                answer: "all",
                output: "[...results]"
            },
            python: {
                code: `import asyncio
async def run_all(tasks):
    return await asyncio.____(*tasks)`,
                answer: "gather",
                output: "[...results]"
            },
            java: {
                code: `CompletableFuture<Void> runAll(CompletableFuture<?>... cfs) {
    return CompletableFuture.____(cfs);
}`,
                answer: "allOf",
                output: "Void"
            },
            cpp: {
                code: `// Launch async task
auto future = std::____(std::launch::async, [](){ 
    return do_work(); 
});`,
                answer: "async",
                output: "future<T>"
            },
            c: {
                code: `// Create a POSIX thread
pthread_t thread;
pthread_____(&thread, NULL, myThreadFunc, NULL);
pthread_join(thread, NULL);`,
                answer: "create",
                output: "0 (success)"
            }
        }
    },
    {
        id: 5,
        level: "HARD",
        title: "Binary Search",
        description: "Find index of target in sorted array, or -1.",
        languages: {
            javascript: {
                code: `function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / ____);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,
                answer: "2",
                output: "index"
            },
            python: {
                code: `def search(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) ____ 2
        if nums[mid] == target: return mid
        if nums[mid] < target: l = mid + 1
        else: r = mid - 1
    return -1`,
                answer: "//",
                output: "index"
            },
            java: {
                code: `int search(int[] nums, int target) {
    int l = 0, r = nums.length - 1;
    while (l <= r) {
        int mid = l + (r - l) / ____;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,
                answer: "2",
                output: "index"
            },
            cpp: {
                code: `int search(vector<int>& nums, int target) {
    int l = 0, r = nums.size() - 1;
    while (l <= r) {
        int mid = l + (r - l) / ____;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,
                answer: "2",
                output: "index"
            },
            c: {
                code: `int search(int* nums, int size, int target) {
    int l = 0, r = size - 1;
    while (l <= r) {
        int mid = l + (r - l) / ____;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}`,
                answer: "2",
                output: "index"
            }
        }
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("javascript");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    const POINTS = {
        "EASY": 1,
        "MEDIUM": 3,
        "HARD": 6
    };

    const question = questions[currentQuestion];
    // Fallback if a new language doesn't have a question defined (though all do here)
    const currentLangData = question.languages[selectedLanguage] || question.languages['javascript'];

    const handleNext = () => {
        const isCorrect = userAnswer.trim() === currentLangData.answer;
        const isLastQuestion = currentQuestion === questions.length - 1;

        if (isCorrect) {
            setSuccess(true);
            const pointsToAdd = POINTS[questions[currentQuestion].level] || 0;

            setTimeout(() => {
                setScore(prev => prev + pointsToAdd); // Update score
                setSuccess(false);
                setUserAnswer("");
                if (!isLastQuestion) {
                    setCurrentQuestion(prev => prev + 1);
                } else {
                    setIsFinished(true);
                }
            }, 1000);
        } else {
            // If incorrect
            if (isLastQuestion) {
                // Allow finishing even if incorrect on the last question
                setIsFinished(true);
            } else {
                // Shake error for previous questions
                setError(true);
                setTimeout(() => setError(false), 500);
            }
        }
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
            setUserAnswer("");
            setSuccess(false);
            setError(false);
        }
    };

    const handleSkip = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setUserAnswer("");
            setSuccess(false);
            setError(false);
        } else {
            // Skip last question = Finish
            setIsFinished(true);
        }
    };

    if (isFinished) {
        return (
            <div className="quiz-container" style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                zIndex: 10,
                color: '#fff',
                padding: '2rem'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        textAlign: 'center',
                        background: 'rgba(2, 11, 20, 0.8)',
                        padding: '4rem',
                        borderRadius: '20px',
                        border: '1px solid #00f3ff',
                        boxShadow: '0 0 50px rgba(0, 243, 255, 0.3)'
                    }}
                >
                    <h1 style={{
                        fontFamily: 'Chakra Petch, sans-serif',
                        fontSize: '3.5rem',
                        color: '#00f3ff',
                        marginBottom: '1rem',
                        textShadow: '0 0 20px #00f3ff'
                    }}>
                        SYSTEM COMPLETED
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        color: '#fff',
                        marginBottom: '1rem',
                        fontFamily: 'Inter, sans-serif'
                    }}>
                        Thank You for Participating!
                    </p>

                    <div style={{
                        fontSize: '2rem',
                        color: '#ff0055',
                        fontWeight: 'bold',
                        marginBottom: '3rem',
                        fontFamily: 'Chakra Petch, sans-serif'
                    }}>
                        SCORE: <span style={{ color: '#00ff88' }}>{score}</span> / 14
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/'}
                        style={{
                            padding: '1.5rem 4rem',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            fontFamily: 'Chakra Petch, sans-serif',
                            background: '#ff0055',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                            boxShadow: '0 0 20px rgba(255, 0, 85, 0.5)'
                        }}
                    >
                        RETURN HOME
                    </motion.button>
                </motion.div>
            </div>
        );
    }

    const languages = [
        { id: 'javascript', label: 'JS' },
        { id: 'python', label: 'PY' },
        { id: 'java', label: 'JAVA' },
        { id: 'cpp', label: 'C++' },
        { id: 'c', label: 'C' },
    ];

    return (
        <div className="quiz-container" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
            color: '#fff',
            padding: '2rem'
        }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        padding: '3rem',
                        background: 'rgba(2, 11, 20, 0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(0, 243, 255, 0.2)',
                        borderRadius: '16px',
                        boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)'
                    }}
                >
                    {/* Header: Level and Language Selector */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <span style={{
                                color: question.level === 'EASY' ? '#00ff88' : question.level === 'MEDIUM' ? '#ffcc00' : '#ff0055',
                                fontFamily: 'Chakra Petch, sans-serif',
                                fontWeight: 'bold',
                                letterSpacing: '2px',
                                flexShrink: 0
                            }}>
                                {question.level} CHALLENGE {currentQuestion + 1}/{questions.length}
                            </span>

                            {/* Horizontal Scrollable Language Selector */}
                            <div className="lang-selector" style={{
                                display: 'flex',
                                gap: '8px',
                                overflowX: 'auto',
                                paddingBottom: '5px',
                                maxWidth: '100%',
                            }}>
                                {languages.map(lang => (
                                    <button
                                        key={lang.id}
                                        onClick={() => {
                                            setSelectedLanguage(lang.id);
                                            setUserAnswer("");
                                        }}
                                        style={{
                                            background: selectedLanguage === lang.id ? '#00f3ff' : 'rgba(0, 243, 255, 0.1)',
                                            color: selectedLanguage === lang.id ? '#000' : '#00f3ff',
                                            border: '1px solid #00f3ff',
                                            borderRadius: '20px',
                                            padding: '5px 15px',
                                            cursor: 'pointer',
                                            fontWeight: 'bold',
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase',
                                            fontFamily: 'Chakra Petch, sans-serif',
                                            transition: '0.3s',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {lang.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <h2 style={{
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '2rem',
                            marginTop: '1rem',
                            marginBottom: '0.5rem',
                            textTransform: 'uppercase'
                        }}>
                            {question.title}
                        </h2>

                        <div style={{
                            textAlign: 'left',
                            marginBottom: '1rem',
                            background: 'rgba(0,0,0,0.3)',
                            padding: '1rem',
                            borderRadius: '8px',
                            borderLeft: '4px solid #ff0055'
                        }}>
                            <span style={{ color: '#a3a3a3', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>PROBLEM STATEMENT:</span>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>{question.description}</p>
                        </div>
                    </div>

                    {/* Code Display Area */}
                    <div style={{
                        background: '#0d1117',
                        padding: '2rem',
                        borderRadius: '8px',
                        borderLeft: '4px solid #00f3ff',
                        fontFamily: 'monospace',
                        fontSize: '1.4rem',
                        marginBottom: '2rem',
                        textAlign: 'left',
                        position: 'relative',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
                        whiteSpace: 'pre-wrap',
                        overflowX: 'auto'
                    }}>
                        {currentLangData.code.split(/_+/).map((part, index, array) => (
                            <React.Fragment key={index}>
                                {part}
                                {index < array.length - 1 && (
                                    <input
                                        autoFocus
                                        type="text"
                                        value={userAnswer}
                                        onChange={(e) => setUserAnswer(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                                        placeholder="..."
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            borderBottom: `2px solid ${error ? '#ff0055' : success ? '#00ff88' : '#00f3ff'}`,
                                            color: success ? '#00ff88' : '#fff',
                                            fontSize: '1.4rem',
                                            fontFamily: 'monospace',
                                            width: '120px',
                                            textAlign: 'center',
                                            outline: 'none',
                                            margin: '0 5px'
                                        }}
                                        className={error ? 'shake-input' : ''}
                                    />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Output Preview */}
                    <div style={{
                        textAlign: 'left',
                        marginBottom: '3rem',
                        opacity: 0.7
                    }}>
                        <p style={{
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            marginBottom: '0.5rem',
                            color: '#a3a3a3'
                        }}>
                            Expected Output ({selectedLanguage}):
                        </p>
                        <div style={{
                            color: '#00f3ff',
                            fontFamily: 'monospace',
                            fontSize: '1.1rem'
                        }}>
                            &gt; {currentLangData.output}
                        </div>
                    </div>

                    {/* Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <motion.button
                            onClick={handlePrev}
                            disabled={currentQuestion === 0}
                            whileHover={currentQuestion !== 0 ? { scale: 1.05 } : {}}
                            whileTap={currentQuestion !== 0 ? { scale: 0.95 } : {}}
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.1rem',
                                fontFamily: 'Chakra Petch, sans-serif',
                                background: 'transparent',
                                border: '1px solid #a3a3a3',
                                color: '#a3a3a3',
                                cursor: currentQuestion === 0 ? 'not-allowed' : 'pointer',
                                opacity: currentQuestion === 0 ? 0.5 : 1
                            }}
                        >
                            PREV
                        </motion.button>

                        <motion.button
                            onClick={handleSkip}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 3rem',
                                fontSize: '1.1rem',
                                fontFamily: 'Chakra Petch, sans-serif',
                                background: 'transparent',
                                border: '1px solid #00f3ff',
                                color: '#00f3ff',
                                cursor: 'pointer',
                            }}
                        >
                            {currentQuestion === questions.length - 1 ? 'FINISH' : 'NEXT'}
                        </motion.button>

                        <motion.button
                            onClick={handleNext}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1rem 4rem',
                                fontSize: '1.2rem',
                                fontWeight: 'bold',
                                fontFamily: 'Chakra Petch, sans-serif',
                                background: success ? '#00ff88' : '#00f3ff',
                                color: '#000',
                                border: 'none',
                                cursor: 'pointer',
                                clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                                transition: 'background 0.3s'
                            }}
                        >
                            {success ? 'CORRECT!' : (currentQuestion === questions.length - 1 ? 'FINISH' : 'RUN CODE >')}
                        </motion.button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <style>{`
                .shake-input {
                    animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
                }
                @keyframes shake {
                    10%, 90% { transform: translate3d(-1px, 0, 0); }
                    20%, 80% { transform: translate3d(2px, 0, 0); }
                    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
                    40%, 60% { transform: translate3d(4px, 0, 0); }
                }
                /* Hide scrollbar for lang-selector but allow scroll */
                .lang-selector::-webkit-scrollbar {
                    height: 4px;
                }
                .lang-selector::-webkit-scrollbar-thumb {
                    background: #00f3ff;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    );
};

export default Quiz;
