import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1D1B18',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100vh',
    padding: '20%',
    boxSizing: 'border-box',
    color: '#EAFE72',
};

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: '#EAFE72',
};


const buttonStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: '#EAFE72',
    border: '1px solid #EAFE72',
    borderRadius: '5px',
    padding: '10px',
    backgroundColor: 'transparent',
    cursor: 'pointer'
};

class Page4 extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <h1 style={{ fontWeight: 'bold' }}>
                    Sorry, I haven't come up with anything fun yet!
                </h1>
                <h4 style={{ fontWeight: 'normal' }}>
                    Maybe I should have spent less time coming up with boring things you might
                    (but probably aren't) doing...
                </h4>
                <h2 style={{ fontWeight: 'bold' }}>
                    Whilst you're here though, why don't I explain how this site is built?
                </h2>
                <h3 style={{ fontWeight: 'normal' }}>
                    It's hosted on Github Pages, and built using JavaScript and React, with
                    a little bit of CSS thrown in for good measure. If you're interested, the repository can be found here:
                </h3>
                <h3 style={{ fontWeight: 'normal' }}>
                    <a
                        href="https://github.com/iknek/iknek.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        github.com/iknek/iknek.github.io
                     </a>
                </h3>
                <Link to="/" style={buttonStyle}>Go back</Link>
            </div>
        );
    }
}


export default Page4;
