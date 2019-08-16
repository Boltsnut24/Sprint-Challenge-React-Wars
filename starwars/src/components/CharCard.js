import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CharHolder = styled.div`
background: -moz-linear-gradient(90deg, #A6A6A6 0%, #A6A6A6 1%, #ffffff 50%, #696969 100%); /* ff3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #696969), color-stop(50%, #ffffff), color-stop(99%, #A6A6A6), color-stop(100%, #A6A6A6)); /* safari4+,chrome */
background: -webkit-linear-gradient(90deg, #A6A6A6 0%, #A6A6A6 1%, #ffffff 50%, #696969 100%); /* safari5.1+,chrome10+ */
background: -o-linear-gradient(90deg, #A6A6A6 0%, #A6A6A6 1%, #ffffff 50%, #696969 100%); /* opera 11.10+ */
background: -ms-linear-gradient(90deg, #A6A6A6 0%, #A6A6A6 1%, #ffffff 50%, #696969 100%); /* ie10+ */
background: linear-gradient(0deg, #A6A6A6 0%, #A6A6A6 1%, #ffffff 50%, #696969 100%); /* w3c */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#696969', endColorstr='#A6A6A6',GradientType=0 ); /* ie6-9 */
  width: 60%;
  color: #443e3e;
  text-shadow: 1px 1px 5px #fff;
  margin: auto;
  padding: 20px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid darkgrey;
  text-align: center;
`;

const NoBullList = styled.ul`
  list-style-type: none;
`

function CharCard ({character}){

  const [world, setWorld] = useState('')
  axios.get(`${character.homeworld}`)
    .then(response => {
      setWorld(response.data.name);
    })
    .catch(error=>{
      console.error(error);
    })
  
  return(
    <CharHolder>
    <h2>{character.name}</h2>
    <NoBullList>Description
      <li>Height: {character.height}</li>
      <li>Mass: {character.mass}</li>
      <li>Gender: {character.gender}</li>
      <li>Hair Color: {character.hair_color}</li>
      <li>Skintone: {character.skin_color}</li>
      <li>Homeworld: {world}</li>
    </NoBullList>
    </CharHolder>
  )
}

export default CharCard;