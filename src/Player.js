import './index.css';
import Counter from './Counter';

const Player = () => {
    return (
      <div className="player">
        <span className="player-name">
        Thanh
        </span>
        <Counter buttonDecrement="-" buttonIncrement="+" score={40}/>
       
      </div>
    );
  }

export default Player;