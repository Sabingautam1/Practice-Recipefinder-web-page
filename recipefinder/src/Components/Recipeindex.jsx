import React, { useState } from "react";
import './style.css';

const Recipeindex = ({ alphaIndex }) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const [displayIndex, setDisplayIndex] = useState(0);

    const handleClick = (index) => {
        alphaIndex(alphabet.charAt(index));
    };

    return (
        <>
            {alphabet.slice(displayIndex, displayIndex + 5).split("").map((item, index) => (
                <div className="numBox" key={index} onClick={() => handleClick(displayIndex + index)}>
                    <h3>{item}</h3>
                </div>
            ))}
            <button onClick={() => setDisplayIndex(Math.max(0, displayIndex - 5))}>Previous</button>
            <button onClick={() => setDisplayIndex(Math.min(21, displayIndex + 5))}>Next</button>
        </>
    );
};

export default Recipeindex;
