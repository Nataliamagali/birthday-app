import React, { useState } from 'react';

const Person = ({ name, initialAge, hairColor }) => {
const [age, setAge] = useState(initialAge);

const handleBirthdayButtonClick = () => {
    setAge(age + 1);
};

return (
    <div>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <p>Hair Color: {hairColor}</p>
    <button onClick={handleBirthdayButtonClick}>
        Birthday Button for {name}
        </button>
    </div>
    );
};

export default Person;
