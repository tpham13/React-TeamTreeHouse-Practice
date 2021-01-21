import './index.css';
import Counter from './Counter';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
        {props.name}
        </span>
      </div>
    );
  }

export default Player;