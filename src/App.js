
import './index.css';
import Header from './Header';

//another way of writing components is using the arrow function instead of function Header()
const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayer={1} />
      
    </div>
  )
}

export default App;
