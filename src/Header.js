import React from 'react';
import './index.css';
//another way of writing components is using the arrow function instead of function Header()
const Header = (props) => {
    console.log(props) // console will show this => {title: "Scoreboard", totalPlayer: 1}
  return (
    <header>
      <h1> { props.title }</h1>
      <span className="stat">Player:{ props.totalPlayer }</span>
    </header>
  );
}



export default Header;
