// src/FlipText.js
import React, { useEffect, useState } from 'react';

const FlipTextStyle = {
    fontSize: '42px',
    fontFamily: 'monospace',
};

const randomChar = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return chars.charAt(Math.floor(Math.random() * chars.length));
};

const FlipText = ({
                      text,
                      textArray,
                      flipDuration = 10,
                      flipInterval = 30,
                      duration = 7000,
                      autoChange = false,
                  }) => {
    const [currentText, setCurrentText] = useState(text ? text.replace(/./g, ' ') : '');
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (textArray && !text) {
            setCurrentText(textArray[textIndex].replace(/./g, ' '));
        }
    }, [textArray, text, textIndex]);

    useEffect(() => {
        let flipCount = 0;
        const targetTextArray = (text ? text : textArray[textIndex]).split('');

        const interval = setInterval(() => {
            setCurrentText((prevText) => {
                const newTextArray = prevText.split('');
                for (let i = 0; i < targetTextArray.length; i++) {
                    if (newTextArray[i] !== targetTextArray[i]) {
                        newTextArray[i] = randomChar();
                    }
                }
                return newTextArray.join('');
            });

            flipCount++;
            if (flipCount >= flipDuration) {
                clearInterval(interval);
                setCurrentText(text ? text : textArray[textIndex]);
            }
        }, flipInterval);

        return () => clearInterval(interval);
    }, [text, textArray, textIndex, flipDuration, flipInterval]);

    useEffect(() => {
        if (autoChange) {
            const changeTextInterval = setInterval(() => {
                setTextIndex((prevTextIndex) => (prevTextIndex + 1) % textArray.length);
            }, duration);

            return () => clearInterval(changeTextInterval);
        }
    }, [textArray, autoChange, duration]);

    return (
        <div style={FlipTextStyle}>
            {autoChange ? (
                <>
                    <span>Need a break from </span>
                    <span>{currentText.split('\n').map((line, index) => (
                        <span key={index}>{line}</span>
                    ))}</span>
                    <span>? </span>
                </>
            ) : (
                currentText.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))
            )}
        </div>
    );
};


export default FlipText;
