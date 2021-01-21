import './index.css';
import React from 'react'
//Counter has data (score) that change overtime, so we'll convert it to class and use state
//extend key word is used to create a subclass or a child of another class
//in this case, we extending from React.Component which is part of React's API for component class definition
class Counter extends React.Component  {
    render() {
        return (
            <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    {/* this is refer to the class itself and when using class component, we need to add this */}
                    <span className="counter-score"> {this.props.score} </span>
                    <button className="counter-action increment"> + </button>
            </div>
            ); 
    } 
}

export default Counter;