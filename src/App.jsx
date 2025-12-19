import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home as HomeIcon, HelpCircle, Terminal, ShoppingCart } from 'lucide-react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="logo">
              <Terminal size={28} />
              <span>NEURAL_LINK</span>
            </div>
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">BASE</Link>
            <Link to="/quiz" className="nav-link">MISSIONS</Link>
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
