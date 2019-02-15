import React from 'react';
import StarWarsCharacter from "./StarWarsCharacter"
import "./StarWars.css";

const StarWarsCharactersList = (props) => {
    return(
      <div className='flexed-cards'>
        {props.starwarsChars.map(char => {
          return (
            <StarWarsCharacter key={char.created} char={char}/>
          )
        })}
      </div>
    )
}

export default StarWarsCharactersList;