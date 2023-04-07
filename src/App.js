import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import FlipText from './FlipText';

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    height: '100vh',
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
    'washing dishes... again',
    'folding laundry, even the socks',
    'cleaning the bathroom, especially behind the toilet',
    'vacuuming the floor, including under the couch',
    'sorting socks by color and size',
    'dusting furniture, even the tiny crevices',
    'organizing the pantry alphabetically',
    'mowing the lawn while counting each blade of grass',
    'watering plants and giving them a pep talk',
    'polishing silverware until you can see your reflection',
    'sharpening pencils down to the eraser',
    'ironing clothes, including underwear',
    'cleaning windows with a toothbrush',
    'changing the bedsheets without getting tangled',
    'raking leaves into your neighbor\'s yard',
    'painting a wall and watching it dry',
    'peeling potatoes one by one',
    'counting the tiles on the floor',
    'alphabetizing your spice rack',
    'rewriting the dictionary by hand',
    'listening to elevator music on repeat',
    'reading the phone book cover to cover',
    'observing paint as it dries',
    'waiting in line at the DMV',
    'watching grass grow',
    'tallying up the number of bricks in your house',
    'scrubbing the kitchen floor with a toothbrush',
    'untangling a ball of yarn',
    'measuring the length of every piece of pasta',
    'reading the entire tax code',
    'memorizing a list of random numbers',
    'counting grains of rice in a bag',
    'organizing your sock drawer by color, pattern, and age',
    'watching a 24-hour slideshow of beige paint samples',
    'shaking hands with a mannequin',
    'listening to a lecture on the history of paperclips',
    'completing a 10,000-piece puzzle of a blank canvas',
    'translating the dictionary into Pig Latin',
    'making a chain of paperclips long enough to wrap around your house',
    'wiping down every leaf on a houseplant',
    'plucking petals off a flower and counting them',
    'collecting lint from the dryer and knitting a sweater',
    'learning the names of all the bacteria in your kitchen',
    'reading every ingredient on a shampoo bottle',
    'counting the threads in your bedsheets',
    'watching a documentary on the evolution of dust',
    'matching Tupperware lids to their containers',
    'cleaning grout with a toothpick',
    'reading user manuals for appliances you don\'t own',
    'listening to a recording of crickets on loop',
    'inventing a new language only you can speak',
    'taking inventory of your canned goods',
    'giving names to each of your houseplants',
    'untangling every knot in a ball of twine',
    'whittling a toothpick from a log',
    'flipping through a photo album of parking lots',
    'counting the number of times a clock ticks in an hour',
    'removing every seed from a strawberry',
    'combing a shag carpet',
    'reading a novel in Braille while wearing gloves',
    'watching a silent film on mute',
    'calculating the number of hairs on your head',
    'making a list of every word you know',
    'arranging your bookshelf by page count',
    'writing a haiku about a toothbrush',
    'practicing your penmanship on a grain of rice',
    'crafting a toothpick sculpture of your living room',
    'crocheting a sweater for your goldfish',
    'counting the number of seconds in a day',
    'listening to a podcast on watching paint dry',
    'peeling an orange in one continuous strip',
    'comparing the textures of various sandpapers',
    'writing an essay on the history of shoelaces',
    'calculating the exact amount of change in your piggy bank',
    'arranging cereal boxes by fiber content',
    'observing the slow journey of a snail',
    'drawing a detailed map of your backyard',
    'cleaning every key on your keyboard',
    'writing a diary entry from the perspective of a potato',
    'filling a notebook with the word "boring"',
    'listening to a guided meditation about a desert',
    'trying to balance a spoon on your nose',
    'memorizing the periodic table backwards',
    'counting the number of dimples on a golf ball',
    'reading an encyclopedia on a treadmill',
    'learning to tie a knot with one hand',
    'watching a tutorial on folding paper airplanes',
    'inventing a new recipe using only saltine crackers',
    'assembling a puzzle with all the pieces flipped over',
    'giving each grain of sand in a sandbox a name',
    'finding the end of a roll of tape',
    'sorting a deck of cards by suit, then by rank',
    'writing a fan letter to your favorite paper towel brand',
    'rolling up a ball of aluminum foil',
    'doodling pictures of your favorite vegetables',
    'counting the number of steps it takes to walk around your block',
    'studying the nutritional information on a box of cereal',
    'playing a game of solitaire with sticky cards',
    'naming every wrinkle on a raisin',
    'composing a sonnet about a doorknob',
    'watching ice melt in a glass',
    'guessing the flavor of a jelly bean while blindfolded',
    'making shadow puppets on the wall',
    'blowing bubbles with a straw in a glass of water',
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


const linkStyle = {
    textDecoration: 'none',
    fontSize: '38px',
    color: '#EAFE72',
    textAlign: 'center',
};

const leftSectionStyle = Object.assign({}, linkStyle);
const rightSectionStyle = Object.assign({}, linkStyle);

const Home = () => (
    <div style={containerStyle}>
        <div style={sectionStyle}>
            <Link to="/page1" style={leftSectionStyle}>
                <FlipText text="About Me" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/page2" style={rightSectionStyle}>
                <FlipText text="My Resume" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/contact" style={leftSectionStyle}>
                <FlipText text="Get in Touch" />
            </Link>
        </div>
        <div style={sectionStyle}>
            <Link to="/page4" style={rightSectionStyle}>
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
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/contact" element={<Page3 />} />
                <Route path="/page4" element={<Page4 />} />
            </Routes>
        </Router>
    );
}

export default App;
