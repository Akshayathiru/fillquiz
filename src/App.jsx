import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles, User, Bell, Search, Zap, Layout, Command, Globe, Shield, Activity, Terminal } from 'lucide-react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Login from './components/Login';
import './index.css';

const MeshBackground = () => {
  return (
    <div className="mesh-container">
      <div className="mesh-blob blob-indigo"></div>
      <div className="mesh-blob blob-pink"></div>
    </div>
  );
};

function Navbar({ user, onLogout }) {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo" style={{ color: 'white', fontWeight: '800', letterSpacing: '-0.04em', fontSize: '1.4rem', display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            background: 'var(--magic-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)'
          }}>
            <Terminal size={20} color="#0a0b1e" />
          </div>
          RUNTIME TERRORS
        </div>
      </Link>

      <div className="nav-links" style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
        {[
          { name: 'Home', path: '/' },
          { name: 'Missions', path: '/quiz' },
          { name: 'Rules', path: '/#rules' }
        ].map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: 'rgba(197, 160, 89, 0.05)',
          border: '1px solid rgba(197, 160, 89, 0.3)',
          padding: '0.3rem 0.3rem 0.3rem 1rem',
          borderRadius: '4px'
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--magic-gold)', fontWeight: '600', textTransform: 'uppercase' }}>
            {user?.name || 'User'}
          </span>
          <button
            onClick={onLogout}
            style={{
              background: 'rgba(255, 0, 0, 0.2)',
              border: '1px solid rgba(255, 0, 0, 0.3)',
              color: '#ff4444',
              fontSize: '0.7rem',
              fontWeight: '700',
              padding: '0.4rem 0.8rem',
              borderRadius: '2px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.background = 'rgba(255, 0, 0, 0.4)';
              e.target.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'rgba(255, 0, 0, 0.2)';
              e.target.style.boxShadow = 'none';
            }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [user, setUser] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('fillquiz_token');
    if (token) {
      setUser({ name: 'User', loggedIn: true });
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    if (userData.token) localStorage.setItem('fillquiz_token', userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('fillquiz_token');
  }

  return (
    <Router>
      <div className="app">
        <MeshBackground />
        {user && <Navbar user={user} onLogout={handleLogout} />}
        <main className="animate-fade-in">
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login onLogin={handleLogin} />} />
            <Route path="/quiz" element={user ? <Quiz user={user} /> : <Login onLogin={handleLogin} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
