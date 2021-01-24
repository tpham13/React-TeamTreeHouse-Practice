import React from 'react';
import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={ () => props.removePlayer(props.id)} >x</button>
            <ul>
                {props.name}
            </ul>
        </span>
        <Counter 
            score={ props.score }
            changeScore={ props.changeScore }
        />
       
      </div>
    );
  }

export default Player;