import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles, User, Bell, Search, Zap, Layout, Command, Globe, Shield, Activity, Terminal } from 'lucide-react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './index.css';

const MeshBackground = () => {
  return (
    <div className="mesh-container">
      <div className="mesh-blob blob-indigo"></div>
      <div className="mesh-blob blob-pink"></div>
    </div>
  );
};

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo" style={{ color: 'white', fontWeight: '800', letterSpacing: '-0.04em', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            background: 'var(--accent-yellow)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            boxShadow: '0 0 20px rgba(255, 234, 0, 0.2)'
          }}>
            <Terminal size={20} color="black" />
          </div>
          RUNTIME TERRORS
        </div>
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '3.5rem' }}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Missions', path: '/quiz' },
          { name: 'Rules', path: '/#rules' },
          { name: 'Rewards', path: '#' }
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <MeshBackground />
        <Navbar />
        <main className="animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
