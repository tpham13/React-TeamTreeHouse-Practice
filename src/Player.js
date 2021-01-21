import './index.css';

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
            <ul>
                {props.name}
                {props.score}
            </ul>
        </span>
      </div>
    );
  }

export default Player;