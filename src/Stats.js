//this is a stateless file 
import React from 'react';

const Stats = (props) => {
    
    const totalPlayers = props.players.length;
    
    // To get total score we need to iterate over each player to get each player's score and total up the scores to produce a value
    // reduce is useful when you want to end up with a value other than an array like a number
    // reduce takes a callback function that get executed on each element of the arrray
    // callback takes two parameters (a accumulator that add up return value and the current item being processed in the array)
    const totalPoints = props.players.reduce( (total, player) => {
        return total + player.score;
    }, 0)
    return (
        <table className="stats">
            <tbody>
                <tr> 
                    {/* This first row display total number of players */}
                    <td>Players:</td>
                    <td>{ totalPlayers }</td>
                    </tr>
                <tr>
                    {/* This 2nd row display the total points */}
                    <td>Total Points:</td>
                    <td>{ totalPoints }</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats;