import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    fontSize: '24px',
    color: 'black'
};

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <Link to="/" style={linkStyle}>Go back</Link>
            </div>
        );
    }
}

export default Page2;
