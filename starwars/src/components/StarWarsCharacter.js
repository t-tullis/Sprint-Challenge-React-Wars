import React from 'react';
import "./StarWars.css";

const StarWarsCharacter = (props) =>{
        return(
            <div className='char-card'>
                <h2>Name: {props.char.name} </h2>
                <p><strong>Height: </strong>{props.char.height}</p>      
                <p><strong>Mass: </strong>{props.char.mass}</p>
                <p><strong>Hair Color: </strong>{props.char.hair_color}</p>
                <p><strong>Skin Color: </strong>{props.char.skin_color}</p>
            </div>
    )
}

export default StarWarsCharacter;