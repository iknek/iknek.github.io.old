import React, { Component } from 'react';
import styles from '../styleSheets/styles';

class Page1 extends Component {
    render() {
        return (
            <div style={styles.containerStyle}>
                <h1>About Me</h1>
                <blockquote> Born in Bosnia and Herzegovina, raised in Sweden, and educated in international schools, I've spent my life surrounded by people from all corners of the world. On rare occasions where I’ve not been surrounded by people, I've been a child of the internet - fascinated by all things related to technology.
                    Following my middle and high school education at an International Baccalaureate school, I combined my love for academics and technology by pursuing a civilingenjörsutbildning in Informationsteknik (Software Engineering) at Chalmers. Beyond studying and developing a passion for programing, in the last 2.5 years I have also worked a number of jobs, been engaged in student-led organisations, and am in the process of co-founding a startup.
                    Outside of academics and work, I have built computers since the age of 14, and been an active member on the Swedish tech forum ‘Sweclockers’ since 15. At 14, I wrote a guide on ifixit.com which currently has over 55,000 views. I'm also an active member of the fixed gear bike community in Sweden, and currently admin of the Fixed Gear Gothenburg Facebook group.
                    Kind regards, Imad Alihodzic
                </blockquote>
                <button onClick={() => window.location.href = '/' } style={styles.buttonStyle}>
                    Go back
                </button>
            </div>
        );
    }
}

export default Page1;