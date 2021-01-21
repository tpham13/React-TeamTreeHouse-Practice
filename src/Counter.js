import './index.css';
const Counter = () => {
    return (
    <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">35</span>
            <button className="counter-action increment"> + </button>
    </div>
    );
}

export default Counter;