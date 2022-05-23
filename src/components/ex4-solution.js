import React, { useState } from "react";

function Ex4Solution() {
    const [click, setClicks] = useState(0);

    function handleIncrement() {
        setClicks(click + 1);
    }

    return <button onClick={handleIncrement} >{click}</button>
}

export default Ex4Solution;