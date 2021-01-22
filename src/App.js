
import './index.css';
import Header from './Header';
import Player from './Player';
import React from 'react';


//another way of writing components is using the arrow function instead of function Header()
/* 
*/
class App extends React.Component {
/* App is responsible for rendering Player component so it's going to own and maintain 
the player state. That state will then passed down and avaiable to the player component as well
as all children of App via props. So we need to make App a stateful component
*/
  state = {
    players: [
      {
        name: "Thanh",
        id: 1,
      },
      {
        name: "Ngan",
        id: 2,
      },
      
      {
        name: "Chris",
        id: 3, 
      },
      
      {
        name: "Oliver",
        id: 4,
      }
      
    ]
  };

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
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              removePlayer={this.handleRemovePlayer}
            />
          )}
    </div>
  );
}
} 
export default App;
    




