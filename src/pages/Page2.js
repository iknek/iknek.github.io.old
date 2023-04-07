import React, { Component } from 'react';
import styles from '../styleSheets/styles';

class Page2 extends Component {
    render() {
        return (
            <div  style={styles.containerStyle}>
                <h1>Sorry, this page is under construction!</h1>
                <h1>If you want to get a copy of my CV, send me an email or visit my LinkedIn.</h1>
                <button onClick={() => window.location.href = '/' } style={styles.buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page2;
