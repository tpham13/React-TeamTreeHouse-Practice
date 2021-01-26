import React from 'react';
import './index.css';
import Stats from './Stats'
//another way of writing components is using the arrow function instead of function Header()
const Header = (props) => {
    console.log(props) // console will show this => {title: "Scoreboard", totalPlayer: 1}
  return (
    <header>
      <Stats players={props.players}/>
      <h1> { props.title }</h1>
    </header>
  );
}



export default Header;
