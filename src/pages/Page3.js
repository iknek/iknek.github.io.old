import React, { Component } from 'react';
import styles from '../styleSheets/styles';

class Page3 extends Component {
    render() {
        return (
            <div style={styles.containerStyle}>
                <h1>Here's some places you can find and/or reach me!</h1>
                <h2>
                    LinkedIn:{' '}
                    <a
                        href="https://www.linkedin.com/in/imad-alihodzic/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.linkStyle}
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
                        style={styles.linkStyle}
                    >
                        imad.alihodzic@yahoo.com
                    </a>
                </h2>
                <h2> Phone: (+46) 076 872 54 52 </h2>
                <button onClick={() => window.location.href = '/' } style={styles.buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page3;