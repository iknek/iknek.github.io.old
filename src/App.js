import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

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
    border: '1px solid black'
};

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: 'black'
};

const Home = () => (
    <div style={containerStyle}>
        <div style={sectionStyle}>
            <Link to="/page1" style={linkStyle}>Page 1</Link>
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

const Page1 = () => <div><h1>Page 1</h1><Link to="/" style={linkStyle}>Go back</Link></div>;
const Page2 = () => <div><h1>Page 2</h1><Link to="/" style={linkStyle}>Go back</Link></div>;
const Page3 = () => <div><h1>Page 3</h1><Link to="/" style={linkStyle}>Go back</Link></div>;
const Page4 = () => <div><h1>Page 4</h1><Link to="/" style={linkStyle}>Go back</Link></div>;

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
