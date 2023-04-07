import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: 'black'
};

const buttonStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: '#EAFE72',
    border: '1px solid #EAFE72',
    borderRadius: '5px',
    padding: '10px',
    fontFamily: 'Cutive Mono',
    backgroundColor: 'transparent',
    cursor: 'pointer'
};

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <button onClick={() => window.location.href = '/' } style={buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page2;
