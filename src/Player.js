import './index.css';
import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
            <ul>
                {props.name}
                {props.score}
            </ul>
        </span>
        <Counter buttonDecrement="-" buttonIncrement="+" />
       
      </div>
    );
  }

export default Player;