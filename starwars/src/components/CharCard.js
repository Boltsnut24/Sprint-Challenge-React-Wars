import React from 'react';
import styled from 'styled-components';

const CharHolder = styled.div`
  background-color: lightgrey;
  height: 200px;
  width: 600px;
  color: yellow;
  margin: auto;
  padding: 20px 10px;
`;

function CharCard ({character}){
  console.log("props are:", {character})
  return(
    <CharHolder>
    <h2>{character.name}</h2>
    </CharHolder>
  )
}

export default CharCard;