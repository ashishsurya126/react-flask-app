import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch('/time')
      .then((res) => res.json())
      .then((data) => {
        setPeople(data.items);
      });
  }, []);
  console.log(people);
  return (
    <div className='App'>
      {people.map((person) => {
        return (
          <article
            style={{
              border: '1px solid black',
              background: 'gray',
              width: '90%',
              margin: 'auto',
            }}
            key={person.id}
          >
            <h4>First Name : {person.first_name}</h4>
            <h4>Second Name : {person.last_name}</h4>
            <h5>email : {person.email}</h5>
            <h5>Gender : {person.gender}</h5>
          </article>
        );
      })}
    </div>
  );
}

export default App;
