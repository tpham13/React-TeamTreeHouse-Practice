
import './App.css';

//another way of writing components is using the arrow function instead of function Header()
const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stat">Players:1</span>
    </header>
  );
}

export default Header;
