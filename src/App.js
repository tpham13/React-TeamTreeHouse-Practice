
import './index.css';
import Header from './Header';
import Player from './Player';



//another way of writing components is using the arrow function instead of function Header()
const App = (props) => {
  console.log(props)
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayer={1} />
      
      {props.initialPlayers.map( player => 
        <Player 
          name={player.name}
          score={player.score}
        />
      )}
    </div>
  );
}

export default App;
    




