import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard.js'

function CharList() {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          setCharacters(res.data.results);
        })
        .catch(err => {
          console.log("Error: ", err)
        })
  }, []);
  console.log('characters', characters)

  return (
    <div>
     {
      characters.map((character, index) => {
        return <CharCard key={index} character={character} />
      })
   
    }
    </div>
  )
}

export default CharList;