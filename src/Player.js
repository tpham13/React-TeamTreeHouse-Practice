import './index.css';
import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
        {props.name}
        </span>
        <Counter buttonDecrement="-" buttonIncrement="+" score={40}/>
       
      </div>
    );
  }

export default Player;