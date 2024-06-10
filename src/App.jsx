import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const people = ["henry", "adam"];

const fetchPeople = async (setPeople) => {
  try {
    const response = await fetch('https://cat-fact.herokuapp.com/facts'); // Replace with your API URL
    const data = await response.json();
    setPeople(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};



function ListPeople() {
  
  return (
    <div>
      {people.map((person, index) => (
        <p key={index}>{person}</p>
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <h1>Vote Calculator!</h1>
      {ListPeople()}

    </>
  );
}

export default App;