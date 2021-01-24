import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';

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

  // incrementScore does 2 things: 1 update the score, 2 tell React to re-rendered to make sure everything is up to date in the UI
  handleScoreChange = (delta) => {
        // this.setState( prevState => {
        //     return {
        //         score: prevState.score + 1
        //     }
        // });
        console.log(delta);
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
      <Header title="Scoreboard" totalPlayer={this.state.players.length} />
      
          {this.state.players.map( player => 
            <Player 
              score ={player.score}
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              changeScore={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          )}
    </div>
  );
}
} 
export default App;
    




