import { useState } from "react";
import Box from "./Box"

function BoxGrid(){
    const [boxes, setBoxes] = useState([false, true, false, false, false, false, true, false, false]);

    const reset = () => setBoxes([false, false, false, false, false, false, false, false, false]);
    const toggleIsActive = (index) => {
        setBoxes((oldBoxes) => {
           return oldBoxes.map((val, i) => {
            if (i === index) {
                return !val;
            } else {
                return val
            }
        })})
    }
    return (
        <main className = "BoxGrid">
        {boxes.map((b, i) => (<Box key={i} isActive={b} clickFunc={()=>toggleIsActive(i)} />) )}

        <button onClick={reset}>RESET</button>
        </main>
    )
};

export default BoxGrid;