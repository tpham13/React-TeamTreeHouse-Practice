
import './index.css';
import Player from './Player';



//another way of writing components is using the arrow function instead of function Header()
const App = (props) => {
  console.log(props)
  return (
    
    <div className="player">
      
          {props.initialPlayers.map( player => 
            <Player 
              name={player.name}
              score={player.score}
              key={player.id.toString()}
            />
          )}
    </div>
  );
}



export default App;



