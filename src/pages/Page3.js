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

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: '#EAFE72',
};

class Page3 extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <h1>Here's some places you can find and/or reach me!</h1>
                <h2>
                    LinkedIn:{' '}
                    <a
                        href="https://www.linkedin.com/in/imad-alihodzic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        Click here
                    </a>
                </h2>
                <h2>
                    E-mail:{' '}
                    <a
                        href="mailto:imad.alihodzic@yahoo.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={linkStyle}
                    >
                        imad.alihodzic@yahoo.com
                    </a>
                </h2>
                <h2> Phone: (+46) 076 872 54 52 </h2>
                <Link to="/" style={buttonStyle}>Go back</Link>
            </div>
        );
    }
}

export default Page3;