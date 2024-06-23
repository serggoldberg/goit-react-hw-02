import { useState } from "react";


export default function Options() {
    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
       setClicks(clicks + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Good : {clicks}</button>
            <button onClick={handleClick}>Neutral : {clicks}</button>
            <button onClick={handleClick}>Bad : {clicks}</button>
            <button onClick={handleClick}>Reset</button>
        </div>
    );
 }