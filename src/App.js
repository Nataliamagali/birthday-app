import React from 'react';
import './App.css';
import Person from './Person';

const App = () => {
  return (
    <div className="App">
      <Person name="Jane,Doe" initialAge={45} hairColor="Black" />
      <Person name="John, Smith" initialAge={88} hairColor="Brown" />
    </div>
  );
};

export default App;
