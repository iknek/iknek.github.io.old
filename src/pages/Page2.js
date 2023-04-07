import React, { Component } from 'react';
import styles from '../styleSheets/styles';

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>Page 2</h1>
                <button onClick={() => window.location.href = '/' } style={styles.buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page2;
