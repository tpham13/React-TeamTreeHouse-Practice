
import './index.css';
import Header from './Header';
import Player from './Player';



//another way of writing components is using the arrow function instead of function Header()
const App = (props) => {
  console.log(props)
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayer={props.initialPlayers.length} />
      
          {props.initialPlayers.map( player => 
            <Player 
              name={player.name}
              key={player.id.toString()}
            />
          )}
    </div>
  );
}

export default App;
    




