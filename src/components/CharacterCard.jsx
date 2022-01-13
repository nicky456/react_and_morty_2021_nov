import React from 'react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'


const CharacterCard = ({char}) => {

  const [isFlipped, setIsFlipped] = useState(false);
  // console.log("check this: ");
  // console.log(char);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1" flipSpeedBackToFront="1" key={char.id}>    
      <div className="char-card" onClick={()=> setIsFlipped(!isFlipped)}>
          <div><img src={char.image} alt="Character pic..."/></div>
          <div className="char-details">
              <p>Name: {char.name}</p>
              <p>Species: {char.species}</p>
          </div>
      </div>
      <div className="char-card" onClick={()=> setIsFlipped(!isFlipped)}>
          <div><img src={char.image} alt="Characted pic..."/></div>
          <div className="char-details">
              <p>Name: {char.name}</p>
              <p>Species: {char.species}</p>
              <p># of episodes: {char.episode.length}</p>
              <p>Gender: {char.gender}</p>
              <p>Origin: {char.origin.name}</p>
              <p>Status: {char.status}</p>

          </div>
      </div>
    </ReactCardFlip>
  )
}

export default CharacterCard
