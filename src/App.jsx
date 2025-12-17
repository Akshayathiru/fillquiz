import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, HelpCircle, Terminal } from 'lucide-react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Decorative Background Effects - Persistent */}
        <div className="scene">
          <div className="floor"></div>
          <div className="ceiling"></div>
          <div className="horizon"></div>

          {/* Lightning Effects */}
          <div className="lightning-container">
            <div className="lightning-flash"></div>
            <svg className="lightning-bolt-svg" viewBox="0 0 100 400" preserveAspectRatio="none" style={{
              position: 'absolute', left: '25%', top: 0, width: '100px', height: '40%',
              animation: 'bolt-flicker 4s infinite 1s', opacity: 0
            }}>
              <path d="M50 0 L30 100 L70 100 L40 250 L80 250 L50 400" stroke="#fff" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 5px #00f3ff)' }} />
            </svg>
            <svg className="lightning-bolt-svg" viewBox="0 0 100 400" preserveAspectRatio="none" style={{
              position: 'absolute', left: '75%', top: 0, width: '120px', height: '50%',
              animation: 'bolt-flicker 5s infinite 2.5s', opacity: 0
            }}>
              <path d="M50 0 L60 80 L30 80 L60 200 L40 200 L70 350" stroke="#fff" strokeWidth="2" fill="none" style={{ filter: 'drop-shadow(0 0 5px #00f3ff)' }} />
            </svg>
          </div>

          {/* Floating Particles */}
          <div className="particle" style={{ left: '10%', animationDelay: '0s' }}></div>
          <div className="particle" style={{ left: '30%', animationDelay: '2s' }}></div>
          <div className="particle" style={{ left: '70%', animationDelay: '1s' }}></div>
          <div className="particle" style={{ left: '90%', animationDelay: '3s' }}></div>
        </div>

        {/* Navbar - Persistent */}
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '1.5rem', color: '#fff' }}>
              <Terminal size={28} color="#6366f1" />
              <span>Runtime Terror</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">
              <HomeIcon size={20} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <span>Home</span>
            </Link>
            <Link to="/quiz" className="nav-link">
              <HelpCircle size={20} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
              <span>Questions</span>
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
