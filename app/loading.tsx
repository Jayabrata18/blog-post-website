"use client";

import React, { useState, useEffect } from "react";
import "../lib/actions/DD.css";
const Loading = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ100234567890!@#$%^&*()-_=+{}|[]\\;':\"<>?,./`~".split("");
    const initialStates = {
        L: "",
        O: "",
        D: "",
        I: "",
        N: "",
        G: "",
        DOT: "",
        DOT100: "",
        DOT2: ""
    };

    const finalCharacters = {
        L: "L",
        O: "O",
        D: "D",
        I: "I",
        N: "N",
        G: "G",
        DOT: ".",
        DOT100: ".",
        DOT2: "."
    };

    const [display, setDisplay] = useState(initialStates);

    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];
        const timeouts: NodeJS.Timeout[] = [];

        const startCycling = (letter: keyof typeof initialStates, stopAt: string, stopTime: number, cycleCount = 9) => {
            let index = 0;
            const interval = setInterval(() => {
                if (index < cycleCount) {
                    const randomChar = chars[Math.floor(Math.random() * chars.length)];
                    setDisplay((prev) => ({ ...prev, [letter]: randomChar }));
                    index++;
                } else {
                    clearInterval(interval);
                    setDisplay((prev) => ({ ...prev, [letter]: stopAt }));
                    const timeout = setTimeout(() => startCycling(letter, stopAt, stopTime), stopTime);
                    timeouts.push(timeout);
                }
            }, 100);
            intervals.push(interval);
        };

        // Start cycling for each letter and dot with specified stop characters and timings
        startCycling("L", "L", 1000);
        startCycling("O", "O", 1000);
        startCycling("D", "D", 1000);
        startCycling("I", "I", 1000);
        startCycling("N", "N", 1000);
        startCycling("G", "G", 1000);
        startCycling("DOT", ".", 1000);
        startCycling("DOT100", ".", 1000);
        startCycling("DOT2", ".", 1000);

        return () => {
            intervals.forEach(clearInterval);
            timeouts.forEach(clearTimeout);
        };
    }, []);

    const getColor = (char: string, stopAt: string) => {
        return char === stopAt ? "final" : "cycling";
    };

    return (
        <div className="word">
            <div className={getColor(display.L, finalCharacters.L)}>{display.L}</div>
            <div className={getColor(display.O, finalCharacters.O)}>{display.O}</div>
            <div className={getColor(display.D, finalCharacters.D)}>{display.D}</div>
            <div className={getColor(display.I, finalCharacters.I)}>{display.I}</div>
            <div className={getColor(display.N, finalCharacters.N)}>{display.N}</div>
            <div className={getColor(display.G, finalCharacters.G)}>{display.G}</div>
            <div className={getColor(display.DOT, finalCharacters.DOT)}>{display.DOT}</div>
            <div className={getColor(display.DOT100, finalCharacters.DOT100)}>{display.DOT100}</div>
            <div className={getColor(display.DOT2, finalCharacters.DOT2)}>{display.DOT2}</div>
            <div className="overlay"></div>
        </div>
    );
};

export default Loading;
