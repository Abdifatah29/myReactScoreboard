import React from 'react';
import propTypes from 'prop-types';

const Stats = ({players}) => {
    const totalPlayers = players.length;
    const totalPoints = players.reduce((totalScore, player) => {
        return totalScore + player.score;
    }, 0);
    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.prototype = {
    players: propTypes.arrayOf(propTypes.shape({
        score: propTypes.number
    }))
};
export default Stats;
