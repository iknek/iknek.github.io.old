import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import FlipText from './FlipText';
import styles from './styleSheets/styles';

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    height: '100vmin',
    width: '100%'
};

const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1D1B18',
    border: 'solid white',
    textColor:  '#EAFE72',
};

const boringThings = [
    'alphabetizing canned goods',
    'untangling earphones',
    'color-coding paperclips',
    'polishing coins',
    'counting ceiling tiles',
    'reorganizing fridge magnets',
    'wiping remotes',
    'labeling light switches',
    'smoothing napkins',
    'categorizing bookmarks',
    'inflating balloons',
    'rewrapping gifts',
    'sorting batteries',
    'doodling circles',
    'humming silently',
    'folding tissues',
    'cleaning doorknobs',
    'timing shadows',
    'spoon drumming',
    'rating thumbtacks',
    'trimming erasers',
    'licking envelopes',
    'rolling marbles',
    'inspecting cutlery',
    'judging clouds',
    'fanning pages',
    'dressing dolls',
    'counting raindrops',
    'tapping fingers',
    'lining pencils',
    'sniffing markers',
    'unrolling tape',
    'scratching chalkboards',
    'sketching dust',
    'stirring water',
    'petting cacti',
    'stepping Legos',
    'plucking dandelions',
    'watching sprinklers',
    'listening radios',
    'snapping fingers',
    'clapping alone',
    'whistling indoors',
    'naming plants',
    'staring blankly',
    'sorting buttons',
    'blinking repeatedly',
    'sipping air',
    'measuring shoelaces',
    'wiggling toes',
    'snapping rubber bands',
    'calculating pi',
    'arranging rocks',
    'inspecting lint',
    'tying knots',
    'observing shadows',
    'swaying slowly',
    'counting hiccups',
    'tossing coins',
    'twisting straws',
    'tickling feathers',
    'unraveling threads',
    'tasting toothpaste',
    'scrutinizing snowflakes',
    'flipping calendars',
    'swatting flies',
    'shuffling papers',
    'snuggling blankets',
    'wiping screens',
    'fluffing pillows',
    'combing dolls',
    'cracking knuckles',
    'shaking rugs',
    'yawning widely',
    'mumbling nonsense',
    'spinning pens',
    'curling ribbons',
    'washing windows',
    'picking lint',
    'flapping hands',
    'clicking pens',
    'blowing dust',
    'peeling stickers',
    'stacking coins',
    'wiping mirrors',
    'poking holes',
    'ripping paper',
    'sorting mail',
    'rubbing balloons',
    'sniffing flowers',
    'scratching itches',
    'counting syllables',
    'tapping toes',
    'bouncing balls',
    'timing blinks',
    'squishing putty',
    'popping bubble wrap'
];


const getRandomBoringThing = () => {
    const listOfUsed = [];
    const randomIndex = Math.floor(Math.random() * boringThings.length);
    const str = boringThings[randomIndex];

    listOfUsed.push(str);

    if(!listOfUsed.includes(str)){
        return boringThings[randomIndex];
    }
    else{
        return boringThings[randomIndex];
    }
};

const centerText = Object.assign({}, styles.linkStyle, {
    textAlign: 'center',
});

const Home = () => (
    <div style={containerStyle}>
        <div style={sectionStyle}>
            <Link to="/about" style={centerText}>
                <FlipText text="About Me" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/resume" style={centerText}>
                <FlipText text="My Resume" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/contact" style={centerText}>
                <FlipText text="Get in Touch" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/funzone" style={centerText}>
                <FlipText
                    textArray={Array(100)
                        .fill(0)
                        .map(() => `${getRandomBoringThing()}`)}
                    autoChange={true}
                    duration={7000}
                />
            </Link>
        </div>
    </div>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Page1 />} />
                <Route path="/resume" element={<Page2 />} />
                <Route path="/contact" element={<Page3 />} />
                <Route path="/funzone" element={<Page4 />} />
            </Routes>
        </Router>
    );
}

export default App;
