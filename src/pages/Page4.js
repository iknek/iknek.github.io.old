import React, { Component } from 'react';
import styles from '../styleSheets/styles';

class Page4 extends Component {
    render() {
        return (
            <div style={styles.containerStyle}>
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
                        style={styles.linkStyle}
                    >
                        github.com/iknek/iknek.github.io
                    </a>
                </h3>

                <button onClick={() => window.location.href = '/' } style={styles.buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page4;
