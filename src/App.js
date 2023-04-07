import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    height: '100vh',
    width: '100%'
};

const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#1D1B18',
    border: '10px solid white',
    textColor:  '#EAFE72'
};

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: '#EAFE72',
};

const Home = () => (
    <div style={containerStyle}>
        <div style={sectionStyle}>
            <Link to="/page1"style={linkStyle}>Page 1</Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/page2" style={linkStyle}>Page 2</Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/page3" style={linkStyle}>Page 3</Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/page4" style={linkStyle}>Page 4</Link>
        </div>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
            </Routes>
        </Router>
    );
}

export default App;
