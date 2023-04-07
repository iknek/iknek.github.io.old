import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: 'black'
};

class Page4 extends Component {
    render() {
        return (
            <div>
                <h1>Page 4</h1>
                <Link to="/" style={linkStyle}>Go back</Link>
            </div>
        );
    }
}

export default Page4;
