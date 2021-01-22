import './index.css';
import React from 'react'
//Counter has data (score) that change overtime, so we'll convert it to class and use state
//extend key word is used to create a subclass or a child of another class
//in this case, we extending from React.Component which is part of React's API for component class definition
class Counter extends React.Component  {
    // constructor() {
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }
    //another way to write state without the contrcutor and super: 
     state = {
        score: 0
    }
    
    //incrementScore does 2 things: 1 update the score, 2 tell React to re-rendered to make sure everything is up to date in the UI
    incrementScore = () => {
        // console.log("inside incrementScore")
        // console.log(this)
        this.setState({
            score: this.state.score + 1
        });
    }

    decrementScore = () => {
        this.setState({
            score: this.state.score - 1
        })
    }
    render() {
        console.log(this)
        return (
            <div className="counter">
               
                    <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                    {/* this is refer to the class itself and when using class component, we need to add this. We also replace this.props.score to this.state.score b/c Counter now maintain its own score */}
                    <span className="counter-score"> {this.state.score} </span>
                    <button className="counter-action increment" onClick={this.incrementScore}> + </button>
                    {/* if we write it using the arrow function, it automatically bind them to the scope in which they defined */}
                {/* <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>  */}
            </div>
            ); 
    } 
}

export default Counter;