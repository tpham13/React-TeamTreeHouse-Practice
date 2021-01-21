
import './index.css';
import Player from './Player';

//another way of writing components is using the arrow function instead of function Header()
const App = () => {
  return (
    <div className="player">
      <Player 
        name="Thanh"
        score={50}
      />
    </div>
  );
}



export default App;



