import React, { useState } from "react";

function Ex7Solution() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleClick() {
        alert("Hello, " + firstName + " "+ lastName);
    }

    function handleFirstNameChange(event) {
        const firstName = event.target.value;
        setFirstName(firstName);
    }

    function handleLastNameChange(event) {
        const lastName = event.target.value;
        setLastName(lastName);

    }

    return (
        <div className="greeting-form-container">
            <input placeholder="First name" onChange={handleFirstNameChange}
                value={firstName}></input>
            <input placeholder="Last name" type="password" onChange={handleLastNameChange}
                value={lastName}></input>
            <button onClick={handleClick}>Greet Me</button>
        </div>
    )
}

export default Ex7Solution;