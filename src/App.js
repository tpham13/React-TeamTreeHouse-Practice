
import './index.css';
import Header from './Header';
import Player from './Player';

//another way of writing components is using the arrow function instead of function Header()
const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <Player />
      
    </div>
  )
}

export default App;
