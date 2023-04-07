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

class Page4 extends Component {
    render() {
        return (
            <div style={containerStyle}>
                <h1>Sorry, I haven't come up with anything fun yet! </h1>
                <h2> Maybe I should have spent less time coming up with boring things you could be (but probably aren't) doing... </h2>
                <Link to="/" style={buttonStyle}>Go back</Link>
            </div>
        );
    }
}

export default Page4;
