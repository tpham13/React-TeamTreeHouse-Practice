
import './index.css';
import Header from './Header';

//another way of writing components is using the arrow function instead of function Header()
const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      
    </div>
  )
}

export default App;
