import './index.css';
const Counter = (props) => {
    return (
    <div className="counter">
            <button className="counter-action decrement"> {props.buttonDecrement} </button>
            <span className="counter-score"> {props.score} </span>
            <button className="counter-action increment"> {props.buttonIncrement} </button>
    </div>
    );
}

export default Counter;