import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

//another way of writing components is using the arrow function instead of function Header()
/* 
*/
class App extends Component {
/* App is responsible for rendering Player component so it's going to own and maintain 
the player state. That state will then passed down and avaiable to the player component as well
as all children of App via props. So we need to make App a stateful component
*/
  state = {
    players: [
      {
        name: "Thanh",
        score: 0,
        id: 1,
      },
      {
        name: "Ngan",
        score: 0,
        id: 2,
      },
      
      {
        name: "Chris",
        score: 0,
        id: 3, 
      },
      
      {
        name: "Oliver",
        score: 0,
        id: 4,
      }
      
    ]
  };

  // handleScoreChange does 2 things: 1 update the score, 2 tell React to re-rendered to make sure everything is up to date in the UI
  handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  // player id counter
  prevPlayerId = 4;

  handleAddPlayer = (name) => {
    this.setState({ 
      players: [
        ...this.state.players,
        {
          name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }
  handleRemovePlayer = (id) => {
    
    this.setState( prevState => {
      return {
      players: prevState.players.filter( p => p.id !== id)
      };
    })
  }
  render () {
  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard" 
        players={this.state.players} />
      
          {this.state.players.map((player, index) => 
            <Player 
              score ={player.score}
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              index={index}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          )}
      <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
  );
}
} 
export default App;
    




